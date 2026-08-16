import React from 'react';
import './Hero.css';
import SplitText from './SplitText';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-greeting"><SplitText text="Hi, I'm Neha." /></h2>
        <h1 className="hero-title">
          <span className="cursive-text"><SplitText text="Software Developer" delayOffset={0.3} /></span>
          <span className="hero-subtitle"><SplitText text=" in the making." delayOffset={0.6} /></span>
        </h1>
      </div>

      <div className="scroll-indicator reveal" style={{ transitionDelay: '0.8s' }}>
        <span className="scroll-text">Have a look</span>
        <div className="scroll-hint">
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <rect x="1.5" y="1.5" width="15" height="25" rx="7.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"></rect>
            <rect x="7.5" y="5" width="3" height="6" rx="1.5" fill="var(--accent-color)"></rect>
          </svg>
        </div>
      </div>
    </section>
  );
}
