# Stopwatch Application

A modern, responsive stopwatch application built with React, TypeScript, and Tailwind CSS.

## Features

- Precise timing with millisecond accuracy
- Start/Pause functionality
- Reset capability
- Clean and responsive UI
- Modern design with Lucide icons

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React for icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint
- `npm run preview` - Previews the production build locally

## CI/CD

### Jenkins Pipeline

The project includes a Jenkinsfile that automates:
- Dependency installation
- Linting
- Building
- Artifact archiving

### Azure DevOps Pipeline

The azure-pipelines.yml configuration provides:
- Automated builds on Ubuntu
- Dependency caching
- Linting
- Production builds
- Artifact publishing

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Stopwatch.tsx
│   ├── App.tsx
│   └── main.tsx
├── Jenkinsfile
├── azure-pipelines.yml
└── README.md
```