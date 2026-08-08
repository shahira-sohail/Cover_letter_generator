const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(API_KEY);
import html2pdf from "html2pdf.js";
import "./style.css";
import { marked } from "marked";
import {jsPDF} from "jspdf";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const form = document.getElementById("form");
const candidateName = document.getElementById("candidate-name");
const targetRole = document.getElementById("target-role");
const targetCompany = document.getElementById("target-company");
const keySkills = document.getElementById("key-skills");
const jobDescription = document.getElementById("job-description");
const copyBtn = document.getElementById("copy-btn");
const regenerateBtn = document.getElementById("regenerate-btn");
regenerateBtn.addEventListener("click",generateCoverLetter);
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click",downloadPDF);
const output = document.getElementById("cover-letter-output");
const fileName = document.getElementById("file-name");
const uploadBox = document.getElementById("upload-box");
const loadingOverlay = document.querySelector(".loading-overlay");
let resumeText = "";
const browseBtn = document.getElementById("browse-btn");
const resumeUpload = document.getElementById("resume-upload");
browseBtn.addEventListener("click",function(){
    resumeUpload.click();
});
resumeUpload.addEventListener("change",readResume);

form.addEventListener("submit",generateCoverLetter);
async function generateCoverLetter(event = null){
    if(event){
        event.preventDefault();
    }
    const name = candidateName.value.trim();
    const role = targetRole.value.trim();
    const company = targetCompany.value.trim();
    const skills = keySkills.value.trim();
    const description = jobDescription.value.trim();
    
    const prompt = `
        You are an expert HR recruiter and professional cover letter writer.

        Write a professional and personalized cover letter.

        Candidate Name: ${name}

        Target Role: ${role}

        Target Company: ${company}

        Key Skills:
        ${skills}

        Job Description:
        ${description}

        Candidate Resume:
        ${resumeText}

        Instructions:
        - Use the resume information whenever relevant.
        - Match the candidate's experience with the job description.
        - Keep the tone professional.
        - Return the response in Markdown format with proper headings, paragraphs and bullet points where appropriate.
        - Keep the length around 300–400 words.
        - Do not invent experience that is not present in the resume.
        - Remove the excess or unnecessary spaces between the heading and paragrahs.
        - Make it ATS Friendly.

        IMPORTANT:
       Use proper Markdown formatting.

       Requirements:
       # Cover Letter

       ## Introduction

       (paragraph)

       ## Skills

       - Skill 1
       - Skill 2
       - Skill 3

       ## Why I am a good fit

        (paragraph)

        ## Closing

        (paragraph)
        `;
        
        try{
            loadingOverlay.classList.remove("hidden");

            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                        "x-goog-api-key": API_KEY
                    },

                    body : JSON.stringify({
                         contents : [
                             {
                                parts : [
                                {
                                    text : prompt
                                }
                                ]
                            }
                        ]
                    })
                }
            );
            console.log(response);
            if(!response.ok){
                const error = await response.json();
                console.log(error);
                return;
            }

            const data = await response.json();
            const coverLetter = data.candidates[0].content.parts[0].text;     
            output.innerHTML = marked.parse(coverLetter);
        }
        catch(error){
            output.textContent = "Something went wrong. Please try again!";
            console.log(error);
        }
        finally{
            loadingOverlay.classList.add("hidden");
        }
}

copyBtn.addEventListener("click",copyCoverLetter);
function copyCoverLetter(){
    if(output.textContent.trim() === ""){
        return;
    }
    navigator.clipboard.writeText(output.textContent);

    copyBtn.innerHTML = `
        <i class="fa-solid fa-check"></i>
        Copied!
    `;

    setTimeout(function(){
        copyBtn.innerHTML = `
            <i class="fa-solid fa-check"></i>
                Copy to Clipboard
        `;
    },2000);

}

function downloadPDF() {

    const element = document.getElementById("cover-letter-output");

    html2pdf()
        .set({
            margin: 10,
            filename: "Cover-Letter.pdf",
            image: {
                type: "jpeg",
                quality: 1
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            }
        })
        .from(element)
        .save();
}

async function readResume(event) {
    const file = event.target.files[0];
    if(!file){
        return;
    }
    fileName.innerHTML = `
        <i class="fa-solid fa-file-pdf"></i>
        ${file.name}
    `;
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data : arrayBuffer}).promise;
    resumeText = "";
    for(let i = 1; i <= pdf.numPages; i++){
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(" ");
        resumeText += pageText + "\n";
        console.log(resumeText);
    }
}

uploadBox.addEventListener("dragover",function(event){
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if(!file){
        return;
    }
    resumeUpload.files = event.dataTransfer.files;
    resumeUpload.dispatchEvent(new Event("change"));
});

uploadBox.addEventListener("dragenter",function(){
    uploadBox.classList.add("dragging");
});

uploadBox.addEventListener("dragleave", function(){
    uploadBox.classList.remove("dragging");
});

uploadBox.addEventListener("drop", function(event){
    event.preventDefault();
    uploadBox.classList.remove("dragging");
    const file = event.dataTransfer.files[0];
    if(!file){
        return;
    }
    resumeUpload.files = event.dataTransfer.files;
    resumeUpload.dispatchEvent(new Event("change"));
});
