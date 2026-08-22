import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className} style={{ wordBreak: 'break-word' }}>
      {characters.map((char, index) => {
        const charProgress = index / characters.length;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);
        
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        if (char === ' ') {
          return <span key={index} className="inline-block">&nbsp;</span>;
        }

        return (
          <span key={index} className="relative inline-block">
            <span className="opacity-0 select-none">{char}</span>
            <motion.span style={{ opacity }} className="absolute inset-0">
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
