import React, { useState } from 'react';
import { Award, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WordsPullUp } from '../components/WordsPullUp';

interface ActivityItem {
  title: string;
  points: string[];
  subitems?: { label: string; date: string }[];
}

export const Activities: React.FC = () => {
  const items: ActivityItem[] = [
    {
      title: "Aspire Leader Program – Aspire Institute (Harvard-founded)",
      points: [
        "Selected for a global leadership development program focused on teamwork, mentorship, and professional growth.",
        "Completed the Aspire Horizons Course, designed and delivered by Harvard faculty, focused on leadership in the age of digital transformation and AI.",
        "Completed a Personal & Professional Development module covering self-assessment, resume building, and networking strategies."
      ]
    },
    {
      title: "McKinsey Forward Program – McKinsey & Company",
      points: [
        "Completed a 10-week program covering adaptability and resilience, structured problem-solving, and effective communication using McKinsey frameworks.",
        "Built skills in relationship building and collaborative teamwork, along with digital and AI literacy for modern workplace contexts.",
        "Engaged in self-paced digital courses and live virtual sessions led by McKinsey professionals, earning a McKinsey.org Forward digital badge."
      ]
    },
    {
      title: "Skilling Programs (AICTE-affiliated)",
      points: [],
      subitems: [
        { label: "AI & Cloud Technology – IBM SkillsBuild x Edunet Foundation", date: "Sep–Oct 2025" },
        { label: "Front End Web Development – IBM SkillsBuild x Edunet Foundation", date: "Aug–Sep 2025" },
        { label: "AI & Data Analytics (Green Skills) – Shell India x Edunet Foundation", date: "Aug–Sep 2025" }
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="activities" className="bg-black py-24 px-4 md:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="bg-[#101010] border border-white/5 px-3.5 py-1.5 rounded-full text-primary text-[10px] sm:text-xs tracking-[0.1em] uppercase font-bold block mb-4 select-none w-max mx-auto">
            Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
            <WordsPullUp text="Activities & Programs" />
          </h2>
        </div>

        {/* Accordion List */}
        <div className="relative w-full flex flex-col gap-6">
          {/* Vertical flow line backdrop */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-white/5 pointer-events-none" />

          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="relative flex items-start w-full">
                {/* Left Side: Index Indicator Circle Button */}
                <div className="relative z-10 flex flex-col items-center mr-4 md:mr-6 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#101010] border transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none"
                    style={{
                      borderColor: isOpen ? '#DEDBC8' : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isOpen ? '0 0 15px rgba(222, 219, 200, 0.15)' : 'none'
                    }}
                  >
                    {/* Animated accordion plus/minus icon */}
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      {/* Dotted outer outline */}
                      <svg 
                        className="absolute inset-0 w-full h-full text-primary/40 transition-transform duration-500" 
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: isOpen ? '#DEDBC8' : 'rgba(245, 245, 245, 0.4)'
                        }}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                      >
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" strokeDasharray="4 4" />
                      </svg>
                      {/* Central cross symbol */}
                      <div className="relative flex items-center justify-center w-full h-full">
                        <div 
                          className="absolute w-3 h-0.5 rounded-full transition-colors duration-500"
                          style={{ backgroundColor: isOpen ? '#DEDBC8' : 'rgba(245, 245, 245, 0.6)' }}
                        />
                        <div 
                          className="absolute h-3 w-0.5 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: isOpen ? 'transparent' : 'rgba(245, 245, 245, 0.6)',
                            transform: isOpen ? 'rotate(90deg) scale(0)' : 'scale(1)'
                          }}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Flowing downward connector path */}
                  <div 
                    className="absolute top-12 bottom-[-24px] w-[2px] transition-all duration-500 origin-top"
                    style={{
                      background: isOpen ? 'linear-gradient(to bottom, #DEDBC8, transparent)' : 'transparent',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'scaleY(1)' : 'scaleY(0)'
                    }}
                  />
                </div>

                {/* Right Side: Accordion content card */}
                <div className="flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 rounded-2xl border transition-all duration-500 flex justify-between items-center bg-[#101010]/95 hover:bg-[#151515] backdrop-blur-md"
                    style={{
                      borderColor: isOpen ? 'rgba(222, 219, 200, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                      borderBottomLeftRadius: isOpen ? 0 : 16,
                      borderBottomRightRadius: isOpen ? 0 : 16
                    }}
                  >
                    <span 
                      className="text-base sm:text-lg font-medium transition-colors duration-300 pr-4"
                      style={{ color: isOpen ? '#E1E0CC' : 'rgba(245, 245, 245, 0.75)' }}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Body expansion block */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-[#101010]/40 backdrop-blur-sm border-x border-b border-white/5 rounded-b-2xl relative">
                          {/* Inner gold shimmer line */}
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                          
                          {/* Bullet Points */}
                          {item.points && item.points.length > 0 && (
                            <ul className="space-y-3.5">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Subitems (Skilling Programs list) */}
                          {item.subitems && item.subitems.length > 0 && (
                            <div className="flex flex-col gap-3">
                              {item.subitems.map((sub, sIdx) => (
                                <div key={sIdx} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0 gap-4">
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <Award className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-300 truncate">{sub.label}</span>
                                  </div>
                                  <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded shrink-0">
                                    {sub.date}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
