import React, { useState, useEffect } from 'react';

interface HackerTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const HackerText: React.FC<HackerTextProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;
    
    const startAnimation = () => {
      clearInterval(interval);
      iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  const handleMouseEnter = () => {
    let interval: NodeJS.Timeout;
    let iteration = 0;
    
    clearInterval(interval!);
    
    interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span 
      className={`font-mono cursor-default ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};
