import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className, trigger = true }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, trigger]);

  return (
    <span 
      className={className} 
      onMouseEnter={scramble} // Re-scramble on hover for fun
    >
      {display}
    </span>
  );
};
