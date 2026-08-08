# Learning Prompts

This document contains the learning-oriented prompts used to understand the concepts, tools, libraries, and development practices involved in building the Cover Letter Generator project.

The prompts focus on understanding and improving the implementation rather than generating the project's core logic.

---

## 1. Understanding the Project Architecture

### Prompt
Explain the overall architecture of a client-side Cover Letter Generator built using HTML, CSS, JavaScript, Vite, and an AI API. Explain the role of each technology and how they work together.

### Prompt
Explain the typical flow of a web application that takes user input, sends it to an AI API, receives generated content, and displays the result on the webpage.

### Prompt
Explain how the different files in a Vite project such as `index.html`, `src/main.js`, `src/style.css`, `package.json`, and `.gitignore` are related to each other.

---

## 2. Understanding Vite

### Prompt
What is Vite and why is it commonly used for modern JavaScript projects?

### Prompt
Explain the purpose of `npm install` and what happens when dependencies are installed in a Vite project.

### Prompt
Explain the difference between development mode and production build in Vite.

### Prompt
Explain how environment variables work in a Vite project and why variables intended for client-side use need the `VITE_` prefix.

---

## 3. Understanding Environment Variables

### Prompt
What is an environment variable and why is it useful in a web application?

### Prompt
Explain what a `.env` file is and why it should generally not be uploaded to GitHub.

### Prompt
Explain the purpose of `.gitignore` and how it prevents files such as `.env` and `node_modules` from being committed.

### Prompt
Explain why putting an API key in a frontend application does not make the key completely secret, even when it is stored in an environment variable.

---

## 4. Understanding API Requests

### Prompt
Explain what an API is in simple terms and how a frontend application communicates with an API.

### Prompt
Explain the JavaScript `fetch()` function and how it is used to make HTTP requests.

### Prompt
Explain the purpose of the following parts of a fetch request:
- URL
- HTTP method
- Headers
- Request body
- Response

### Prompt
What does `response.ok` mean when working with the Fetch API?

### Prompt
Explain why `response.json()` is used after receiving a JSON API response.

---

## 5. Understanding Async JavaScript

### Prompt
Explain `async` and `await` in JavaScript using a simple example.

### Prompt
Why are API requests usually handled using asynchronous JavaScript?

### Prompt
Explain the difference between synchronous and asynchronous operations in a beginner-friendly way.

### Prompt
Explain how `try`, `catch`, and `finally` work when handling asynchronous API requests.

---

## 6. Understanding AI API Responses

### Prompt
Explain the general structure of a JSON response returned by a generative AI API.

### Prompt
How can JavaScript access nested information from a JSON response object?

### Prompt
Explain why checking whether an API request was successful before processing its response is important.

### Prompt
What are common reasons an AI API request might fail, and how should a frontend application handle those errors?

---

## 7. Understanding Markdown and Marked.js

### Prompt
What is Markdown and why is it useful for displaying structured text?

### Prompt
Explain what the `marked` library does in a JavaScript application.

### Prompt
Explain the difference between Markdown text and HTML generated from Markdown.

### Prompt
Why might an application use `marked.parse()` before displaying AI-generated Markdown content?

### Prompt
Explain the security considerations of rendering dynamically generated HTML using `innerHTML`.

---

## 8. Understanding DOM Manipulation

### Prompt
Explain what the DOM is and how JavaScript interacts with HTML elements through the DOM.

### Prompt
Explain how `document.getElementById()` works.

### Prompt
Explain the difference between `textContent` and `innerHTML` and when each should be used.

### Prompt
Why is `addEventListener()` preferred for handling user interactions in JavaScript?

### Prompt
Explain how form submission events work in JavaScript.

---

## 9. Understanding Form Handling

### Prompt
Explain how JavaScript can read values entered into HTML input fields and textareas.

### Prompt
Why is `.trim()` useful when processing user input?

### Prompt
What does `event.preventDefault()` do when handling a form submission?

### Prompt
What are common validation checks that should be performed before sending form data to an API?

---

## 10. Understanding Resume Uploads

### Prompt
Explain how file uploads work in a browser using an HTML file input.

### Prompt
Explain how JavaScript can access the file selected by a user.

### Prompt
What is an `ArrayBuffer` and why can it be useful when processing uploaded files?

### Prompt
Explain how drag-and-drop file uploading works in JavaScript.

### Prompt
What edge cases should be considered when allowing users to upload PDF resumes?

---

## 11. Understanding PDF Text Extraction

### Prompt
What is PDF text extraction and why is it useful in a Resume-to-Cover-Letter application?

### Prompt
Explain the general process of extracting text from a PDF in a browser using PDF.js.

### Prompt
What is the purpose of a PDF.js worker?

### Prompt
Why might text extraction from a PDF fail or produce incomplete text?

### Prompt
What is the difference between a text-based PDF and a scanned/image-based PDF?

---

## 12. Understanding PDF Generation

### Prompt
Explain the difference between generating a PDF from plain text and generating a PDF from HTML.

### Prompt
Explain how an HTML-to-PDF library works at a high level.

### Prompt
What factors can affect the appearance of an HTML document when it is converted into a PDF?

### Prompt
Why can CSS styles sometimes look different in a generated PDF compared with the webpage?

### Prompt
Explain how page size, margins, scaling, fonts, and background colors can affect PDF output.

---

## 13. Understanding CSS and Layout

### Prompt
Explain how CSS Grid is being used to create a two-panel dashboard layout.

### Prompt
Explain the difference between `display: flex` and `display: grid`.

### Prompt
Explain how responsive design can be implemented using CSS media queries.

### Prompt
What are common reasons for excessive spacing between headings and paragraphs in a webpage?

### Prompt
Explain how `margin`, `padding`, `line-height`, and heading styles affect spacing in a document.

### Prompt
How can CSS styles be applied specifically to dynamically generated content inside a preview container?

---

## 14. Understanding Responsive Design

### Prompt
Explain how a desktop dashboard can be adapted for tablets and mobile devices.

### Prompt
Why is it important to test a web application at different screen sizes?

### Prompt
Explain how CSS media queries work with `max-width`.

### Prompt
What common responsive design problems can occur with sidebars, forms, and preview panels?

---

## 15. Understanding UI States

### Prompt
What are loading, success, error, and empty states in a web application?

### Prompt
Why should an application display a loading state while waiting for an AI API response?

### Prompt
Explain how an overlay and spinner can be used to communicate that an operation is in progress.

### Prompt
What should happen when an API request fails or returns an unexpected response?

---

## 16. Understanding Clipboard APIs

### Prompt
Explain how the browser Clipboard API works.

### Prompt
What does `navigator.clipboard.writeText()` do?

### Prompt
What are some browser security restrictions related to clipboard access?

### Prompt
Why is it useful to provide visual feedback after successfully copying content?

---

## 17. Understanding Git and GitHub

### Prompt
Explain the difference between Git and GitHub in simple terms.

### Prompt
Explain the purpose of `git init`, `git add`, `git commit`, and `git push`.

### Prompt
What is a Git remote and what does the `origin` remote represent?

### Prompt
Explain why a push can be rejected with the message `fetch first`.

### Prompt
Explain the difference between `git pull`, `git fetch`, `git merge`, and `git rebase`.

### Prompt
What causes a merge conflict in Git and how can it be resolved safely?

### Prompt
Explain why `node_modules` and `.env` should not normally be committed to GitHub.

---

## 18. Understanding Deployment with Vercel

### Prompt
What is Vercel and why is it useful for deploying frontend applications?

### Prompt
Explain how a GitHub repository can be connected to Vercel for automatic deployment.

### Prompt
What happens when a new commit is pushed to a GitHub repository connected to Vercel?

### Prompt
Explain the difference between preview deployments and production deployments in Vercel.

### Prompt
Why do environment variables need to be configured separately in Vercel?

### Prompt
What should be checked when an application works locally but does not work after deployment?

---

## 19. Debugging and Error Handling

### Prompt
What is the best way to debug a JavaScript application using browser developer tools?

### Prompt
Explain how the browser Console can help identify JavaScript errors.

### Prompt
How can the Network tab be used to debug API requests?

### Prompt
What should be checked when an API request works locally but fails after deployment?

### Prompt
Explain how to identify whether an issue is caused by HTML, CSS, JavaScript, an API request, or deployment configuration.

---

## 20. Accessibility

### Prompt
What is web accessibility and why is it important?

### Prompt
Explain why form inputs should have associated labels.

### Prompt
What are ARIA attributes and when should they be used?

### Prompt
How can loading and error messages be made accessible to screen-reader users?

### Prompt
What accessibility considerations should be followed when creating buttons and interactive elements?

---

## 21. Security Considerations

### Prompt
What security risks should be considered when accepting user-provided resume text and job descriptions?

### Prompt
Why should user-generated or AI-generated HTML be handled carefully?

### Prompt
Explain why frontend API keys cannot be considered fully private.

### Prompt
What security improvements could be made if this application were converted from a client-side application to a production SaaS application?

---

## 22. Project Testing

### Prompt
What test cases should be considered for a Cover Letter Generator?

### Prompt
What edge cases should be tested for empty form fields?

### Prompt
What should happen if the user uploads an invalid file?

### Prompt
What should happen if the uploaded resume contains no extractable text?

### Prompt
What should happen if the AI API is unavailable?

### Prompt
What should be tested when downloading the generated cover letter as a PDF?

### Prompt
What should be checked on mobile, tablet, and desktop screen sizes?

---

## 23. Performance

### Prompt
What factors can affect the performance of a frontend application that uses external APIs and PDF processing?

### Prompt
How can unnecessary DOM operations and repeated event handlers affect frontend performance?

### Prompt
Why should large uploaded files be handled carefully in browser-based applications?

### Prompt
How can browser developer tools be used to identify performance problems?

---

## 24. General Learning Prompts

### Prompt
Explain this project to a beginner who has basic knowledge of HTML, CSS, and JavaScript.

### Prompt
Explain the complete data flow of a Cover Letter Generator from user input to generated output and PDF download.

### Prompt
Explain the purpose of every major dependency used in this project and why it is needed.

### Prompt
What concepts should a beginner learn to understand this project completely?

### Prompt
Review the project from a learning perspective and identify areas where the developer can improve their understanding of JavaScript, APIs, frontend development, and deployment.

---

## Purpose of This Document

These prompts are intended to support learning and understanding of the technologies and development concepts used in the Cover Letter Generator project.

They focus on:
- Understanding existing code
- Learning frontend concepts
- Understanding APIs
- Learning asynchronous JavaScript
- Understanding PDF processing
- Learning Git and GitHub
- Understanding deployment
- Debugging
- Accessibility
- Security
- Performance
- Testing

They are not intended to document prompts used to generate the project's core implementation.
