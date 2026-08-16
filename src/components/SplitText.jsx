import React from 'react';
import './SplitText.css';

export default function SplitText({ text, className = "", delayOffset = 0, style = {} }) {
  let charCount = 0;
  
  // If the text contains HTML-like elements (e.g. spans for colors), 
  // a robust implementation would require parsing, but since we are just passing strings,
  // we split by space to get words, then map each character.
  // We'll allow a special prop `parts` if we need mixed coloring, but for now we'll stick to simple strings.
  
  return (
    <span className={`split-text reveal ${className}`} style={style}>
      {text.split(' ').map((word, wordIndex, wordsArray) => (
        <span key={`word-${wordIndex}`} className="split-word">
          {word.split('').map((char, charIndex) => {
            const currentCount = charCount++;
            return (
              <span 
                key={`char-${currentCount}`} 
                className="split-char"
                style={{ transitionDelay: `${delayOffset + currentCount * 0.03}s` }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < wordsArray.length - 1 && (
             <span 
               className="split-char space" 
               style={{ transitionDelay: `${delayOffset + charCount++ * 0.03}s` }}
             >
               &nbsp;
             </span>
          )}
        </span>
      ))}
    </span>
  );
}
