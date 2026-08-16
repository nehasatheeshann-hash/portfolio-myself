import React from 'react';
import SplitText from './SplitText';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Technical Team Member & Event Coordinator",
    organization: "Technocraztz — Technical Club",
    period: "2026 — Present",
    description: "Collaborate with faculty members and the Head of Department to plan and execute technical initiatives. Coordinate with student teams to organize and conduct technical events. Design and develop the club's website and digital experiences. Contribute creative and technical ideas for club activities and events. Handle responsibilities across both technical development and event coordination.",
    tags: ["Event Coordination", "Web Development", "Leadership", "Teamwork"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="section-title"><SplitText text="EXPERIENCE & LEADERSHIP" /></h2>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
            <div className="timeline-node">
              <div className="node-core"></div>
              <div className="node-pulse"></div>
            </div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-org">{exp.organization}</span>
              </div>
              <h4 className="exp-role">{exp.role}</h4>
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
