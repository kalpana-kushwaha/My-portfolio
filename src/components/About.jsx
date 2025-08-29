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
  I’m <strong> Kalpana Kushwaha</strong>, a Software Engineer with a passion for turning complex problems into 
  <strong> intelligent, user-friendly solutions</strong>. My expertise lies in <strong>Machine Learning, Data Analytics, and Full-Stack Development</strong>, 
  where I love building applications that combine <strong>data, AI, and seamless user experience</strong>.
  <br/><br/>
  My work spans from developing <strong>AI-powered Brain Tumor Detection systems</strong> (patent filed in AI-driven healthcare innovation) 
  to creating <strong>NeuroNotes — a smart NLP-based note-taking app</strong>, as well as designing 
  <strong> predictive dashboards in R</strong> that bring data insights to life.
  <br/><br/>
  Beyond code, I’m deeply curious about <strong>emerging technologies and design methodologies</strong>, always exploring how to push boundaries 
  and craft innovations that are not just functional, but impactful and meaningful in the real world.
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
