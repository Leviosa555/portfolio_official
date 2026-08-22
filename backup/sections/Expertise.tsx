import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Check } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';

interface TagCardProps {
  number: string;
  title: string;
  text: string;
  items: string[];
  className?: string;
  aosDelay?: string;
  pathLength: any;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TagCard: React.FC<TagCardProps> = ({ 
  number, 
  title, 
  text, 
  items,
  className = "", 
  aosDelay = "0", 
  pathLength, 
  containerRef 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest: number) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: parseInt(aosDelay) / 1000, ease: [0.16, 1, 0.3, 1] }}
      className={`w-72 sm:w-80 rounded-[2rem] p-2.5 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 border ${
        isActive 
          ? 'bg-primary border-primary shadow-[0_20px_50px_rgba(222,219,200,0.18)]' 
          : 'bg-[#101010] border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
      } ${className}`}
    >
      {/* The hole punch / rivet detail */}
      <div className="w-5 h-5 bg-gradient-to-br from-black to-[#252525] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] absolute top-4 border border-white/10 z-10 flex items-center justify-center select-none">
        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${isActive ? 'bg-primary shadow-[0_0_8px_#DEDBC8]' : 'bg-white/10'}`}></div>
      </div>

      {/* Inner card container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[260px] transition-colors duration-700 ${
        isActive ? 'bg-black/95' : 'bg-[#161616]'
      }`}>
        {/* Category number */}
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 text-left ${
          isActive ? 'text-primary' : 'text-gray-500'
        }`}>{number}</span>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 tracking-tight text-left transition-colors duration-700 ${
          isActive ? 'text-primary' : 'text-[#E1E0CC]'
        }`}>{title}</h3>

        {/* Description */}
        <p className={`text-xs leading-relaxed font-light text-left mb-5 transition-colors duration-700 ${
          isActive ? 'text-gray-300' : 'text-gray-400'
        }`}>
          {text}
        </p>

        {/* Checklist */}
        <ul className="space-y-2.5 border-t border-white/5 pt-4 mt-auto">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-left">
              <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors duration-700 ${
                isActive ? 'text-primary animate-pulse' : 'text-primary/30'
              }`} />
              <span className={`text-[11px] font-medium leading-snug transition-colors duration-700 ${
                isActive ? 'text-gray-300 font-semibold' : 'text-gray-500'
              }`}>
                {item}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </motion.div>
  );
};

export const Expertise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-black pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(222,219,200,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(222,219,200,0.02)_1px,transparent_1px)] bg-[size:80px_80px] border-t border-white/5 select-none"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* Left Column Header Content */}
        <div className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0 text-left">
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-primary font-bold mb-8 shadow-sm bg-[#101010] select-none">
            My Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E1E0CC] leading-[1.1] mb-6 tracking-tight relative">
            <WordsPullUp text="Building Modern Digital Solutions with Code & AI" />
            {/* Hand-drawn arrow SVG */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-primary pointer-events-none select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-sm font-light leading-relaxed select-none">
            Combining full-stack development, artificial intelligence, and cloud technologies to create scalable and impactful digital experiences.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Guide guide line */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="rgba(222, 219, 200, 0.1)"
            strokeWidth="1.5"
            strokeDasharray="8 10"
          />

          {/* Mask to reveal path based on spring scroll */}
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Active revealed path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#DEDBC8"
            strokeWidth="1.8"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,24 L 2,100"
            fill="none"
            stroke="rgba(222, 219, 200, 0.1)"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,24 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,24 L 2,100"
            fill="none"
            stroke="#DEDBC8"
            strokeWidth="2"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Alternating Cards Container */}
        <div className="flex flex-col gap-8 md:gap-0 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          <TagCard
            number="01"
            title="Frontend Development"
            text="Crafting responsive and interactive user interfaces using React, JavaScript, Tailwind CSS, and modern frontend technologies to deliver seamless user experiences."
            items={[
              "React, Next.js & TypeScript UI",
              "Tailwind CSS & Vanilla CSS designs",
              "Responsive layouts & dynamic assets",
              "Vite & Webpack bundle optimization"
            ]}
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] md:rotate-6"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />
          
          <TagCard
            number="02"
            title="Backend Development"
            text="Building secure REST APIs, authentication systems, server-side applications, and database integrations with scalable architectures."
            items={[
              "Node.js, Express & Fastify frameworks",
              "PostgreSQL & MongoDB modeling",
              "RESTful & GraphQL API routes",
              "Redis caching & background queues"
            ]}
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] md:-rotate-6"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="03"
            title="Cyber Security"
            text="Conducting penetration testing, vulnerability assessments, implementing secure authentication, and configuring firewalls to guard corporate data assets."
            items={[
              "Zero-trust access & OAuth2 validation",
              "SSH & firewall key management profiles",
              "Threat logging & network vulnerability scans",
              "Server hardening & secure encryption schemas"
            ]}
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] md:rotate-3"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="04"
            title="Data & AI Solutions"
            text="Processing massive data pipelines using Python, pandas, and numpy, building interactive KPI dashboards, and training smart machine learning models."
            items={[
              "Python pandas & numpy data wash pipelines",
              "Model training & inference logic hooks",
              "Generative AI & LLM custom integrations",
              "Interactive PowerBI business analytics"
            ]}
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] md:-rotate-3"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Theme custom italic serif end text */}
          <div
            className="hidden md:block absolute top-[1280px] left-[55%] font-serif italic text-2xl text-primary/45 md:rotate-3 select-none"
          >
            Turning ideas into reality!
          </div>

        </div>

      </div>
    </section>
  );
};
