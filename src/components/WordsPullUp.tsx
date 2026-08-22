import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ text, className = "", showAsterisk = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "40px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;
        
        return (
          <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 py-1">
            <motion.span
              variants={wordVariants}
              className="inline-block relative"
            >
              {isLastWord && showAsterisk ? (
                <span className="relative inline-block pr-[0.3em]">
                  {word}
                  <span 
                    className="absolute top-[0.45em] -right-[0.1em] text-[0.31em] select-none text-[#E1E0CC]"
                    style={{ fontFamily: 'sans-serif' }}
                  >
                    *
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};
