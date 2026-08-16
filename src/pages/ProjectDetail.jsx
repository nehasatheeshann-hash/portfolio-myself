import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();

  // Mock data for the selected project
  const projectData = {
    "technocraztz": {
      title: "Technocraztz",
      role: "Frontend Developer",
      year: "2024",
      description: "A comprehensive club website designed with modern aesthetics and built with React to handle event registrations and showcase activities.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000"
    },
    "online-complaint-portal": {
      title: "Complaint Portal",
      role: "Fullstack Developer",
      year: "2023",
      description: "A centralized grievance platform for college students, enabling transparent tracking and resolution of campus issues.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
    },
    "tech-escape": {
      title: "Tech Escape",
      role: "UI/UX & Web",
      year: "2024",
      description: "An immersive landing page and event management system for an annual technical symposium.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
    }
  };

  const project = projectData[id] || projectData["technocraztz"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="project-detail-page">
      <nav className="minimal-nav">
        <div className="nav-brand">
          <Link to="/">← BACK</Link>
        </div>
      </nav>
      
      <section className="project-hero">
        <h1 className="reveal">{project.title}</h1>
        <div className="project-meta reveal" style={{ transitionDelay: '0.2s' }}>
          <div>
            <span>ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>YEAR</span>
            <p>{project.year}</p>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="project-image reveal">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-description reveal">
          <h2>About the project</h2>
          <p>{project.description}</p>
        </div>
      </section>
    </div>
  );
}
