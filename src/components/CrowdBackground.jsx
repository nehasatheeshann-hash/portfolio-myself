import React from 'react';

export default function CrowdBackground() {
  return (
    <svg 
      className="scene-bg reveal"
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    >
      <defs>
        {/* 
          Because this is now a true SVG DOM, we can add advanced 
          SVG filters, clipping paths, and masks here to interact with the image 
        */}
      </defs>
      
      {/* 
        This embeds the EXACT painted image into the SVG. 
        If you ever vectorize the painting into separate paths to animate individual people, 
        you can replace this <image> tag with those <path> elements! 
      */}
      <image 
        href="/curiosity.png" 
        width="100%" 
        height="100%" 
        preserveAspectRatio="xMidYMid slice" 
      />
      
      {/* Optional: We can add an SVG overlay to darken it seamlessly if needed */}
      <rect width="100%" height="100%" fill="url(#dark-overlay)" opacity="0.3" />
      <defs>
        <radialGradient id="dark-overlay" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.8" />
        </radialGradient>
      </defs>
    </svg>
  );
}
