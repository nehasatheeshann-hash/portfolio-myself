import React from 'react';
import './CodeBackground.css';

export default function CodeBackground() {
  return (
    <div className="code-background">
      <div className="code-glow reveal" style={{ transitionDelay: '0.8s', transitionDuration: '2s' }}></div>
      
      {/* Left Side Snippets */}
      <div className="code-snippet code-left-1 desktop-only reveal" style={{ transitionDelay: '0.1s' }}>
        <span className="code-method">useEffect</span>(() {`=>`} {`{`}<br />
        &nbsp;&nbsp;<span className="code-keyword">const</span> el = <span className="code-variable">document</span>.<span className="code-method">querySelector</span>(<span className="code-string">'.container'</span>)<br />
        {`}`}, [])
      </div>

      <div className="code-snippet code-left-2 reveal" style={{ transitionDelay: '0.3s' }}>
        <span className="code-keyword">import</span> {`{`} <span className="code-method">useState</span> {`}`} <span className="code-keyword">from</span> <span className="code-string">'react'</span>
      </div>

      <div className="code-snippet code-left-3 reveal" style={{ transitionDelay: '0.5s' }}>
        <span className="code-comment">// keep pushing</span><br /><br />
        <span className="code-string">"use client"</span>;
      </div>

      <div className="code-snippet code-left-4 reveal" style={{ transitionDelay: '0.7s' }}>
        <span className="code-keyword">const</span> [open, setOpen] = <span className="code-method">useState</span>(<span className="code-boolean">false</span>)
      </div>

      <div className="code-snippet code-left-5 desktop-only reveal" style={{ transitionDelay: '0.4s' }}>
        <span className="code-keyword">function</span> <span className="code-method">solve</span>(problem) {`{`}<br />
        &nbsp;&nbsp;<span className="code-keyword">return</span> persistence + logic + time<br />
        {`}`}
      </div>
      
      <div className="code-snippet code-left-6 reveal" style={{ transitionDelay: '0.6s' }}>
        onClick={`{`}<span className="code-method">handleOpen</span>{`}`}
      </div>

      <div className="code-snippet code-left-7 desktop-only reveal" style={{ transitionDelay: '0.2s' }}>
        transition: <span className="code-keyword">all</span> <span className="code-number">0.3s</span> <span className="code-method">ease</span>;
      </div>

      {/* Right Side Snippets */}
      <div className="code-snippet code-right-1 desktop-only reveal" style={{ transitionDelay: '0.2s' }}>
        <span className="code-variable">ScrollTrigger</span>.<span className="code-method">create</span>({`{`}<br />
        &nbsp;&nbsp;start: <span className="code-string">'top top'</span>,<br />
        &nbsp;&nbsp;end: <span className="code-string">'bottom top'</span>,<br />
        &nbsp;&nbsp;scrub: <span className="code-boolean">true</span><br />
        {`}`})
      </div>

      <div className="code-snippet code-right-2 reveal" style={{ transitionDelay: '0.4s' }}>
        <span className="code-keyword">interface</span> <span className="code-type">Props</span> {`{`}<br />
        &nbsp;&nbsp;children: <span className="code-type">ReactNode</span><br />
        {`}`}
      </div>

      <div className="code-snippet code-right-3 desktop-only reveal" style={{ transitionDelay: '0.6s' }}>
        <span className="code-keyword">export default function</span> <span className="code-method">App</span>() {`{`}<br />
        &nbsp;&nbsp;<span className="code-keyword">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-variable">div</span> className=<span className="code-string">"container"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{`}children{`}`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-variable">div</span>&gt;<br />
        &nbsp;&nbsp;)<br />
        {`}`}
      </div>

      <div className="code-snippet code-right-4 reveal" style={{ transitionDelay: '0.3s' }}>
        <span className="code-keyword">type</span> <span className="code-type">Theme</span> = <span className="code-string">'dark'</span> | <span className="code-string">'light'</span>
      </div>

      <div className="code-snippet code-right-5 reveal" style={{ transitionDelay: '0.5s' }}>
        <span className="code-keyword">const</span> theme = <span className="code-string">'dark'</span>
      </div>
      
      <div className="code-snippet code-right-6 desktop-only reveal" style={{ transitionDelay: '0.7s' }}>
        <span className="code-keyword">const</span> ideas = []<br />
        ideas.<span className="code-method">push</span>(solve)
      </div>
      
      <div className="code-snippet code-right-7 reveal" style={{ transitionDelay: '0.1s' }}>
        &lt;<span className="code-type">Explore</span> /&gt;
      </div>
      
      <div className="code-snippet code-right-8 reveal" style={{ transitionDelay: '0.4s' }}>
        ref={`{`}<span className="code-variable">containerRef</span>{`}`}
      </div>
    </div>
  );
}
