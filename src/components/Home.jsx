import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import SpaceCanvas from './SpaceCanvas';
import PROFILE_IMG from '../assets/profile.jpg';
import RESUME_PDF from '../assets/Kalpana Kushwaha.pdf';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Contact from './Contact';
import './Home.css';

export default function Home() {
  const [typedName, setTypedName] = useState('');
  const [show, setShow] = useState(false);
  const [shine, setShine] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // new state for hamburger
  const name = 'Kalpana Kushwaha';
  const nameRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= name.length) {
        setTypedName(name.slice(0, i));
        i++;
        setTimeout(type, 80);
      } else {
        setShow(true);
        setTimeout(() => setShine(true), 400);
        setTimeout(() => setShine(false), 1200);
      }
    };
    type();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="home-navbar">
        {/* Hamburger button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navbar links */}
        <ul className={menuOpen ? 'open' : ''}>
          <li><HashLink smooth className="home-navbar-link" to="#home" onClick={() => setMenuOpen(false)}>HOME</HashLink></li>
          <li><HashLink smooth className="home-navbar-link" to="#about" onClick={() => setMenuOpen(false)}>ABOUT</HashLink></li>
          <li><HashLink smooth className="home-navbar-link" to="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</HashLink></li>
          <li><HashLink smooth className="home-navbar-link" to="#skills" onClick={() => setMenuOpen(false)}>SKILLS</HashLink></li>
          <li><HashLink smooth className="home-navbar-link" to="#certifications" onClick={() => setMenuOpen(false)}>CERTIFICATIONS</HashLink></li>
          <li><HashLink smooth className="home-navbar-link" to="#contact" onClick={() => setMenuOpen(false)}>CONTACT</HashLink></li>
        </ul>
      </nav>

      <SpaceCanvas className="space-canvas-bg" />

      {/* Home Intro Section */}
      <section id="home" className="home-section">
        <div className="home-wrapper">
          <img
            src={PROFILE_IMG}
            alt="Kalpana Kushwaha"
            className={`home-img ${show ? 'show' : 'hide'}`}
          />
          <div className="home-content">
            <div className="home-name-wrapper">
              <h2
                ref={nameRef}
                className={`home-name${typedName.length === name.length ? ' complete' : ''}`}
              >
                {typedName}
              </h2>
              {shine && <span className="shine-overlay" />}
            </div>

            <div className={`home-subtitle ${show ? 'visible' : ''}`}>
              Software Engineer | Machine Learning |<br/> Full-Stack Developer
            </div>

            <a
              href={RESUME_PDF}
              download="Kalpana Kushwaha Resume.pdf"
              className={`home-resume ${show ? 'visible' : ''}`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Certifications id="certifications" />
      <Contact id="contact" />
    </>
  );
}
