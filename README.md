# AI Cover Letter Generator

An AI-powered web application that generates professional and personalized cover letters based on the candidate's information, target job, company, skills, job description, and uploaded resume.

The application uses Google's Gemini API to generate the cover letter and provides options to copy the generated letter or download it as a PDF.

## Live URL

https://cover-letter-generator-neon.vercel.app/

## Features

- Generate personalized cover letters using AI
- Enter candidate name, target role, and target company
- Add key skills and job description
- Upload a resume in PDF format
- Extract text from uploaded resumes
- Use resume information while generating the cover letter
- Markdown-based formatting for generated letters
- Live cover letter preview
- Copy generated cover letter to clipboard
- Download cover letter as a PDF
- Regenerate the cover letter
- Drag-and-drop resume upload
- Responsive user interface
- Loading overlay while AI generates the letter
- Secure API key management using environment variables

---

## How It Works

The application follows these steps:

1. The user enters their personal and job-related information.
2. The user can optionally upload their resume in PDF format.
3. The application extracts text from the uploaded resume.
4. The entered information and resume text are combined into an AI prompt.
5. The prompt is sent to the Gemini API.
6. Gemini generates a personalized cover letter.
7. Markdown returned by the AI is converted into HTML using `marked`.
8. The generated letter is displayed in the preview panel.
9. The user can copy the letter or download it as a PDF.

---

## Screenshots
![Screenshots](Sprint04ss)

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Vite

### AI

- Google Gemini API

### Libraries

- `marked` - Converts Markdown into HTML
- `html2pdf.js` - Generates downloadable PDF files
- `pdfjs-dist` - Extracts text from uploaded PDF resumes
- `Font Awesome` - Icons

### Deployment

- Vercel

### Version Control

- Git
- GitHub

---

## Project Structure

```text
Cover_letter_generator/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── main.js
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
## Installation
# Clone the repository
git clone https://github.com/shahira-sohail/Cover_letter_generator.git
# Open the project
cd Cover_letter_generator
# Install dependencies
npm install
# Create environment variables

Create a .env file in the root directory:

VITE_GEMINI_API_KEY=your_gemini_api_key

Replace your_gemini_api_key with your Gemini API key.

# Start the development server
npm run dev

The application will be available on the local Vite development server.

## Environment Variables

The application uses the following environment variable:

#Variable	Description
VITE_GEMINI_API_KEY	API key used to communicate with the Gemini API

The .env file should never be committed to GitHub.

The project .gitignore includes:

.env
.env.*
!.env.example

## Resume Upload

Users can upload a PDF resume using either:

Browse File
Drag and drop

The application uses pdfjs-dist to extract text from the uploaded PDF.

The extracted resume content is then included in the prompt sent to Gemini.

## AI Prompt

The application provides Gemini with information including:

- Candidate name
- Target role
- Target company
- Key skills
- Job description
- Resume content

The AI is instructed to:

- Personalize the cover letter
- Match the candidate's experience with the job description
- Use information from the resume
- Avoid inventing experience
- Maintain a professional tone
- Generate approximately 300–400 words
- Return Markdown-formatted content

##PDF Generation

The generated HTML cover letter is converted into a PDF using html2pdf.js.

The PDF export:

- Uses A4 format
- Uses portrait orientation
- Applies a white background
- Uses black text
- Preserves headings and paragraphs
- Provides a downloadable Cover-Letter.pdf file

## User Flow
Enter Candidate Information
          ↓
Enter Job Information
          ↓
Upload Resume (Optional)
          ↓
Extract Resume Text
          ↓
Generate Prompt
          ↓
Gemini API
          ↓
AI Generated Cover Letter
          ↓
Markdown → HTML
          ↓
Preview
          ↓
Copy / Regenerate / Download PDF

##Error Handling

The application handles common situations such as:

- Missing resume file
- Invalid or unavailable API response
- API request failure
- Failed AI generation
- Empty generated content
- Loading state during generation

When an error occurs during generation, the application displays:

- Something went wrong. Please try again!

## Deployment

The application is deployed using Vercel.

For deployment:

- Push the project to GitHub.
- Import the GitHub repository into Vercel.
- Configure the project as a Vite application.
- Add the environment variable:
- VITE_GEMINI_API_KEY
- Deploy the application.

Whenever new changes are pushed to the GitHub main branch, Vercel can automatically create a new deployment.

##Author

Shahira Sohail

## License

This project is created for educational and development purposes.




























