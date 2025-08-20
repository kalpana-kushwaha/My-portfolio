import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projectsData = [
  {
    title: "NeuroNotes",
    subtitle: "Smart Notes App with NLP",
    description:
      "Full-stack notes app with AI-powered summarization (DistilBART), auto keyword tagging (KeyBERT), semantic search, Markdown rendering, PDF export, and a FastAPI backend.",
    github: "https://github.com/kalpana-kushwaha/neuronotes",
  },
  {
    title: "Brain Tumor Detection",
    subtitle: "Medical AI Research Project",
    description:
      "Applied advanced denoising (TV, BM3D, NLM) on MRI scans, built CNN, SVM, and MobileNetV2 models, and developed a stacked ensemble model that outperformed individual classifiers. Published a Scopus-indexed research paper and filed a patent.",
    github:
      "https://github.com/kalpana-kushwaha/Brain_tumor_detection_using_pre-processing_techniques",
  },
  {
    title: "Employee Attrition Prediction Dashboard",
    subtitle: "Data Science Dashboard",
    description:
      "Predictive HR dashboard built in R Shiny with logistic regression, ROC/AUC evaluation, and interactive plotting. Deployed as a real-time tool for attrition risk estimation with full data pipeline integration.",
    github: "https://github.com/kalpana-kushwaha/Employee-Attrition-Prediction",
  },
  {
    title: "Life Coach Website (Freelance)",
    subtitle: "Frontend Development Project",
    description:
      "Developed a responsive coaching website for a real client using React + Vite. Built modular UI components, testimonial carousel, EmailJS contact form, and downloadable PDFs. Designed with mobile-first, SEO-friendly, and elegant pastel styling.",
    github: "https://github.com/kalpana-kushwaha/life-coach", 
  },
];

const Projects = ({ id = "projects" }) => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <section id={id} className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && (
              <h4 className="project-subtitle">{project.subtitle}</h4>
            )}
            <p className="project-description">{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
