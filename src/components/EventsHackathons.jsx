import React, { useState } from 'react';
import SplitText from './SplitText';
import './EventsHackathons.css';

const events = [
  {
    id: 1,
    title: 'National Handloom Hackathon - IIT Delhi, NHDC',
    date: '2026',
    role: 'Finalist',
    description: 'Built LoomTwin AI, a platform that helps handloom clusters manage operations through real-time cluster insights, inventory and order management, predictive alerts, AI assistance, and multilingual support.',
    tags: ['Vite', 'Firebase', 'Real-world problem solving'],
    hasProject: true,
    projectLink: '/Certificate_Top 100_HH26.pdf',
    buttonText: 'View Certificate',
    image: '/handloom.jpg'
  },
  {
    id: 3,
    title: 'NeoCodeTheon - College Level',
    date: '2026',
    role: 'Level 3 Finalist',
    description: 'Advanced to Level 3 of a college-level coding contest, where programming and problem-solving skills were tested through coding challenges.',
    tags: ['Problem Solving', 'Coding', 'Algorithms'],
    hasProject: false
  },
  {
    id: 4,
    title: 'InnovIT 2K25 — Project Expo',
    date: '2025',
    role: 'Participant',
    description: 'Developed a complete Online Complaint Portal using HTML, CSS, JavaScript, PHP, and MySQL, enabling students to submit and track grievances digitally. Implemented separate student and teacher portals with secure authentication and complaint status management, creating a streamlined platform for communication between students and administration.',
    tags: ['HTML', 'CSS', 'JS', 'PHP'],
    hasProject: true,
    projectLink: '/innovit.jpg',
    buttonText: 'View Certificate'
  }
];

export default function EventsHackathons() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="events-section" id="events">
      <div className="section-header">
        <h2 className="section-title"><SplitText text="Events & Hackathons" /></h2>
      </div>

      <div className="carousel-container reveal">
        <div className="carousel-track">
          {events.map((event, index) => {
            // Calculate relative position for continuous 3D loop feel
            let diff = index - activeIndex;
            const total = events.length;

            // Adjust for shortest path loop
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const absDiff = Math.abs(diff);
            const zIndex = total - absDiff;

            // The math for the perspective effect
            const translateX = diff * 60; // Spread them horizontally
            const translateZ = absDiff * -250; // Push inactive ones back
            const rotateY = diff * -20; // Angle them towards the center
            const scale = 1 - (absDiff * 0.05); // Slightly shrink inactive ones
            const opacity = absDiff > 1 ? 0 : 1 - (absDiff * 0.5); // Hide cards further than 1 away
            const isClickable = absDiff === 1;

            return (
              <div
                key={event.id}
                className={`carousel-card ${diff === 0 ? 'active' : ''}`}
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: opacity === 0 ? 'none' : 'auto'
                }}
                onClick={() => {
                  if (diff === 1) handleNext();
                  if (diff === -1) handlePrev();
                }}
              >
                <div className="card-glass-panel">
                  {event.image && (
                    <div className="event-image-container">
                      <img src={event.image} alt={event.title} className="event-image" />
                      <div className="event-image-overlay"></div>
                    </div>
                  )}
                  <div className="card-content-wrapper">
                    <div className="event-meta">
                      <span className="event-date">{event.date}</span>
                      <span className="event-role">{event.role}</span>
                    </div>

                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-desc">{event.description}</p>

                    <div className="card-footer">
                      <div className="event-tags">
                        {event.tags.map(tag => (
                          <span key={tag} className="event-tag">{tag}</span>
                        ))}
                      </div>

                      {event.hasProject && (
                        <a
                          href={event.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-project-btn"
                          onClick={(e) => {
                            if (diff !== 0) e.preventDefault(); // Only allow clicking if active
                          }}
                        >
                          {event.buttonText || 'View Project'} &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-controls">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous event">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="carousel-indicators">
            {events.map((_, i) => (
              <div
                key={i}
                className={`indicator-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <button className="nav-btn" onClick={handleNext} aria-label="Next event">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
