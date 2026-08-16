import React, { useState, useEffect, useRef } from 'react';
import './InteractiveCode.css';

export default function InteractiveCode() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="code-section" ref={sectionRef}>
      <div className={`code-window reveal ${inView ? 'active' : ''}`}>
        <div className="code-header">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="code-body">
          <pre>
            <code>
              <span className="token keyword">const</span> <span className="token variable">neha</span> <span className="token operator">=</span> {'{'}
              {'\n'}  <span className="token property">currently</span>: <span className="token string">"building"</span>,
              {'\n'}  <span className="token property">learning</span>: <span className="token string">"frontend"</span>,
              {'\n'}  <span className="token property">creating</span>: <span className="token string">"web experiences"</span>
              {'\n'}{'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
