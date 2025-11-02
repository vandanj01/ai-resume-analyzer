# AI Resume Analyzer

AI Resume Analyzer is a modern web application that leverages AI to intelligently review, analyze, and provide feedback on resumes. Designed for job seekers and recruiters alike, it offers instant insights to help improve resume quality and optimize applications for targeted job descriptions.

## Features

- **AI-Powered Resume Analysis:** Upload your resume and get actionable feedback powered by AI.
- **Keyword & Skills Extraction:** Identifies relevant skills and keywords to match job postings.
- **Scoring & Recommendations:** Receive resume scores and personalized improvement tips.
- **Fast & Interactive UI:** Built with React and optimized for performance.
- **Responsive Design:** Works on desktop and mobile devices.

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, TypeScript
- **Backend:** Node.js (Express or similar, if present)
- **AI/ML:** Integration with AI APIs using Puter.js
- **Build Tools:** Vite (for fast development and builds)
- **Styling:** Tailwind CSS
- **Containerization:** Docker (for easy deployment)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vandanj01/ai-resume-analyzer.git
cd ai-resume-analyzer
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to see the app.

### Building for Production

Create a production-ready build:

```bash
npm run build
```

### Running the Production Server

After building, you can start the server:

```bash
npm run start
```

### Deployment

#### Docker Deployment

To build and run the app using Docker:

```bash
docker build -t ai-resume-analyzer .
docker run -p 3000:3000 ai-resume-analyzer
```

Your app will be live at [http://localhost:3000](http://localhost:3000).

You can deploy the Docker container to platforms such as:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

#### Manual Deployment

If you prefer manual deployment (e.g., to your own server):

1. Build the app: `npm run build`
2. Deploy the `/build` directory and run the server-side output as needed.


## Customization

- **Styling:** Tailwind CSS is pre-configured but you can use any CSS framework.
- **AI Integration:** Update the backend or API integration to connect with your preferred AI service.

---

Built with ❤️ by [vandanj01](https://github.com/vandanj01).
