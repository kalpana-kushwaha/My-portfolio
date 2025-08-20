import './About.css';
import Lottie from "lottie-react";
import coderAnimation from "../assets/Coding boy.json"; 

const About = ({ id = "about" }) => {
  return (
    <section id={id} className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-container about-two-col">
        <div className="about-text-block">
            <p className="about-text">
              I’m <strong>Kalpana Kushwaha</strong>, a Software Engineer specializing in 
              <strong>Machine Learning, Data Analytics, and Full-Stack Development</strong>. 
              I develop intelligent systems and scalable applications that turn complex data into practical, real-world solutions. 
              <br/>
              My projects range from <em>AI-powered Brain Tumor Detection</em> and 
              <em>NeuroNotes — a smart NLP-based notes app</em> to advanced predictive dashboards built in R. 
              I have co-authored a <strong>Scopus-indexed research paper</strong> and filed a 
              <strong>patent</strong> in AI-driven healthcare innovation.
              <br/>
              Beyond coding, I am passionate about exploring emerging technologies and design methodologies to seamlessly connect 
              <strong> data, AI, and user experience</strong>, striving to create impactful and meaningful innovations.
            </p>

        </div>
        {/* Animated coder illustration */}
        <div className="about-illustration" aria-hidden="true">
          <Lottie 
            animationData={coderAnimation} 
            loop={true} 
            style={{ maxWidth: 380, width: "100%" }} 
          />
        </div>
      </div>
      {/* Key Achievements Section below */}
      <div className="about-key-achievements">
        <div className="key-ach-title">Key Achievements</div>
        <div className="key-ach-list">
          <div className="key-ach-item">
            <span className="key-ach-icon" aria-label="Scopus-indexed Research Paper">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#1e90ff" strokeWidth="2" fill="#fff"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#1e90ff" fontWeight="bold">S</text></svg>
            </span>
            <span className="key-ach-label">
                <strong>Scopus-indexed Research Paper:</strong> Co-authored a research paper on early brain tumor detection using AI, in the Scopus-indexed journal Taylor & Francis (October 2024).
             </span>

          </div>
          <div className="key-ach-item">
            <span className="key-ach-icon" aria-label="Patent Published">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect x="3" y="3" width="26" height="26" rx="6" stroke="#1e90ff" strokeWidth="2" fill="#fff"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#1e90ff" fontWeight="bold">P</text></svg>
            </span>
           <span className="key-ach-label">
            <strong>Patent Published:</strong> Filed a patent titled “Tumor Trace System for Tracking Tumors with AI” (Application No. 202511031522 A, April 2025), showcasing innovation in AI-driven healthcare solutions.
           </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
