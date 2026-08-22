import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';

gsap.registerPlugin(ScrollTrigger);

interface InternshipExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const Internship: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences: InternshipExperience[] = [
    {
      role: "Full-Stack Developer Intern",
      company: "TechSol Solutions",
      location: "Bengaluru, IN",
      period: "Jul 2025 — Present",
      bullets: [
        "Engineered secure server APIs using Node.js, Express, and PostgreSQL, reducing endpoint latencies by 20%.",
        "Designed and implemented modular, fully responsive front-end UI panels with React, Vite, and custom Tailwind CSS components.",
        "Integrated OAuth2 user authentication mechanisms and database models, shielding application routes from potential injection attacks."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Apex Analytics Group",
      location: "Remote",
      period: "Sep 2024 — Mar 2025",
      bullets: [
        "Authored Python script scrapers and pipeline handlers to wash and query massive unstructured datasets via pandas and numpy.",
        "Created interactive data visualizations and executive reporting dashboards utilizing PowerBI and Excel pivot arrays.",
        "Designed linear and logistics regression models to forecast target user behavior metrics with 90% mapping accuracy."
      ]
    },
    {
      role: "Cybersecurity & IT Support Intern",
      company: "SecureNet Labs",
      location: "Hyderabad, IN",
      period: "Jan 2023 — Aug 2024",
      bullets: [
        "Performed server security audits, vulnerability scanning, and pen-testing across multiple subnets and internal web nodes.",
        "Configured firewall rules, set up network intrusion detection monitors, and managed SSH public-key user accesses.",
        "Analyzed database logging traces and system alerts to mitigate potential privilege escalations and auth bypass attempts."
      ]
    }
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const timelineNodes = el.querySelectorAll('.timeline-node');

    const anim = gsap.fromTo(timelineNodes,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section id="internship" className="bg-black py-20 px-4 md:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4 select-none">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
            <WordsPullUp text="Internship & Experience" />
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 md:pl-12 border-l border-white/10 ml-4 space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-node relative text-left group"
            >
              {/* Connector Dot */}
              <div className="absolute -left-[31px] md:-left-[54px] top-1.5 bg-black border border-white/20 w-4 h-4 md:w-6 md:h-6 rounded-full flex items-center justify-center group-hover:border-primary/60 transition-colors duration-300">
                <div className="bg-primary/50 group-hover:bg-primary w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#101010] border border-white/5 hover:border-primary/20 rounded-2xl p-6 md:p-8 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#E1E0CC] group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-0.5">
                      {exp.company} <span className="text-gray-500 font-normal">| {exp.location}</span>
                    </p>
                  </div>
                  
                  {/* Period label */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-[#212121] px-3.5 py-2 rounded-full border border-white/5 w-max select-none">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5 pl-4 list-disc text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
