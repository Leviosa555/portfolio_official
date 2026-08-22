import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { AnimatedLetter } from '../components/AnimatedLetter';

export const About: React.FC = () => {
  const paragraphRef = useRef<HTMLDivElement>(null);
  
  // Initialize useScroll with specific target and offsets
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const headingSegments = [
    { text: "I am Mohammed Junaid Betgeri, ", className: "text-[#E1E0CC] font-normal" },
    { text: "a Computer Science & IT specialist. ", className: "italic font-serif text-primary" },
    { text: "I have skills in full-stack web engineering, data analysis, cybersecurity, and artificial intelligence.", className: "text-[#E1E0CC] font-normal" }
  ];

  const paragraphText = "Over the last few years, I have worked with multiple software firms and tech groups, engineering secure full-stack web platforms, auditing network models, and designing data pipelines. Together, we have built scalable software systems that balance performance and secure design.";
  
  const characters = paragraphText.split("");

  return (
    <section id="about" className="bg-black py-16 sm:py-24 px-4 sm:px-6 md:px-8 flex items-center justify-center relative z-10">
      <div className="bg-[#101010] border border-white/5 w-full max-w-6xl rounded-[2rem] px-6 py-16 sm:px-12 sm:py-24 md:py-28 text-center shadow-2xl relative overflow-hidden">
        
        {/* Decorative corner highlights */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-tl-[2rem] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-br-[2rem] pointer-events-none" />

        {/* Small sub-label */}
        <span 
          className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6 select-none"
        >
          Computer Science
        </span>

        {/* Cinematic Staggered Title */}
        <WordsPullUpMultiStyle 
          segments={headingSegments}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.1] sm:leading-[1.0] text-center font-normal tracking-tight"
        />

        {/* Scroll-linked character reveal paragraph */}
        <div ref={paragraphRef} className="max-w-2xl mx-auto mt-12 sm:mt-16 md:mt-20">
          <p 
            className="text-[#DEDBC8]/90 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-center"
            style={{ wordBreak: 'break-word', color: '#E1E0CC' }}
          >
            {characters.map((char, index) => (
              <AnimatedLetter 
                key={index} 
                char={char} 
                index={index} 
                total={characters.length} 
                progress={scrollYProgress} 
              />
            ))}
          </p>
        </div>

      </div>
    </section>
  );
};
