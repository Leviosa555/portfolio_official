import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InternshipExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export const Internship: React.FC = () => {
  const experiences: InternshipExperience[] = [
    {
      role: "Web Development Intern",
      company: "VaultofCodes",
      location: "Bengaluru, IN",
      period: "August 2025 - September 2025",
      description: "Contributed to building enterprise web applications using modern web technologies. Designed and engineered modular front-end interfaces and secure API server layers to elevate overall database query speeds and page performance."
    },
    {
      role: "Data Analyst Intern",
      company: "Apex Analytics Group",
      location: "Remote",
      period: "September 2024 - March 2025",
      description: "Structured and parsed large-scale raw datasets to design interactive analytics dashboards using PowerBI. Formulated predictive database models and regression algorithms to forecast user behaviors with high accuracy."
    },
    {
      role: "Cyber Security Intern",
      company: "Eyesec Cyber Security PVT LTD",
      location: "Hyderabad, IN",
      period: "February 2023 - May 2023",
      description: "Interned at Eyesec Cybersecurity Pvt Ltd, gaining hands-on experience in ethical hacking, penetration testing, and exploit development through labs and CTF environments like Hack The Box and TryHackMe."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    // Line drawing animation connected to scroll position
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Framer Motion Animation Variants
  const rowVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 220, damping: 15 }
    }
  };

  const cardVariants = (direction: 'left' | 'right'): Variants => ({
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -40 : 40 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 18 }
    }
  });

  return (
    <section id="internship" className="bg-black py-24 px-4 md:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="bg-[#101010] border border-white/5 px-3.5 py-1.5 rounded-full text-primary text-[10px] sm:text-xs tracking-[0.1em] uppercase font-bold block mb-4 select-none w-max mx-auto">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
            <WordsPullUp text="Internship Experience" />
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full">
          
          {/* Central Vertical Timeline Line Track */}
          <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 z-0" />

          {/* Animated Growing Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2 z-0 origin-top"
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0; // Even indexes appear on the right side
            
            return (
              <motion.div
                key={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-0 relative mb-16 last:mb-0 pl-10 md:pl-0"
              >
                {/* Mobile-only Timeline Dot */}
                <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-black flex items-center justify-center md:hidden z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Left Side (Card on Left for Odd Indices, Spacer for Even Indices) */}
                {!isEven ? (
                  <motion.div 
                    variants={cardVariants('left')}
                    className="col-span-1 md:col-span-4 relative text-left md:text-right"
                  >
                    {/* Diamond Connector Pointer (Visible only on desktop) */}
                    <div className="hidden md:block absolute -right-[9px] top-6 w-4 h-4 bg-[#101010]/95 border-r border-t border-white/5 rotate-45 z-0" />
                    
                    {/* Experience Card */}
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015, borderColor: 'rgba(222,219,200,0.3)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bg-[#101010]/95 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-[0_15px_30px_rgba(222,219,200,0.06)] relative z-10 transition-colors duration-300 text-left"
                    >
                      {/* Period Pill Badge */}
                      <div className="flex md:justify-end mb-4">
                        <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold font-mono text-primary bg-black/45 border border-primary/20 px-3.5 py-1.5 rounded-full shadow-inner select-none w-max">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#E1E0CC] mb-1">
                        {exp.company}
                      </h3>
                      
                      <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-4 block font-mono">
                        {exp.role}
                      </span>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block col-span-4" />
                )}

                {/* Center Dot (Desktop only) */}
                <div className="hidden md:flex justify-center items-center col-span-1 relative">
                  <motion.div 
                    variants={dotVariants}
                    className="w-6 h-6 rounded-full border-2 border-primary bg-black flex items-center justify-center z-10 shadow-[0_0_10px_rgba(222,219,200,0.2)]"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </motion.div>
                </div>

                {/* Right Side (Card on Right for Even Indices, Spacer for Odd Indices) */}
                {isEven ? (
                  <motion.div 
                    variants={cardVariants('right')}
                    className="col-span-1 md:col-span-4 relative text-left"
                  >
                    {/* Diamond Connector Pointer (Visible only on desktop) */}
                    <div className="hidden md:block absolute -left-[9px] top-6 w-4 h-4 bg-[#101010]/95 border-l border-b border-white/5 rotate-45 z-0" />
                    
                    {/* Experience Card */}
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015, borderColor: 'rgba(222,219,200,0.3)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bg-[#101010]/95 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-[0_15px_30px_rgba(222,219,200,0.06)] relative z-10 transition-colors duration-300 text-left"
                    >
                      {/* Period Pill Badge */}
                      <div className="flex mb-4">
                        <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold font-mono text-primary bg-black/45 border border-primary/20 px-3.5 py-1.5 rounded-full shadow-inner select-none w-max">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#E1E0CC] mb-1">
                        {exp.company}
                      </h3>
                      
                      <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-4 block font-mono">
                        {exp.role}
                      </span>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block col-span-4" />
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
