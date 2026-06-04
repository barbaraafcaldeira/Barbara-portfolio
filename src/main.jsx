import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "MamaMind",
    type: "Full-stack AWS wellbeing app",
    description:
      "A secure postpartum journaling platform that combines React, Cognito, API Gateway, Lambda, DynamoDB, Comprehend, Bedrock, and Lex to offer risk-aware support.",
    stack: ["React", "AWS Amplify", "Cognito", "Lambda", "DynamoDB", "Bedrock", "Lex"],
    impact: "Built end-to-end cloud architecture, AI-assisted risk evaluation, and a guided support flow.",
    link: "https://d275eiga52hnuu.cloudfront.net",
    linkLabel: "View MamaMind page",
    demoLink: "#",
    demoLabel: "Demo",
    architectureImage: "/images/mamamind-architecture.jpeg",
    architectureAlt: "MamaMind architecture diagram showing the React app, AWS services, and chatbot flow",
    details: [
      "This project presents MamaMind, a cloud-based journaling and support prototype designed to support postpartum wellbeing. The system addresses the challenge of identifying early signs of emotional distress after childbirth, particularly when mothers express feelings indirectly or through mixed emotions.",
      "MamaMind was developed using a React frontend and AWS services, including Cognito, API Gateway, Lambda, DynamoDB, Comprehend, Bedrock, Lex, S3, CloudFront, IAM, and CloudWatch.",
      "The application allows users to sign in securely, write journal entries, receive sentiment and contextual risk feedback, complete an EPDS-style check-in, view explainable recommendations, and optionally interact with Petra, a chatbot assistant. MamaMind is not intended as a diagnostic tool, but demonstrates how cloud-based AI can support reflection, awareness, and signposting.",
    ],
  },
  {
    title: "Risk Evaluation Pipeline",
    type: "Serverless data workflow",
    description:
      "CSV-based evaluation tooling for comparing rule-based, AI-assisted, and hybrid risk scoring approaches against test sets.",
    stack: ["Node.js", "Lambda", "Amazon Bedrock", "Amazon Comprehend", "CSV testing"],
    impact: "Created repeatable evaluation assets to make model behaviour easier to inspect and improve.",
    link: "#",
    linkLabel: "View project details",
    details: [
      "This work was developed as part of the MamaMind project to compare different approaches for identifying risk in journal-style text.",
      "I prepared CSV test sets and Lambda-based evaluation scripts to compare rule-based scoring, Amazon Comprehend sentiment analysis, Bedrock-assisted evaluation, and hybrid logic.",
      "The goal was to make the AI behaviour easier to inspect, test, and explain before connecting it to the user-facing MamaMind experience.",
    ],
  },
  {
    title: "AWS Architecture Portfolio",
    type: "Deployment-ready frontend",
    description:
      "A focused portfolio site prepared for GitHub-based deployment to AWS Amplify Hosting with automated builds and HTTPS.",
    stack: ["React", "Vite", "GitHub", "AWS Amplify", "CloudFront"],
    impact: "Designed to present technical projects clearly for recruiters, assessors, and collaborators.",
    link: "#deploy",
    linkLabel: "See deploy plan",
    details: [
      "This portfolio is the presentation layer for my technical work, designed to clearly explain MamaMind, the AWS architecture, and the skills developed through the project.",
      "It is built with React and Vite, with a deployment path prepared for GitHub and AWS Amplify Hosting.",
      "The focus is on making the finished project, technical stack, and learning outcomes easy for viewers to scan and understand.",
    ],
  },
  {
    title: "Smart Baby Room Monitor",
    type: "IoT monitoring project",
    description:
      "A smart baby room monitor project developed with the Wokwi simulator to explore hardware monitoring, room conditions, and IoT-style alerting.",
    stack: ["Wokwi", "IoT", "Embedded systems", "Sensors", "Simulation", "GitHub"],
    impact: "Explored how simulated hardware can be used to design safer, more responsive monitoring systems for baby room conditions.",
    link: "https://github.com/barbaraafcaldeira/smart-baby-room-monitor",
    linkLabel: "View GitHub repository",
    demoLink: "#",
    demoLabel: "Demo",
    details: [
      "This project explores the idea of a smart baby room monitor, designed to help track environmental conditions in a baby's room and support a safer and more responsive space.",
      "I used the Wokwi simulator to model the hardware and test the project in a virtual environment, which made it possible to explore IoT concepts without requiring the physical components at every stage.",
      "The project focuses on combining monitoring, simulation, and practical problem solving, while building my confidence with embedded systems, sensor-based logic, and connected technology design.",
    ],
  },
];

const skills = [
  "React component development",
  "JavaScript application logic",
  "AWS serverless architecture",
  "AWS Lambda function development",
  "Amazon API Gateway REST APIs",
  "Amazon Cognito authentication",
  "Amazon DynamoDB data storage",
  "Amazon S3 static asset hosting",
  "Amazon CloudFront distribution",
  "AWS Amplify deployment",
  "Amazon Comprehend sentiment analysis",
  "Amazon Bedrock AI integration",
  "Amazon Lex chatbot flows",
  "Risk scoring rule design",
  "CSV-based model evaluation",
  "Technical documentation",
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <main className="portfolio">
      <nav className="topbar" aria-label="Portfolio navigation">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark">B</span>
          <span>Barbara Caldeira</span>
        </a>
        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science Student</p>
          <h1>Professional Portfolio</h1>
          <p className="hero-text">
            A professional portfolio presenting my academic projects, cloud computing experience, and growing skills in
            software development.
          </p>
          <div className="hero-actions">
            <a className="button secondary" href="mailto:barbara.caldeira2605@gmail.com">Contact me</a>
            <a className="button ghost" href="https://github.com/barbaraafcaldeira" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button ghost" href="https://www.linkedin.com/in/barbara-caldeira-b95819243" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="hero-intro-line">
            Computer Science student based in London, building thoughtful digital solutions.
          </p>
        </div>
      </section>

      <section className="section intro">
        <p>
          I am focused on building reliable digital products with clear user journeys, clean React interfaces, and cloud
          services that solve real problems. This portfolio is ready to deploy from GitHub into AWS Amplify Hosting.
        </p>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <div>
            <p className="eyebrow">About me</p>
            <h2>Computer Science student at CU London.</h2>
          </div>
          <p>
            I am from Brazil and a third-year Computer Science student at CU London, where I am developing the
            technical and creative skills needed to build thoughtful digital solutions. I have lived in London for the
            past six years and hold indefinite leave to remain.
          </p>
          <p>
            I value work that is meaningful, practical, and centred around people. I enjoy travelling, spending time
            with my family, and being part of something that has a positive purpose.
          </p>
          <p>
            I am particularly interested in becoming a software engineer and in developing systems that combine strong
            functionality with AI tools. I am naturally hardworking, adaptable, and comfortable multitasking, and I
            enjoy contributing to projects where I can keep learning and add real value.
          </p>
        </div>
        <figure className="about-image">
          <img src="/images/image-5.jpeg" alt="Barbara Caldeira smiling" />
        </figure>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list" aria-label={`${project.title} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <strong>{project.impact}</strong>
              <div className="project-actions">
                <a className="project-link" href={project.link}>
                  {project.linkLabel}
                </a>
                {project.demoLink && (
                  <a className="project-link" href={project.demoLink}>
                    {project.demoLabel}
                  </a>
                )}
                <button className="project-detail-button" type="button" onClick={() => setSelectedProject(project)}>
                  More details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" aria-label="Close details" onClick={() => setSelectedProject(null)}>
              x
            </button>
            <p className="project-type">{selectedProject.type}</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <div className="modal-copy">
              {selectedProject.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {selectedProject.architectureImage && (
              <figure className="modal-architecture">
                <img src={selectedProject.architectureImage} alt={selectedProject.architectureAlt} />
                <figcaption>MamaMind architecture overview</figcaption>
              </figure>
            )}
            <div className="tag-list" aria-label={`${selectedProject.title} technology stack`}>
              {selectedProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="button secondary" href={selectedProject.link}>
              {selectedProject.linkLabel}
            </a>
          </section>
        </div>
      )}

      <section className="section skills-section" id="skills">
        <div className="skills-intro">
          <p className="eyebrow">What I bring</p>
          <h2>Skills</h2>
        </div>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Previous work experience</p>
            <h2>Work Experience</h2>
          </div>
        </div>

        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Care Navigator</h3>
                <p className="experience-company">The White House Surgery</p>
              </div>
              <span className="experience-date">2023 - 2026</span>
            </div>
            <ul className="experience-points">
              <li>Supported patients by guiding them to the most appropriate services and care pathways.</li>
              <li>Handled sensitive information professionally while maintaining clear and compassionate communication.</li>
              <li>Worked in a fast-paced healthcare environment requiring organisation, attention to detail, and teamwork.</li>
            </ul>
          </article>

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>PMP Recruitment Floor Supervisor</h3>
                <p className="experience-company">Amazon DRM2</p>
              </div>
              <span className="experience-date">2022 - 2023</span>
            </div>
            <ul className="experience-points">
              <li>Supervised recruitment floor activity and supported the smooth coordination of onboarding processes.</li>
              <li>Assisted candidates and staff while helping maintain efficient daily operations in a high-volume setting.</li>
              <li>Built strong communication, problem-solving, and leadership skills through team support and workflow oversight.</li>
            </ul>
          </article>

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Process Leader</h3>
                <p className="experience-company">EVRI</p>
              </div>
              <span className="experience-date">2020 - 2022</span>
            </div>
            <ul className="experience-points">
              <li>Supported day-to-day operational processes and helped maintain workflow efficiency across the site.</li>
              <li>Monitored tasks, coordinated team activity, and contributed to meeting performance and productivity targets.</li>
              <li>Developed leadership, organisation, and problem-solving skills in a busy logistics environment.</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React and prepared for AWS Amplify Hosting.</p>
        <a href="#home">Back to top</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
