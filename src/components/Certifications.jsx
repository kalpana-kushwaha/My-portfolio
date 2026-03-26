import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Certifications.css";

const data = [
  {
    title: "Inside Agentic AI: Foundations and Frontiers",
    issuer: "Skillsoft",
    year: 2025,
    url: "https://skillsoft.digitalbadges.skillsoft.com/36b56979-9cba-49a4-8e54-250042fea7a3",
    logo: "https://cdn.worldvectorlogo.com/logos/skillsoft.svg"
  },
    {
    title: "Inside Agentic AI: Core Architecture of Agentic Systems",
    issuer: "Skillsoft",
    year: 2025,
    url: "https://skillsoft.digitalbadges.skillsoft.com/b732e970-1895-4341-aaf8-ebdb8ce3dc22#acc.Iac4sVrj",
    logo: "https://cdn.worldvectorlogo.com/logos/skillsoft.svg"
  },
  {
    title: "Inside Agentic AI: Popular Frameworks",
    issuer: "Skillsoft",
    year: 2025,
    url: "https://skillsoft.digitalbadges.skillsoft.com/33612017-01ef-4342-a442-2bb2293ca406#acc.9ME3RifU",
    logo: "https://cdn.worldvectorlogo.com/logos/skillsoft.svg"
  },
  { 
    title: "Career Essentials in Generative AI", 
    issuer: "Microsoft & LinkedIn", 
    year: 2025,
    url: "https://www.linkedin.com/learning/certificates/cfe9ec35e507616e49e403c644f9841fde3ffa9c72ee496d0e4e1b978bf1a2d7",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },
    {
    title: "AI Coding Agents with GitHub Copilot and Cursor",
    issuer: "LinkedIn",
    year: 2025,
    url: "https://www.linkedin.com/learning/certificates/3480062668b077252fb5a114e77fc0aecaaaa89fd91e2f80cd1c33b7795a0b55",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },
    {
    title: "Generative AI: Working with Large Language Models",
    issuer: "LinkedIn",
    year: 2025,
    url: "https://www.linkedin.com/learning/certificates/321d287840501999517e22a09846810bf52b4aedd16a27f865272d124832b027",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "LinkedIn",
    year: 2025,
    url: "https://www.linkedin.com/learning/certificates/db2f8a5213b73c4a59252c57a68ce13905f5e99027e28f91aea5c4ce07e21f80",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },
  { 
    title: "Career Essentials in Data Analysis", 
    issuer: "Microsoft & LinkedIn", 
    year: 2024,
    url: "https://www.linkedin.com/learning/certificates/5aafd4755157c54e4316673ac06da848eeee57be2a59dcf9987d18f87b68a37b",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },
  { 
    title: "AWS Academy Cloud Foundations", 
    issuer: "AWS Academy", 
    year: 2024,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/overlay/Certifications/476433270/treasury/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  { 
    title: "Artificial Intelligence: Search Methods for Problem Solving", 
    issuer: "NPTEL", 
    year: 2024,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/overlay/Certifications/2099486997/treasury/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://cdn.brandfetch.io/id_7zyHL2W/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  { 
    title: "Google Cloud Computing Foundations", 
    issuer: "NPTEL", 
    year: 2023,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/details/certifications/1718463613306/single-media-viewer/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
  },
  { 
    title: "Data Analytics with Python", 
    issuer: "NPTEL", 
    year: 2023,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/details/certifications/1718463558779/single-media-viewer/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://cdn.brandfetch.io/id_7zyHL2W/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
    {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco",
    year: 2023,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/details/certifications/1718463468131/single-media-viewer/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg"
  },
   {
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    year: 2023,
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/details/certifications/1718464101620/single-media-viewer/?profileId=ACoAADl0kEgBN5Weg4t2Vr5bWllEjwlsbyVgF94",
    logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg"
  },
];

const flips = ["flip-left", "flip-right", "flip-up", "flip-down"];

const Certifications = ({ id = "certifications" }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id={id} className="certs-section">
      <h2 className="certs-title" data-aos="fade-down">Certifications</h2>

      <div className="cert-grid">
        {data.map((c, i) => (
          <article
            key={c.title}
            className="cert-card"
            data-aos={flips[i % flips.length]}
            data-aos-delay={i * 100}
            data-aos-easing="ease-out-back"
          >
            <span className="cert-year">{c.year}</span>
            {c.logo && <img src={c.logo} alt={c.issuer} className="cert-logo" />}
            <h3 className="cert-name">{c.title}</h3>
            <p className="cert-issuer">{c.issuer}</p>
            {c.url && (
              <a 
                className="cert-btn" 
                href={c.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                🎓 View Credential
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
