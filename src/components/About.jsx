import './About.css';
import Lottie from "lottie-react";
import coderAnimation from "../assets/Coding boy.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = ({ id = "about" }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id={id} className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-container about-two-col">
        <div className="about-text-block" data-aos="fade-up">
          <p className="about-text-para">
            I'm <strong>Kalpana Kushwaha</strong>, a Software Engineer who builds intelligent systems
            at the intersection of <strong>Machine Learning, Data Analytics, and Full-Stack Development</strong>.
            I don't just build things — I build things that <strong>think</strong>.
          </p>

          <p className="about-text-para">
            My work includes <strong>NeuroNotes</strong> — a full-stack AI notes platform with RAG-based chat,
            Llama 3 summarization, and semantic vector search — a <strong>Brain Tumor Detection system</strong>
            combining CNN, SVM, and MobileNetV2 into a stacked ensemble, a freelance-built
            <strong> coaching website</strong>, and an <strong>employee attrition prediction dashboard</strong> in R with live Shiny integration.
          </p>

          <p className="about-text-para">
            What ties it all together is a belief that <strong>great engineering is invisible</strong> —
            the best systems feel effortless to the people using them, no matter how complex they are underneath.
          </p>
        </div>
        {/* Animated coder illustration */}
        <div className="about-illustration" data-aos="fade-left" aria-hidden="true">
          <Lottie 
            animationData={coderAnimation} 
            loop={true} 
            style={{ maxWidth: 380, width: "100%" }} 
          />
        </div>
      </div>
      {/* Key Achievements Section below */}
      <div className="about-key-achievements" data-aos="zoom-in">
        <div className="key-ach-title">Key Achievements</div>
        <div className="key-ach-list">
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
