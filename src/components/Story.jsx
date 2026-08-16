import React from 'react';
import CrowdBackground from './CrowdBackground';
import CodeBackground from './CodeBackground';
import ProcessVisuals from './ProcessVisuals';
import SplitText from './SplitText';
import './Story.css';

export default function Story() {
  return (
    <div className="story-container">
      {/* Scene 1: Curiosity */}
      <section id="about" className="story-scene">
        {/* Background Visuals: Embedded perfectly inside an SVG component */}
        <CrowdBackground />

        {/* Text layout matching the mockup exactly */}
        <div className="story-content reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s' }}>
          <div className="story-header">
            <span className="story-name">Neha</span>
            <span className="story-time">The beginning</span>
          </div>
          <h2 className="story-heading"><SplitText text="It started with curiosity." /></h2>
        </div>
      </section>

      {/* Scene 2: Solving Problems */}
      <section className="story-scene">
        <CodeBackground />
        
        <div className="story-content reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s' }}>
          <div className="story-header">
            <span className="story-name">Neha</span>
            <span className="story-time">Phase 2</span>
          </div>
          <h2 className="story-heading"><SplitText text="Then I started solving problems." /></h2>
        </div>
      </section>
      
      {/* Scene 3: Ideas to Reality */}
      <section className="story-scene scene-3-layout">
        <div className="story-content reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s', zIndex: 10 }}>
          <div className="story-header">
            <span className="story-name">Neha</span>
            <span className="story-time">Phase 3</span>
          </div>
          <h2 className="story-heading">
            <SplitText text="Then I started turning " />
            <br/>
            <span style={{ color: 'var(--accent-color)' }}><SplitText text="ideas" delayOffset={0.7} /></span>
            <SplitText text=" into reality." delayOffset={0.8} />
          </h2>
        </div>
        
        <ProcessVisuals />
      </section>
      
      {/* Scene 4 */}
      <section className="story-scene scene-4-layout">
        <div className="event-horizon-bg">
          <div className="event-horizon-planet reveal" style={{ transitionDelay: '0s', transitionDuration: '2s' }}></div>
        </div>
        <div className="story-content reveal" style={{ transitionDelay: '0.2s', transitionDuration: '1.5s', zIndex: 10 }}>
          <div className="story-header">
            <span className="story-name">Neha</span>
            <span className="story-time">Present</span>
          </div>
          <h2 className="story-heading"><SplitText text="And now I'm building what comes next." /></h2>
        </div>
      </section>
    </div>
  );
}
