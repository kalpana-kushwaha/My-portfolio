import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const skills = {
  Languages: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  Frameworks: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Pandas", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg" },
    { name: "NumPy", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/numpy.svg" },
    { name: "FastAPI", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  ],
  Tools: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "RStudio", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg" },
  ],
  Domains: [
    { name: "Machine Learning", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/scikitlearn.svg" },
    { name: "Data Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Web Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],
};

const Skills = ({ id = "skills" }) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true, 
    });
  }, []);

  const flipAnimations = ["flip-left", "flip-right", "flip-up", "flip-down"];

  return (
    <section id={id} className="skills-section">
      <h2 className="skills-title" data-aos="fade-down">
        Technical Skills
      </h2>

      {Object.entries(skills).map(([category, items], i) => (
        <div
          key={i}
          className="skills-category"
          data-aos="fade-up"
          data-aos-delay={i * 200}
        >
          <h3 className="skills-heading">{category}</h3>
          <div className="skills-grid">
            {items.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                data-aos={flipAnimations[index % flipAnimations.length]}
                data-aos-delay={index * 120}
                data-aos-duration="850"
              >
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo"
                  />
                ) : (
                  <div className="placeholder">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" className="pulse" />
                    </svg>
                  </div>
                )}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
