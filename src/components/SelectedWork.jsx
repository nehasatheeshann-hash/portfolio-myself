import React from 'react';
import { Link } from 'react-router-dom';
import './SelectedWork.css';
import SplitText from './SplitText';

export default function SelectedWork() {
  const projects = [
    {
      id: "technocraztz",
      number: "01",
      title: "Technocraztz",
      description: "Club website",
      tags: "Frontend · React · UI",
      externalLink: "https://technocratz-club1.vercel.app/#/"
    },
    {
      id: "loomtwin-ai",
      number: "02",
      title: "LoomTwin AI",
      description: "AI-powered web application",
      tags: "Vite · Firebase · Web",
      externalLink: "https://loom-twin-ai-final.web.app/"
    }
  ];

  return (
    <section id="work" className="work-section">
      <h3 className="section-title"><SplitText text="SELECTED WORK" /></h3>
      <div className="work-list">
        {projects.map((project) => {
          const content = (
            <>
              <div className="work-item-content">
                <span className="work-number">{project.number} —</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="work-tags">
                <code>{project.tags}</code>
              </div>
            </>
          );

          if (project.externalLink) {
            return (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer" key={project.id} className="work-item reveal">
                {content}
              </a>
            );
          }

          return (
            <Link to={`/project/${project.id}`} key={project.id} className="work-item reveal">
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
