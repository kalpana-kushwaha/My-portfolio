import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Certifications.css";

const data = [
  { 
    title: "Career Essentials in Generative AI", 
    issuer: "Microsoft & LinkedIn", 
    year: 2025,
    url: "https://www.linkedin.com/learning/certificates/cfe9ec35e507616e49e403c644f9841fde3ffa9c72ee496d0e4e1b978bf1a2d7",
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
    url: "https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/details/certifications/1718463352807/single-media-viewer",
    logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  { 
    title: "Artificial Intelligence: Search Methods for Problem Solving", 
    issuer: "NPTEL", 
    year: 2024,
    url: "https://www.linkedin.com/authwall?trkInfo=AQE9Z6UgSe-CMwAAAZiF-K4guEglanm9AJKbtkHI7TUKOayrSBNrIDSyox4i3MxLaA-cVFO3EOg-gIzxmb6XegH9pS2VcTTSnWVV-ntRJQ6XfgnmXZowAVeXZG6FNsd8Az5G_Rk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkalpana-kushwaha-a889a322a%2Fdetails%2Fcertifications%2F1745856210304%2Fsingle-media-viewer",
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
  }
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
