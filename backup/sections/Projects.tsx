import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  year: string;
  imgUrl: string;
  description: string;
  link: string;
}

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Secure Vault Portal",
      category: "Full-Stack / Cybersecurity",
      year: "2025",
      imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
      description: "An end-to-end encrypted storage dashboard utilizing zero-knowledge authentication algorithms, custom AES-256 libraries, and multi-factor validation hooks.",
      link: "#"
    },
    {
      title: "Cognitive Insight Engine",
      category: "Data Analysis / Machine Learning",
      year: "2025",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      description: "A Python-powered forecasting and analytics dashboard that parses massive unstructured retail datasets to detect anomalous purchases and user behavior cycles.",
      link: "#"
    },
    {
      title: "Prisma Studio Portal",
      category: "Web Engineering / UX Design",
      year: "2024",
      imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200",
      description: "A high-fidelity scroll-linked creative portfolio showcase engineered with advanced React performance optimizations, fluid GSAP timeline shaders, and CSS noise layers.",
      link: "#"
    }
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.project-item');

    const anim = gsap.fromTo(items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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
    <section id="projects" className="bg-black py-20 px-4 md:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4 select-none">
              Selected works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
              <WordsPullUp text="Artistry in Action" />
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-sm text-left font-light leading-relaxed select-none">
            A curation of direct creative execution across film production, interactive motion, and technical color editing.
          </p>
        </div>

        {/* Projects Listing */}
        <div ref={containerRef} className="space-y-12">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="project-item group flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center bg-[#101010]/30 hover:bg-[#101010]/60 p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl"
            >
              {/* Image side - Col 7 */}
              <div className="lg:col-span-7 w-full aspect-[16/10] rounded-2xl overflow-hidden relative border border-white/5">
                <img 
                  src={proj.imgUrl} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply transition-opacity group-hover:opacity-10 duration-500" />
                <div className="absolute inset-0 noise-overlay opacity-[0.2] pointer-events-none" />
              </div>

              {/* Text side - Col 5 */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full w-full text-left py-2">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-primary font-semibold tracking-wider font-mono uppercase">
                      {proj.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{proj.year}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E1E0CC] mb-4 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <a 
                    href={proj.link}
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase text-primary tracking-wider hover:opacity-80 transition-all group/btn cursor-pointer"
                  >
                    View Case Study
                    <div className="bg-[#212121] p-2 rounded-full border border-white/10 group-hover/btn:border-primary/20 transition-all">
                      <ArrowRight className="w-4 h-4 text-primary -rotate-45 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
