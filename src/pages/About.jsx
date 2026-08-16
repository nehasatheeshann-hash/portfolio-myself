import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import SplitText from '../components/SplitText';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  SiReact, SiHtml5, SiCss,
  SiNodedotjs, SiPhp,
  SiMysql, SiFirebase,
  SiGit, SiGithub, SiVite,
  SiC, SiCplusplus, SiJavascript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './About.css';

export default function About() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Navigation />

      <main className="about-page">

        <div className="about-container">

          <div className="about-header reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s' }}>

            <h1 className="about-title">
              <SplitText text="About Me" delayOffset={0.2} />
            </h1>
            <h2 className="about-subtitle cursive-text">
              <SplitText text="The Journey So Far" delayOffset={0.5} />
            </h2>
          </div>


          <section className="bio-section reveal" style={{ transitionDelay: '0.4s', transitionDuration: '1.5s' }}>
            <div className="bio-image-container">
              <img src="/myself.png" alt="Neha" className="bio-image-massive" />
            </div>

            <div className="bio-content">
              <p className="greeting-text">Hello there!</p>
              <p className="main-headline">
                I'm Neha, a second-year engineering student exploring <span className="highlight-cyan">software development</span> by <span className="highlight-cyan">building projects</span> (and learning along the way).
              </p>
              <div className="bio-body">
                <p>
                  I enjoy turning ideas into something real and usable. I've worked on projects like my <strong>Online Complaint Portal</strong> and <strong>LoomTwin AI</strong>, which I developed with my team for the <strong>National Handloom Hackathon 2026</strong>.
                </p>
                <p>
                  I've also built websites for technical communities and taken part in hackathons, coding contests, and project expos, which have helped me understand what it's like to actually build and present something.


                  Apart from coding, I've had the chance to work with different teams, collaborate with faculty and HODs, and be involved in technical club activities.


                  I'm still learning and figuring out which areas of software development I enjoy most, but right now I'm focused on improving my development skills, building better projects, and turning the ideas I have into things I can actually build.
                </p>
              </div>
            </div>
          </section>

          <section className="education-section reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s' }}>
            <h2 className="education-title">Education</h2>
            <div className="education-card">
              <div className="education-header">
                <h3>B.Tech Information technology</h3>
                <span className="education-duration">2025 - 2029</span>
              </div>
              <p className="education-college">Sri Krishna College of Engineering and Technology - Coimbatore</p>
              <p className="education-desc"><strong>CGPA:</strong> 8.8</p>
            </div>
          </section>

          <section className="skills-section reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s' }}>
            <h2 className="skills-title">Technical Skills</h2>

            <div className="skills-grid">

              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-chip-container">
                  <div className="skill-chip"><SiC className="skill-icon" style={{ color: '#A8B9CC' }} /> C</div>
                  <div className="skill-chip"><SiCplusplus className="skill-icon" style={{ color: '#00599C' }} /> C++</div>
                  <div className="skill-chip"><FaJava className="skill-icon" style={{ color: '#5382A1' }} /> Java</div>
                  <div className="skill-chip"><SiJavascript className="skill-icon" style={{ color: '#F7DF1E' }} /> JavaScript</div>
                  <div className="skill-chip"><SiPhp className="skill-icon" style={{ color: '#777BB4' }} /> PHP</div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-chip-container">
                  <div className="skill-chip"><SiHtml5 className="skill-icon" style={{ color: '#E34F26' }} /> HTML5</div>
                  <div className="skill-chip"><SiCss className="skill-icon" style={{ color: '#1572B6' }} /> CSS3</div>
                  <div className="skill-chip"><SiReact className="skill-icon" style={{ color: '#61DAFB' }} /> React.js</div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend & Tools</h3>
                <div className="skill-chip-container">
                  <div className="skill-chip"><SiNodedotjs className="skill-icon" style={{ color: '#339933' }} /> Node.js</div>
                  <div className="skill-chip"><SiMysql className="skill-icon" style={{ color: '#4479A1' }} /> SQL</div>
                  <div className="skill-chip"><SiFirebase className="skill-icon" style={{ color: '#FFCA28' }} /> Firebase</div>
                  <div className="skill-chip"><SiGit className="skill-icon" style={{ color: '#F05032' }} /> Git</div>
                  <div className="skill-chip"><SiGithub className="skill-icon" style={{ color: '#FFFFFF' }} /> GitHub</div>
                  <div className="skill-chip"><SiVite className="skill-icon" style={{ color: '#646CFF' }} /> Vite</div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
