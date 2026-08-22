import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { Code2, Server, ShieldCheck, Cpu, Check } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { cn } from '../lib/utils';

interface StepData {
  number: string;
  title: string;
  text: string;
  items: string[];
  icon: React.ComponentType<any>;
}

const EXPERTISE_STEPS: StepData[] = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Crafting responsive and interactive user interfaces using React, JavaScript, Tailwind CSS, and modern frontend technologies to deliver seamless user experiences.",
    items: [
      "React, Next.js & TypeScript UI",
      "Tailwind CSS & Vanilla CSS designs",
      "Responsive layouts & dynamic assets",
      "Vite & Webpack bundle optimization"
    ],
    icon: Code2
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Building secure REST APIs, authentication systems, server-side applications, and database integrations with scalable architectures.",
    items: [
      "Node.js, Express & Fastify frameworks",
      "PostgreSQL & MongoDB modeling",
      "RESTful & GraphQL API routes",
      "Redis caching & background queues"
    ],
    icon: Server
  },
  {
    number: "03",
    title: "Cyber Security",
    text: "Conducting penetration testing, vulnerability assessments, implementing secure authentication, and configuring firewalls to guard corporate data assets.",
    items: [
      "Zero-trust access & OAuth2 validation",
      "SSH & firewall key management profiles",
      "Threat logging & network vulnerability scans",
      "Server hardening & secure encryption schemas"
    ],
    icon: ShieldCheck
  },
  {
    number: "04",
    title: "Data & AI Solutions",
    text: "Processing massive data pipelines using Python, pandas, and numpy, building interactive KPI dashboards, and training smart machine learning models.",
    items: [
      "Python pandas & numpy data wash pipelines",
      "Model training & inference logic hooks",
      "Generative AI & LLM custom integrations",
      "Interactive PowerBI business analytics"
    ],
    icon: Cpu
  }
];

const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: {}
};

const CardVisualization: React.FC<{ index: number }> = ({ index }) => {
  if (index === 0) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] z-10 pointer-events-none">
        <div className="relative w-full h-full border border-white/20 rounded-2xl bg-black/80 overflow-hidden flex flex-col shadow-inner transition-all duration-500 group-hover:border-primary/40">
          {/* Header bar */}
          <div className="border-b border-white/10 h-5 flex items-center px-3 gap-1 shrink-0 bg-black/60">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          {/* Body wireframe */}
          <div className="p-3 flex-1 flex flex-col gap-2.5 relative">
            {/* Navbar */}
            <motion.div 
              animate={{ opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-full bg-white/25 rounded origin-left"
            />
            {/* Split layout */}
            <div className="flex gap-3 flex-1 min-h-0 items-stretch mt-0.5">
              {/* Sidebar list */}
              <div className="w-[28%] border border-white/10 bg-white/[0.02] rounded-lg p-1.5 flex flex-col gap-1.5">
                {[0.7, 0.55, 0.4].map((widthMultiplier, i) => (
                  <motion.div 
                    key={i}
                    animate={{ width: [`${widthMultiplier * 70}%`, `${widthMultiplier * 100}%`, `${widthMultiplier * 70}%`], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    className="h-1.5 bg-white/25 rounded"
                  />
                ))}
              </div>
              {/* Main content pane */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Hero Banner */}
                <motion.div 
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-7 border border-white/15 bg-white/[0.03] rounded-lg origin-top"
                />
                {/* Grid cards */}
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  {[0, 1].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.4, 0.8, 0.4], borderColor: ["rgba(255,255,255,0.12)", "rgba(222,219,200,0.45)", "rgba(255,255,255,0.12)"] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                      className="border border-white/15 bg-white/[0.02] rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Cursor */}
            <motion.div 
              animate={{
                x: [0, -80, -140, -60, 0],
                y: [0, -45, -75, -35, 0],
                opacity: [0.55, 0.95, 0.75, 0.55]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-4 bottom-4 pointer-events-none"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary drop-shadow-[0_0_8px_rgba(222,219,200,0.5)]">
                <path d="M4.5 3V17L9.5 12.5L15.5 18.5L18.5 15.5L12.5 9.5L17.5 4.5H4.5Z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  if (index === 1) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] z-10 pointer-events-none">
        <div className="relative w-full h-full border border-white/20 rounded-2xl bg-black/80 overflow-hidden flex items-center justify-between px-6 py-4 shadow-inner transition-all duration-500 group-hover:border-primary/40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />
          
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 200 110">
            {/* Base lines */}
            <path 
              d="M60,40 C100,40 100,70 140,70" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.15)" 
              strokeWidth="1.5"
            />
            <path 
              d="M60,70 C100,70 100,40 140,40" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.15)" 
              strokeWidth="1.5"
            />
            {/* Flow line animations */}
            <motion.path 
              d="M60,40 C100,40 100,70 140,70" 
              fill="none" 
              stroke="#DEDBC8" 
              strokeWidth="1.5"
              strokeDasharray="5 15"
              animate={{ strokeDashoffset: [-20, 20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M60,70 C100,70 100,40 140,40" 
              fill="none" 
              stroke="#DEDBC8" 
              strokeWidth="1.5"
              strokeDasharray="5 15"
              animate={{ strokeDashoffset: [20, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          
          {/* Left Side: Server racks */}
          <div className="flex flex-col gap-2.5 relative z-10">
            {[0, 1].map((i) => (
              <div key={i} className="w-14 h-7 border border-white/10 bg-black/60 rounded flex flex-col justify-between p-1.5 relative group-hover:border-primary/20">
                <div className="flex justify-between items-center w-full">
                  <div className="h-1 w-6 bg-white/20 rounded" />
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                  </div>
                </div>
                <div className="h-0.5 w-full bg-white/5 rounded mt-0.5" />
              </div>
            ))}
          </div>
          
          {/* Right Side: Database storage */}
          <div className="flex flex-col gap-1 items-center relative z-10">
            <div className="w-14 h-18 border border-white/10 bg-black/60 rounded-lg flex flex-col justify-between p-1.5 group-hover:border-primary/20">
              <div className="h-3 border border-white/10 bg-white/[0.02] rounded flex items-center justify-center text-[5.5px] font-mono text-white/50">DB-SERVER</div>
              <div className="flex-1 flex flex-col justify-center gap-1.5 mt-1">
                <div className="h-1 bg-white/15 rounded w-full" />
                <div className="h-1 bg-white/15 rounded w-5/6" />
                <div className="h-1 bg-white/15 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (index === 2) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] z-10 pointer-events-none">
        <div className="relative w-full h-full border border-white/20 rounded-2xl bg-black/80 overflow-hidden flex items-center justify-center shadow-inner transition-all duration-500 group-hover:border-primary/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
          
          {/* Laser Scanner - highly visible scanning line */}
          <motion.div 
            animate={{
              translateY: [-35, 35, -35]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-10 pointer-events-none"
          />

          <div className="relative z-10 flex items-center justify-center">
            {/* Concentric scan circles - thick and visible */}
            <motion.div 
              animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-20 h-20 rounded-full border-2 border-primary/25"
            />
            <motion.div 
              animate={{ scale: [1.25, 0.95, 1.25], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full border border-white/10"
            />
            {/* Core Shield */}
            <motion.div
              variants={{
                initial: { scale: 0.95, opacity: 0.55 },
                hover: { scale: 1.05, opacity: 0.95 }
              }}
              className="text-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14 drop-shadow-[0_0_15px_rgba(222,219,200,0.45)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  if (index === 3) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] z-10 pointer-events-none">
        <div className="relative w-full h-full border border-white/20 rounded-2xl bg-black/80 overflow-hidden flex flex-col shadow-inner transition-all duration-500 group-hover:border-primary/40">
          {/* Header bar */}
          <div className="border-b border-white/10 h-5 flex items-center px-3 gap-1 shrink-0 bg-black/60">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          {/* Body wireframe */}
          <div className="p-3 flex-1 flex flex-col gap-2 relative">
            {/* Top Dashboard Header */}
            <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded px-2 py-1 gap-4">
              <div className="h-1.5 w-16 bg-[#E1E0CC]/55 rounded" />
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded bg-primary/70" />
                <div className="w-3 h-1.5 rounded bg-white/20" />
              </div>
            </div>
            {/* Main content grid */}
            <div className="flex-1 flex gap-2 min-h-0 items-stretch">
              {/* Left Panel: 3 Stat KPI Cards */}
              <div className="w-[30%] flex flex-col gap-1.5 justify-between">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex-1 border border-white/10 bg-white/[0.02] rounded-md p-1 flex flex-col justify-center gap-1">
                    <div className="h-1 bg-white/20 rounded w-2/3" />
                    <motion.div 
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="h-1.5 bg-primary/65 rounded w-1/2" 
                    />
                  </div>
                ))}
              </div>
              {/* Right Panel: Large Trend Graph & Equalizer bars */}
              <div className="flex-1 flex flex-col gap-1.5 min-h-0">
                {/* Trend Graph Grid */}
                <div className="flex-1 border border-white/10 bg-white/[0.01] rounded-md relative overflow-hidden p-1.5">
                  <svg className="w-full h-full" viewBox="0 0 100 50">
                    {/* Grid lines */}
                    <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="45" x2="100" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    {/* Graph Path - Segment based L to align perfectly */}
                    <path 
                      d="M10,45 L35,20 L60,35 L90,10"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.15)"
                      strokeWidth="1.2"
                    />
                    <motion.path 
                      d="M10,45 L35,20 L60,35 L90,10"
                      fill="none"
                      stroke="#DEDBC8"
                      strokeWidth="1.2"
                      strokeDasharray="3 6"
                      animate={{ strokeDashoffset: [-20, 20] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Dot nodes aligned with path vertices */}
                    {[
                      { cx: 10, cy: 45 },
                      { cx: 35, cy: 20 },
                      { cx: 60, cy: 35 },
                      { cx: 90, cy: 10 }
                    ].map((pt, i) => (
                      <motion.circle 
                        key={i}
                        cx={pt.cx}
                        cy={pt.cy}
                        r="2.2"
                        fill="#DEDBC8"
                        animate={{ r: [1.8, 2.8, 1.8], opacity: [0.5, 0.95, 0.5] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.45 }}
                      />
                    ))}
                  </svg>
                </div>
                {/* Horizontal comparison bars */}
                <div className="h-8 border border-white/10 bg-white/[0.01] rounded-md p-1 flex justify-between items-center gap-1.5">
                  {[45, 80, 60].map((widthVal, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5 justify-center">
                      <div className="h-[3px] bg-white/10 rounded w-full flex items-center overflow-hidden">
                        <motion.div 
                          animate={{ width: [`15%`, `${widthVal}%`, `15%`] }}
                          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-primary/70 rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export const Expertise: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuration constants matching the serpentine timeline
  const accentColor = "#DEDBC8"; // Primary gold
  const lineColor = "rgba(222, 219, 200, 0.08)"; // Faded gold
  const cornerMaskColor = "#000000"; // Black background mask
  const lineWidth = 4;
  const dotSize = 16;
  const showDots = true;
  const cornerRadius = 50;

  const lastIndex = EXPERTISE_STEPS.length - 1;
  const lastReversed = lastIndex % 2 !== 0;

  const dotOffset = dotSize / 2 - lineWidth / 2;
  const mobileDotLeft = 25 - dotSize / 2;
  const mobileLineLeft = 25 - lineWidth / 2;

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-black pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(222,219,200,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(222,219,200,0.02)_1px,transparent_1px)] bg-[size:80px_80px] border-t border-white/5 select-none"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-20 max-w-2xl">
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-primary font-bold mb-8 shadow-sm bg-[#101010] select-none">
            My Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E1E0CC] leading-[1.1] mb-6 tracking-tight relative">
            <WordsPullUp text="Building Modern Digital Solutions with Code & AI" />
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-light leading-relaxed select-none">
            Combining full-stack development, artificial intelligence, and cybersecurity to create scalable, highly performant, and secure digital experiences.
          </p>
        </div>

        {/* Serpentine Timeline Wrapper */}
        <div 
          className="relative w-full"
          style={{
            maxWidth: isMobile ? "100%" : "calc(100% - 60px)",
            margin: "0 auto",
            paddingLeft: isMobile ? 35 : 0,
            paddingRight: isMobile ? 15 : 0
          }}
        >
          {/* Timeline Steps */}
          {EXPERTISE_STEPS.map((step, index) => (
            <AnimatedStepRow
              key={index}
              step={step}
              index={index}
              isFirst={index === 0}
              isLast={index === lastIndex}
              accentColor={accentColor}
              lineColor={lineColor}
              cornerMaskColor={cornerMaskColor}
              isMobile={isMobile}
              lineWidth={lineWidth}
              dotSize={dotSize}
              showDots={showDots}
              cornerRadius={cornerRadius}
            />
          ))}

          {/* Start Point Dot */}
          {showDots && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: isMobile ? mobileDotLeft : -dotOffset,
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                backgroundColor: accentColor,
                zIndex: 10,
                boxShadow: `0 0 15px ${accentColor}`
              }}
            />
          )}

          {/* End Point Dot */}
          {showDots && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: isMobile ? mobileDotLeft : lastReversed ? `calc(50% - ${dotOffset}px)` : -dotOffset,
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                backgroundColor: accentColor,
                zIndex: 10,
                boxShadow: `0 0 15px ${accentColor}`
              }}
            />
          )}

          {/* Mobile Full Vertical Inactive Line */}
          {isMobile && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: mobileLineLeft,
                width: lineWidth,
                height: "100%",
                backgroundColor: lineColor,
                borderRadius: showDots ? 0 : lineWidth / 2,
                zIndex: 0
              }}
            />
          )}
        </div>

      </div>
    </section>
  );
};

interface AnimatedStepRowProps {
  step: StepData;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  accentColor: string;
  lineColor: string;
  cornerMaskColor: string;
  isMobile: boolean;
  lineWidth: number;
  dotSize: number;
  showDots: boolean;
  cornerRadius: number;
}

const AnimatedStepRow: React.FC<AnimatedStepRowProps> = ({
  step,
  index,
  isFirst,
  isLast,
  accentColor,
  lineColor,
  cornerMaskColor,
  isMobile,
  lineWidth,
  dotSize,
  showDots,
  cornerRadius
}) => {
  const reversed = !isMobile && index % 2 !== 0;
  const stepRef = useRef<HTMLDivElement>(null);
  const [isNumberTriggered, setIsNumberTriggered] = useState(false);

  // Scroll triggers linked to scroll progression through the viewport
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["end end", "start start"]
  });

  // Smooth the scroll target input for fluid transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  // Calculate segment drawing values based on smoothed scroll triggers
  const height = useTransform(smoothProgress, [0, 0.05, 0.35], ["0%", "0%", "100%"]);
  const width = useTransform(smoothProgress, [0, 0.35, 0.45], ["0%", "0%", "50%"]);
  const opacityTop = useTransform(smoothProgress, [0, 0.02], [0, 1]);
  const opacityBottom = useTransform(smoothProgress, [0, 0.33, 0.35], [0, 0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.15) {
      setIsNumberTriggered(true);
    }
  });

  useEffect(() => {
    if (scrollYProgress.get() >= 0.15) {
      setIsNumberTriggered(true);
    }
  }, [scrollYProgress]);

  const numberValue = parseInt(step.number, 10) || 0;
  const numFontSize = 96;
  const numLH = Math.round(numFontSize * 0.93);
  const mobileNumSize = numFontSize * 0.65;
  const mobileNumLH = Math.round(mobileNumSize * 0.93);

  const rowLineOffset = 25 - lineWidth / 2 - 35;
  const safeCornerRadius = Math.max(cornerRadius, lineWidth);
  const curveSize = safeCornerRadius * 2;
  const maskSize = safeCornerRadius;
  const curveLeftReversed = `calc(50% - ${curveSize - lineWidth}px)`;
  const maskLeftReversed = `calc(50% - ${maskSize - lineWidth}px)`;

  if (isMobile) {
    return (
      <motion.div
        ref={stepRef}
        className="relative py-10 pl-6 z-10 w-full text-left"
      >
        {/* Mobile Vertical Progress Overlay Line */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: rowLineOffset,
            width: lineWidth,
            backgroundColor: accentColor,
            height,
            borderRadius: `${isFirst && !showDots ? lineWidth / 2 : 0}px ${isFirst && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px`,
            willChange: "transform"
          }}
        />

        <div className="flex flex-col gap-6 w-full text-left">
          {/* Centered Wireframe (Fully Wireframe/Transparent card layout) */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            className="relative w-full aspect-[16/10] bg-transparent border-none overflow-hidden group cursor-pointer"
          >
            {/* Custom Wireframe Visualization (Centered) */}
            <CardVisualization index={index} />
          </motion.div>

          {/* Odometer Rolling Number - Padding added to prevent slanting digits from cutting off */}
          <motion.div
            onViewportEnter={() => setIsNumberTriggered(true)}
            viewport={{ once: true, amount: 0.1 }}
            className="flex font-light font-serif italic text-primary/80 justify-start"
            style={{
              fontSize: `${mobileNumSize}px`,
              lineHeight: `${mobileNumLH}px`,
              height: `${mobileNumLH}px`,
              opacity: isNumberTriggered ? 1 : 0,
              transition: "opacity 0.4s ease"
            }}
          >
            <span>0</span>
            <span className="relative overflow-hidden inline-block" style={{ height: `${mobileNumLH}px`, width: "1.3ch", paddingRight: "6px" }}>
              <motion.span
                initial={{ y: "0%" }}
                animate={{ y: isNumberTriggered ? `-${(numberValue % 10) * 10}%` : "0%" }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="flex flex-col absolute left-0 top-0 font-serif italic"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                  <span key={digit} style={{ height: `${mobileNumLH}px`, lineHeight: `${mobileNumLH}px` }}>
                    {digit}
                  </span>
                ))}
              </motion.span>
            </span>
          </motion.div>

          {/* Title Heading */}
          <h3 className="text-xl font-bold tracking-tight text-[#E1E0CC]/95 font-sans mt-4 mb-1 text-left">
            {step.title}
          </h3>

          {/* Text Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-sm font-light leading-relaxed text-gray-400"
          >
            {step.text}
          </motion.p>

          {/* Checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-2.5 border-t border-white/5 pt-4 text-left"
          >
            {step.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-left">
                <Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span className="text-xs font-light text-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={stepRef}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
      style={{
        paddingTop: 60,
        paddingBottom: isLast ? 60 : 60 + lineWidth
      }}
    >
      {/* Background Inactive Serpentine Line segment */}
      <div
        style={{
          position: "absolute",
          top: isFirst ? (showDots ? dotSize / 2 : 0) : 0,
          bottom: isLast ? (showDots ? dotSize / 2 : 0) : 0,
          left: reversed ? "50%" : 0,
          width: lineWidth,
          backgroundColor: lineColor,
          borderRadius: `${isFirst && !showDots ? lineWidth / 2 : 0}px ${isFirst && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px`
        }}
      />

      {/* Horizontal Connector segment (Inactive) */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: reversed ? "auto" : 0,
            right: reversed ? "50%" : "auto",
            width: "50%",
            height: lineWidth,
            backgroundColor: lineColor
          }}
        />
      )}

      {/* Corner Masks (Hides overlapping visual artifacts behind curves) */}
      {!isFirst && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            left: reversed ? maskLeftReversed : 0,
            top: -lineWidth,
            width: maskSize,
            height: maskSize,
            backgroundColor: cornerMaskColor
          }}
        />
      )}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            left: reversed ? maskLeftReversed : 0,
            bottom: 0,
            width: maskSize,
            height: maskSize,
            backgroundColor: cornerMaskColor
          }}
        />
      )}

      {/* Corner Curves (Inactive) */}
      {!isFirst && (
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: reversed ? curveLeftReversed : 0,
            top: -lineWidth,
            width: curveSize,
            height: curveSize,
            borderRadius: curveSize / 2,
            border: `${lineWidth}px solid transparent`,
            borderTopColor: lineColor,
            transform: reversed ? "rotate(45deg)" : "rotate(-45deg)"
          }}
        />
      )}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: reversed ? curveLeftReversed : 0,
            bottom: 0,
            width: curveSize,
            height: curveSize,
            borderRadius: curveSize / 2,
            border: `${lineWidth}px solid transparent`,
            borderTopColor: lineColor,
            transform: reversed ? "rotate(135deg)" : "rotate(225deg)"
          }}
        />
      )}

      {/* ACTIVE CONNECTIONS PROGRESS DRAWS */}

      {/* Active Top Corner Curve */}
      {!isFirst && (
        <motion.div
          style={{
            position: "absolute",
            zIndex: 2,
            left: reversed ? curveLeftReversed : 0,
            top: -lineWidth,
            width: curveSize,
            height: curveSize,
            borderRadius: curveSize / 2,
            border: `${lineWidth}px solid transparent`,
            borderTopColor: accentColor,
            transform: reversed ? "rotate(45deg)" : "rotate(-45deg)",
            opacity: opacityTop,
            willChange: "opacity"
          }}
        />
      )}

      {/* Active Bottom Corner Curve */}
      {!isLast && (
        <motion.div
          style={{
            position: "absolute",
            zIndex: 2,
            left: reversed ? curveLeftReversed : 0,
            bottom: 0,
            width: curveSize,
            height: curveSize,
            borderRadius: curveSize / 2,
            border: `${lineWidth}px solid transparent`,
            borderTopColor: accentColor,
            transform: reversed ? "rotate(135deg)" : "rotate(225deg)",
            opacity: opacityBottom,
            willChange: "opacity"
          }}
        />
      )}

      {/* Active Vertical segment */}
      <div
        style={{
          position: "absolute",
          top: isFirst ? (showDots ? dotSize / 2 : 0) : 0,
          bottom: isLast ? (showDots ? dotSize / 2 : 0) : 0,
          left: reversed ? "50%" : 0,
          width: lineWidth,
          overflow: "hidden",
          borderRadius: `${isFirst && !showDots ? lineWidth / 2 : 0}px ${isFirst && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px ${isLast && !showDots ? lineWidth / 2 : 0}px`,
          willChange: "transform"
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height,
            backgroundColor: accentColor
          }}
        />
      </div>

      {/* Active Horizontal segment */}
      {!isLast && (
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: reversed ? "auto" : 0,
            right: reversed ? "50%" : "auto",
            height: lineWidth,
            backgroundColor: accentColor,
            width,
            willChange: "transform"
          }}
        />
      )}

      {/* STEP TEXT COLUMN (DESCRIPTION AND POINTS LEFT ALIGNED ONLY) */}
      <div
        className={cn(
          "relative z-10 text-left flex flex-col justify-center h-full w-full md:pl-[80px]",
          reversed ? "md:order-2" : "md:order-1"
        )}
      >
        {/* Digit odometer rollup column - Padding added to prevent slanting digits from cutting off */}
        <div 
          className="flex font-light font-serif italic text-primary/80 justify-start"
          style={{
            fontSize: `${numFontSize}px`,
            lineHeight: `${numLH}px`,
            height: `${numLH}px`,
          }}
        >
          <span>0</span>
          <span className="relative overflow-hidden inline-block" style={{ height: `${numLH}px`, width: "1.3ch", paddingRight: "8px" }}>
            <motion.span
              initial={{ y: "0%" }}
              animate={{ y: isNumberTriggered ? `-${(numberValue % 10) * 10}%` : "0%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="flex flex-col absolute left-0 top-0 font-serif italic"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                <span key={digit} style={{ height: `${numLH}px`, lineHeight: `${numLH}px` }}>
                  {digit}
                </span>
              ))}
            </motion.span>
          </span>
        </div>

        {/* Title Heading */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#E1E0CC]/95 font-sans mt-5 mb-2 text-left">
          {step.title}
        </h3>

        {/* Text Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-[#E1E0CC]/75 font-light leading-relaxed text-sm mt-3 mb-6 max-w-md text-left"
        >
          {step.text}
        </motion.p>

        {/* Checklist */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-2.5 border-t border-white/5 pt-5 max-w-md text-left"
        >
          {step.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-left">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
              <span className="text-xs font-light text-gray-300">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* STEP VISUAL COLUMN */}
      <div
        className={cn(
          "relative z-10 w-full flex flex-col gap-4 text-left",
          reversed ? "md:order-1" : "md:order-2"
        )}
      >
        {/* Centered Wireframe (Fully Wireframe/Transparent card layout) */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full aspect-[16/10] bg-transparent border-none overflow-hidden group cursor-pointer"
        >
          {/* Custom Wireframe Visualization (Centered) */}
          <CardVisualization index={index} />
        </motion.div>
      </div>
    </motion.div>
  );
};
