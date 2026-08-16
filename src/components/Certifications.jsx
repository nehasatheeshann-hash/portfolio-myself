import React from 'react';
import './Certifications.css';
import SplitText from './SplitText';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: "NPTEL Certification",
      issuer: "IIT / NPTEL",
      date: "2024",
      description: "Successfully completed the NPTEL certification course.",
      link: "/nptel.jpg",
    },
    {
      id: 2,
      title: "Innovit Hackathon",
      issuer: "Innovit",
      date: "2024",
      description: "Certificate of achievement for the Innovit Hackathon.",
      link: "/innovit.jpg",
    },
    {
      id: 3,
      title: "Top 100 - HH26 Hackathon",
      issuer: "HH26",
      date: "2024",
      description: "Secured a position in the Top 100 teams nationwide.",
      link: "/Certificate_Top_100_HH26.pdf",
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="cert-header reveal">
        <h2 className="cert-title"><SplitText text="Certifications & Awards" /></h2>
        <p className="cert-subtitle">Milestones of continuous learning and achievement</p>
      </div>
      
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <a 
            href={cert.link}
            target={cert.link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer" 
            className="cert-card reveal" 
            style={{ transitionDelay: `${index * 0.2}s` }}
            key={cert.id}
          >
            <div className="cert-icon-wrapper">
              <Award className="cert-icon" />
            </div>
            <div className="cert-content">
              <h3 className="cert-name">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <p className="cert-desc">{cert.description}</p>
            </div>
            <div className="cert-link-icon">
              <ExternalLink size={20} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
