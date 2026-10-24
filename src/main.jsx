import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const hardSkills = [
  "Python programming (pandas, NumPy)",
  "Database design, ERDs and normalisation",
  "SQL and MySQL (joins, views, KPIs)",
  "SQLAlchemy database integration",
  "Synthetic dataset development",
  "Data preparation and validation",
  "Exploratory data analysis",
  "Ridge regression (scikit-learn)",
  "Rolling time-series forecasting",
  "Model evaluation (MAE, RMSE, WAPE, R²)",
  "Capacity planning and cost estimation",
  "Interactive dashboards (Streamlit)",
  "Data visualisation (Plotly, Seaborn, Matplotlib)",
  "Automated testing and debugging",
  "Version control (Git, GitHub)",
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

const softSkills = [
  "Communication",
  "Teamwork",
  "Adaptability",
  "Problem solving",
  "Organisation",
  "Time management",
  "Leadership",
  "Attention to detail",
];

const aboutPhotos = [
  { src: "/images/image-5.jpeg", alt: "Barbara Caldeira smiling" },
  { src: "/images/about-2.jpeg", alt: "Barbara Caldeira smiling wearing a headset" },
  { src: "/images/about-3.jpeg", alt: "Barbara Caldeira outdoors in London" },
  { src: "/images/about-4.jpeg", alt: "Barbara Caldeira smiling at work" },
  { src: "/images/about-5.jpeg", alt: "Barbara Caldeira seated in a cafe" },
  { src: "/images/about-6.jpeg", alt: "Barbara Caldeira outdoors with family" },
];

const projects = [
  {
    title: "PracticeHUB",
    type: "GP Practice Management Intelligence",
    showDetailsInline: true,
    link: "https://github.com/barbaraafcaldeira/PracticeHUB",
    linkLabel: "View GitHub repository",
    demoLink: "/videos/practicehub-demo.mp4",
    demoLabel: "Demo",
    description:
      "An interactive dashboard that helps GP Practice Managers turn appointment activity into demand forecasts, clinical capacity estimates, and staffing cost scenarios.",
    stack: [
      "Python",
      "MySQL",
      "SQLAlchemy",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Streamlit",
      "Plotly",
      "Seaborn",
      "Matplotlib",
    ],
    impact: "Connected database design, demand forecasting, and capacity planning to help explore practical staffing decisions.",
    status: "Built with synthetic data for a fictional practice. GitHub repository currently private; dashboard demonstrated through a recorded walkthrough.",
    details: [
      "How can a GP practice plan ahead when appointment demand keeps changing? PracticeHUB helps Practice Managers explore historical activity, forecast next month's same-day and routine requests, and estimate the additional clinical sessions and staffing costs needed to respond. The project uses three years of synthetic activity for Blueberry Medical Centre, a fictional practice with 10,000 patients and five GPs.",
      "I designed the relational database and appointment workflow, developed and analysed the synthetic dataset with AI assistance, and evaluated forecasting approaches. Python, MySQL, and SQLAlchemy supported the data workflow, with pandas and NumPy for analysis and scikit-learn for forecasting evaluation. I used VS Code and MySQL Workbench for development and database administration, with Git and GitHub for version control.",
      "I built the interactive dashboard in Streamlit with historical analysis, monthly data entry, demand forecasts, and a capacity-planning calculator. Plotly, Seaborn, and Matplotlib supported visual exploration and presentation of the data, bringing the analysis together in a tool focused on everyday practice planning.",
    ],
  },
  {
    title: "MamaMind",
    type: "Full-stack AWS wellbeing app",
    description:
      "A secure postpartum journaling platform that combines React, Cognito, API Gateway, Lambda, DynamoDB, Comprehend, Bedrock, and Lex to offer risk-aware support.",
    stack: [
      "React",
      "Amazon Cognito",
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon Comprehend",
      "Amazon Bedrock",
      "Amazon Lex",
      "Amazon S3",
      "Amazon CloudFront",
    ],
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
      "An evaluation workflow created to compare different approaches for detecting mental health distress patterns in journal-style text and to understand how each method performed.",
    stack: ["AWS Lambda", "Amazon Bedrock", "Amazon Comprehend", "CSV test sets", "Rule-based logic", "Hybrid scoring"],
    impact: "Built a repeatable evaluation process to test how different methods identify distress indicators and to support clearer model comparison.",
    link: "/docs/mamamind-evaluation-findings.pdf",
    linkLabel: "View main findings",
    details: [
      "This work was developed as part of the MamaMind project to compare different approaches and evaluate how well they performed in identifying mental health distress patterns within journal-style text.",
      "I collected and structured evaluation data in CSV test sets so that different distress scenarios, wording styles, and emotional expressions could be tested in a more consistent and measurable way.",
      "To carry out the evaluation, I used Lambda-based scripts together with rule-based logic, Amazon Comprehend sentiment analysis, Amazon Bedrock-assisted classification, and hybrid scoring methods, making it easier to inspect results, compare behaviour, and understand which approach was most reliable for the user-facing MamaMind system.",
    ],
  },
  {
    title: "Professional Portfolio Website",
    type: "Deployment-ready frontend",
    description:
      "A portfolio website built to present my projects through a responsive frontend, structured content, and cloud-based deployment.",
    stack: ["React", "Vite", "GitHub", "AWS Amplify", "CloudFront"],
    impact: "Built as a practical frontend project using modern web tools and deployment services to create a clear and accessible presentation of my work.",
    link: "#",
    linkLabel: "Full architecture",
    architectureImage: "/images/portfolio-architecture.jpeg",
    architectureAlt: "Professional portfolio website architecture showing React, GitHub, AWS Amplify, CloudFront, and users",
    details: [
      "This project was developed as a standalone React application using Vite to create a fast, responsive, and maintainable frontend structure.",
      "I used component-based design, custom CSS styling, project carousels, modal views, and interactive sections to organise the content and improve how each project is presented.",
      "The portfolio is connected to GitHub and prepared for deployment through AWS Amplify and CloudFront, making it a practical example of both frontend development and cloud-based publishing.",
    ],
  },
  {
    title: "Smart Baby Room Monitor",
    type: "IoT monitoring project",
    description:
      "A smart baby room monitoring concept designed to track nursery conditions through simulated sensors, support a clearer user dashboard, and explore how IoT systems can improve everyday safety and awareness.",
    stack: ["Wokwi", "IoT", "Embedded systems", "Sensors", "Simulation", "GitHub"],
    impact: "Explored how simulated hardware can be used to design safer, more responsive monitoring systems for baby room conditions.",
    link: "https://github.com/barbaraafcaldeira/smart-baby-room-monitor",
    linkLabel: "View GitHub repository",
    extraLinks: [
      {
        href: "/docs/smart-baby-room-monitor-implementation.pdf",
        label: "See implementation",
      },
      {
        href: "https://production.dvvxbfugcqfz7.amplifyapp.com",
        label: "View user dashboard",
      },
      {
        href: "https://wokwi.com/projects/465187778917243905",
        label: "See simulator in Wokwi",
      },
    ],
    details: [
      "This project explores the idea of a smart baby room monitor, designed to help track environmental conditions in a baby's room and support a safer and more responsive space.",
      "I used the Wokwi simulator to model the hardware and test the project in a virtual environment, which made it possible to explore IoT concepts without requiring the physical components at every stage.",
      "The project focuses on combining monitoring, simulation, and practical problem solving, while building my confidence with embedded systems, sensor-based logic, and connected technology design.",
    ],
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedArchitectureProject, setSelectedArchitectureProject] = React.useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = React.useState(0);
  const activeProject = projects[activeProjectIndex];
  const activePhoto = aboutPhotos[activePhotoIndex];

  const showPreviousProject = () => {
    setActiveProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const showNextProject = () => {
    setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  const showPreviousPhoto = () => {
    setActivePhotoIndex((current) => (current === 0 ? aboutPhotos.length - 1 : current - 1));
  };

  const showNextPhoto = () => {
    setActivePhotoIndex((current) => (current === aboutPhotos.length - 1 ? 0 : current + 1));
  };

  return (
    <main className="portfolio">
      <nav className="topbar" aria-label="Portfolio navigation">
        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Professional Portfolio</p>
          <h1>Barbara A F Caldeira</h1>
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
          This portfolio website was created as a dedicated space to present my current work, academic projects, and
          technical development in a clear and professional way. It gives recruiters, lecturers, and collaborators a
          simple way to explore my projects, follow my progress, and engage with the work I am building.
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
        <div className="about-gallery">
          <button className="carousel-arrow about-arrow" type="button" aria-label="Previous photo" onClick={showPreviousPhoto}>
            &#8249;
          </button>
          <figure className="about-image">
            <img src={activePhoto.src} alt={activePhoto.alt} />
          </figure>
          <button className="carousel-arrow about-arrow" type="button" aria-label="Next photo" onClick={showNextPhoto}>
            &#8250;
          </button>
          <div className="photo-indicators" aria-label="Photo selection">
            {aboutPhotos.map((photo, index) => (
              <button
                key={photo.src}
                className={index === activePhotoIndex ? "project-dot active" : "project-dot"}
                type="button"
                aria-label={`Show photo ${index + 1}`}
                onClick={() => setActivePhotoIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-showcase">
          <button className="carousel-arrow" type="button" aria-label="Previous project" onClick={showPreviousProject}>
            &#8249;
          </button>

          <article className="project-feature-card">
            <p className="project-type">{activeProject.type}</p>
            <h3>{activeProject.title}</h3>
            {activeProject.showDetailsInline || activeProject.title === "MamaMind" ||
            activeProject.title === "Risk Evaluation Pipeline" ||
            activeProject.title === "Professional Portfolio Website" ? (
              <div className="project-detail-copy">
                {activeProject.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="project-feature-description">{activeProject.description}</p>
            )}
            <div className="tag-list" aria-label={`${activeProject.title} technology stack`}>
              {activeProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <strong>{activeProject.impact}</strong>
            {activeProject.status && <p className="project-status">{activeProject.status}</p>}
            <div className="project-actions">
              {activeProject.architectureImage && activeProject.title === "Professional Portfolio Website" ? (
                <button
                  className="project-detail-button"
                  type="button"
                  onClick={() => setSelectedArchitectureProject(activeProject)}
                >
                  {activeProject.linkLabel}
                </button>
              ) : activeProject.link ? (
                <a className="project-link" href={activeProject.link} target="_blank" rel="noreferrer">
                  {activeProject.linkLabel}
                </a>
              ) : null}
              {activeProject.demoLink && (
                <a className="project-link" href={activeProject.demoLink} target="_blank" rel="noreferrer">
                  {activeProject.demoLabel}
                </a>
              )}
              {activeProject.demoLabel && !activeProject.demoLink && (
                <button className="project-link" type="button" disabled title="Demo video link coming soon">
                  {activeProject.demoLabel}
                </button>
              )}
              {activeProject.extraLinks?.map((item) => (
                <a key={item.href} className="project-link" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
              {activeProject.architectureImage && (
                activeProject.title !== "Professional Portfolio Website" && (
                <button
                  className="project-detail-button"
                  type="button"
                  onClick={() => setSelectedArchitectureProject(activeProject)}
                >
                  Full architecture
                </button>
                )
              )}
              {!activeProject.architectureImage && !activeProject.showDetailsInline && (
                activeProject.title !== "Risk Evaluation Pipeline" &&
                activeProject.title !== "Professional Portfolio Website" && (
                  <button className="project-detail-button" type="button" onClick={() => setSelectedProject(activeProject)}>
                    More details
                  </button>
                )
              )}
            </div>
          </article>

          <button className="carousel-arrow" type="button" aria-label="Next project" onClick={showNextProject}>
            &#8250;
          </button>
        </div>

        <div className="project-indicators" aria-label="Project selection">
          {projects.map((project, index) => (
            <button
              key={project.title}
              className={index === activeProjectIndex ? "project-dot active" : "project-dot"}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => setActiveProjectIndex(index)}
            />
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
            <a className="button secondary" href={selectedProject.link} target="_blank" rel="noreferrer">
              {selectedProject.linkLabel}
            </a>
          </section>
        </div>
      )}

      {selectedArchitectureProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedArchitectureProject(null)}>
          <section
            className="project-modal architecture-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="architecture-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close architecture"
              onClick={() => setSelectedArchitectureProject(null)}
            >
              x
            </button>
            <p className="project-type">System architecture</p>
            <h2 id="architecture-modal-title">{selectedArchitectureProject.title}</h2>
            <figure className="modal-architecture large">
              <img
                src={selectedArchitectureProject.architectureImage}
                alt={selectedArchitectureProject.architectureAlt}
              />
              <figcaption>{selectedArchitectureProject.title} full architecture</figcaption>
            </figure>
          </section>
        </div>
      )}

      <section className="section skills-section" id="skills">
        <div className="skills-intro">
          <p className="eyebrow">What I bring</p>
          <h2>Skills</h2>
        </div>
        <div className="skills-columns">
          <div className="skills-group">
            <h3>Hard Skills</h3>
            <ul className="skill-list">
              {hardSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-group">
            <h3>Soft Skills</h3>
            <ul className="skill-list soft-skill-list">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
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
                <h3>Assistant Practice Manager</h3>
                <p className="experience-company">Church Elm Lane Medical Practice</p>
              </div>
              <span className="experience-date">September 2026 - Present</span>
            </div>
          </article>

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
        <a href="#home">Barbara A F Caldeira</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
