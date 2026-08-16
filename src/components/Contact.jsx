import React from 'react';
import { SiGithub, SiGmail, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content reveal">
        <h1>LET'S BUILD SOMETHING.</h1>
        
        <div className="contact-links reveal" style={{ transitionDelay: '0.2s' }}>
          <p>Have an idea?</p>
          <p>Want to collaborate?</p>
          <p>Found something interesting?</p>
          
          <div className="get-in-touch">
            GET IN TOUCH
          </div>

          <div className="social-links-container">
            <a href="https://www.linkedin.com/in/neha-satheeshann/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nehasatheeshann-hash" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <SiGithub />
            </a>
            <a href="mailto:nehasatheeshann@gmail.com" className="social-icon" aria-label="Email">
              <SiGmail />
            </a>
            <a href="https://leetcode.com/u/neha_s108/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
