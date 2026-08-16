import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="minimal-nav">
      <div className="nav-brand">
        <Link to="/#home" className="logo-container">
          <svg viewBox="0 0 100 100" className="logo-svg">
            <polygon points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" fill="var(--accent-color)" />
            <text x="50" y="65" fontFamily="var(--font-sans)" fontSize="50" fontWeight="bold" fill="#000" textAnchor="middle">n</text>
          </svg>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#resume">Resume</Link>
      </div>
    </nav>
  );
}
