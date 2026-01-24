# PsychSearch  
*(Prototype formerly named Mindsoother)*

<img width="1495" height="751" alt="PsychSearch Screenshot" src="https://github.com/user-attachments/assets/11501f80-ea2f-44ce-87e5-d77072f72547" />

## Overview
PsychSearch is a full-stack research platform that helps academic researchers quickly find open-access articles that aren't behind paywalls. Users enter research queries, which are summarized with AI-generated descriptions to clarify and refine the search, and the platform allows users to save relevant articles into a personalized library with folders and notes.

## Features

- Secure user authentication with account creation and login
- AI-generated summaries that clarify and refine research queries
- Discovery of open-access psychology research articles
- Personalized article library with custom folders
- Note-taking functionality for saved articles
- Real-time filtering and management of saved articles
- Ability to delete and reorganize saved content without page refreshes

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **Authentication & Authorization:** Supabase (with row-level security)
- **AI Integration:** ChatGPT API (query summarization)
- **Deployment:** Render with CI/CD pipeline

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

## Getting Started
How to run it locally.
npm run dev 

## Future Improvements (optional)
-AI-driven content recommendations (e.g., relevant educational videos based on article interactions)
-Built-in citation generation (APA / MLA formats) for saved articles
