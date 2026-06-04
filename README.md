# Barbara Caldeira Portfolio

This project is my personal portfolio website, created to present my academic background, technical skills, and software projects in a clear and professional way.

The portfolio highlights my work as a Computer Science student at CU London and includes projects focused on cloud computing, AI-supported systems, and IoT development. It was designed to give recruiters, lecturers, and collaborators a simple way to understand what I have built and the technologies I have worked with.

## What The Portfolio Includes

- An introduction and About Me section
- A selected projects section
- A detailed presentation of **MamaMind**, my cloud-based postpartum wellbeing project
- A **Smart Baby Room Monitor** IoT project linked to GitHub
- A skills section covering React, AWS, AI tools, and software development topics
- A previous work experience section

## What I Built

I built this portfolio as a standalone React application using **Vite**.

The website was created to:

- present my projects in a structured and readable format
- explain the purpose and technical stack behind each project
- provide direct links to live work, GitHub repositories, and future demo videos
- create a professional online presence that can continue to grow with new projects

I also added:

- project detail modals for expanded explanations
- architecture visuals for MamaMind
- GitHub, LinkedIn, and contact links
- a responsive layout for desktop and mobile viewing

## Main Technologies Used

- React
- Vite
- JavaScript
- CSS
- GitHub
- AWS Amplify

## Running The Project Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

The production output is generated in the `dist` folder.

## Deployment With AWS Amplify

This portfolio is deployed using **AWS Amplify Hosting**.

### Deployment process

1. The portfolio code is stored in GitHub.
2. The GitHub repository is connected to AWS Amplify.
3. AWS Amplify automatically builds and deploys the site from the `main` branch.
4. Every time new changes are pushed to GitHub, Amplify can rebuild and publish the updated version.

### Build settings used in Amplify

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Purpose Of This Portfolio

The purpose of this portfolio is to document my progress, present the projects I have developed, and demonstrate my growing interest in software engineering, cloud technologies, and AI-integrated systems.

It is both a personal showcase and a practical project in itself.
