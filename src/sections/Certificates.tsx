import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { motion, AnimatePresence } from 'framer-motion';

const powerBiPdf = new URL('../assets/certificates/PowerBi_Course.pdf', import.meta.url).href;
const ethicalHackingPdf = new URL('../assets/certificates/Ethical_Hacking.pdf', import.meta.url).href;
const fullStackPdf = new URL('../assets/certificates/Full_Stack.pdf', import.meta.url).href;
const pythonTutedudePdf = new URL('../assets/certificates/Python_tutedude.pdf', import.meta.url).href;
const oracleCloudPdf = new URL('../assets/certificates/Oracle_Cloud Database Services.pdf', import.meta.url).href;
const oracleAutonomousPdf = new URL('../assets/certificates/Oracle_Autonomous Database Cloud.pdf', import.meta.url).href;


interface Certificate {
  tag: string;
  num: string;
  title: string;
  issuer: string;
  date: string;
  code: string;
  link: string;
}

export const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const set1Ref = useRef<HTMLDivElement>(null);

  // Desktop continuous scrolling states
  const isPausedRef = useRef(false);
  const isPageScrollingRef = useRef(false);

  // Mobile navigation states
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileFlipped, setMobileFlipped] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const certificates: Certificate[] = [
    {
      tag: "Data Analytics",
      num: "01",
      title: "Power BI",
      issuer: "Microsoft Elevate",
      date: "Dec 2026",
      code: "SYS ID: #AWS-01",
      link: powerBiPdf
    },
    {
      tag: "Cyber Security",
      num: "02",
      title: "Ethical Hacking",
      issuer: "Udemy",
      date: "Mar 2023",
      code: "SYS ID: #CEH-02",
      link: ethicalHackingPdf
    },
    {
      tag: "Full Stack",
      num: "03",
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "May 2023",
      code: "SYS ID: #AWS-03",
      link: fullStackPdf
    },
    {
      tag: "Programming",
      num: "04",
      title: "Python Programming",
      issuer: "Tutedude",
      date: "Dec 2026",
      code: "SYS ID: #MS-04",
      link: pythonTutedudePdf
    },
    {
      tag: "Database",
      num: "24",
      title: "Cloud Database Service",
      issuer: "Oracle",
      date: "Jun 2023",
      code: "SYS ID: #CISCO-24",
      link: oracleCloudPdf
    },
    {
      tag: "Database",
      num: "05",
      title: "Autonomous Database Cloud",
      issuer: "Oracle",
      date: "Jun 2022",
      code: "SYS ID: #META-05",
      link: oracleAutonomousPdf
    }
  ];

  // Desktop Scroll Loop Effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.55;

    const loop = () => {
      if (scrollContainer) {
        const shouldPause = isPausedRef.current && !isPageScrollingRef.current;
        if (!shouldPause) {
          scrollContainer.scrollLeft += scrollSpeed;

          const offsetWidth = set1Ref.current?.offsetWidth || (certificates.length * 334);

          if (scrollContainer.scrollLeft >= offsetWidth) {
            scrollContainer.scrollLeft -= offsetWidth;
          } else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft += offsetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [certificates.length]);

  // Track page scroll to ignore hover stutters
  useEffect(() => {
    let timeoutId: number;
    const handlePageScroll = () => {
      isPageScrollingRef.current = true;
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        isPageScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Mobile arrow actions
  const prevMobileCard = () => {
    setSlideDirection('left');
    setMobileFlipped(false);
    setMobileIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const nextMobileCard = () => {
    setSlideDirection('right');
    setMobileFlipped(false);
    setMobileIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <section id="certificates" className="bg-black py-24 px-4 md:px-8 border-t border-white/5 relative z-10 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <div className="flex justify-between items-end mb-12">
          <div className="text-left w-full lg:w-auto text-center lg:text-left">
            <span className="bg-[#101010] border border-white/5 px-3.5 py-1.5 rounded-full text-primary text-[10px] sm:text-xs tracking-[0.1em] uppercase font-bold block mb-4 select-none w-max mx-auto lg:mx-0">
              System Badges
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
              <WordsPullUp text="Professional Credentials" />
            </h2>
          </div>
        </div>

        {/* 1. DESKTOP VIEW LAYOUT (Continuous auto-scrolling ribbon) */}
        <div className="hidden lg:block relative w-full overflow-hidden">

          {/* Edge Dissolve Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-28 edge-dissolve-left pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-28 edge-dissolve-right pointer-events-none z-20" />

          {/* Horizontal Auto-Scroller */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-6 px-16 w-full select-none"
          >
            {/* Set 1 */}
            <div ref={set1Ref} className="flex gap-6 pr-6 shrink-0">
              {certificates.map((cert, index) => (
                <div
                  key={`desk1-${index}`}
                  onMouseEnter={() => { isPausedRef.current = true; }}
                  onMouseLeave={() => { isPausedRef.current = false; }}
                  className="w-[310px] h-[195px] shrink-0 group perspective-1000"
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">

                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg text-left">
                      {/* Hole & Hanging Wire Bridge */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      </div>
                      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[1px] h-[10px] bg-white/10" />

                      <div className="flex justify-center items-start pt-4 mb-4">
                        <span className="text-[10px] tracking-wider uppercase text-primary font-bold font-mono text-center">
                          {cert.tag}
                        </span>
                      </div>

                      <div className="my-auto pr-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#E1E0CC] leading-snug">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono">Issued Node</span>
                          <span className="text-xs text-gray-400 font-bold leading-tight block">{cert.issuer}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{cert.date}</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-black border border-primary/35 rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(222,219,200,0.08)] text-left">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                          <ShieldCheck className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider select-none">Secured Node</span>
                      </div>

                      <div className="my-auto">
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block mb-1">Verification Object</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] leading-snug mb-3">
                          {cert.title}
                        </h4>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-black font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 transition-all select-none cursor-pointer"
                        >
                          View PDF Certificate <ExternalLink className="w-3 h-3 text-black" />
                        </a>
                      </div>

                      <div className="flex justify-between items-center border-t border-white/5 pt-3">
                        <span className="text-[9px] text-gray-500 font-mono">{cert.code}</span>
                        <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 2 */}
            <div className="flex gap-6 pr-6 shrink-0">
              {certificates.map((cert, index) => (
                <div
                  key={`desk2-${index}`}
                  onMouseEnter={() => { isPausedRef.current = true; }}
                  onMouseLeave={() => { isPausedRef.current = false; }}
                  className="w-[310px] h-[195px] shrink-0 group perspective-1000"
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">

                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg text-left">
                      {/* Hole & Hanging Wire Bridge */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      </div>
                      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[1px] h-[10px] bg-white/10" />

                      <div className="flex justify-center items-start pt-4 mb-4">
                        <span className="text-[10px] tracking-wider uppercase text-primary font-bold font-mono text-center">
                          {cert.tag}
                        </span>
                      </div>

                      <div className="my-auto pr-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#E1E0CC] leading-snug">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono">Issued Node</span>
                          <span className="text-xs text-gray-400 font-bold leading-tight block">{cert.issuer}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{cert.date}</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-black border border-primary/35 rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(222,219,200,0.08)] text-left">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                          <ShieldCheck className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider select-none">Secured Node</span>
                      </div>

                      <div className="my-auto">
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block mb-1">Verification Object</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] leading-snug mb-3">
                          {cert.title}
                        </h4>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-black font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 transition-all select-none cursor-pointer"
                        >
                          View PDF Certificate <ExternalLink className="w-3 h-3 text-black" />
                        </a>
                      </div>

                      <div className="flex justify-between items-center border-t border-white/5 pt-3">
                        <span className="text-[9px] text-gray-500 font-mono">{cert.code}</span>
                        <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 3 */}
            <div className="flex gap-6 pr-6 shrink-0">
              {certificates.map((cert, index) => (
                <div
                  key={`desk3-${index}`}
                  onMouseEnter={() => { isPausedRef.current = true; }}
                  onMouseLeave={() => { isPausedRef.current = false; }}
                  className="w-[310px] h-[195px] shrink-0 group perspective-1000"
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">

                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg text-left">
                      {/* Hole & Hanging Wire Bridge */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      </div>
                      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[1px] h-[10px] bg-white/10" />

                      <div className="flex justify-center items-start pt-4 mb-4">
                        <span className="text-[10px] tracking-wider uppercase text-primary font-bold font-mono text-center">
                          {cert.tag}
                        </span>
                      </div>

                      <div className="my-auto pr-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#E1E0CC] leading-snug">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono">Issued Node</span>
                          <span className="text-xs text-gray-400 font-bold leading-tight block">{cert.issuer}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{cert.date}</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-black border border-primary/35 rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(222,219,200,0.08)] text-left">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                          <ShieldCheck className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider select-none">Secured Node</span>
                      </div>

                      <div className="my-auto">
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block mb-1">Verification Object</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] leading-snug mb-3">
                          {cert.title}
                        </h4>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-black font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 transition-all select-none cursor-pointer"
                        >
                          View PDF Certificate <ExternalLink className="w-3 h-3 text-black" />
                        </a>
                      </div>

                      <div className="flex justify-between items-center border-t border-white/5 pt-3">
                        <span className="text-[9px] text-gray-500 font-mono">{cert.code}</span>
                        <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Desktop Caption */}
          <p className="text-gray-500 text-xs sm:text-sm mt-8 select-none tracking-wide text-center">
            • Hover a card to flip and verify •
          </p>
        </div>


        {/* 2. MOBILE & TABLET VIEW LAYOUT (Centered card with flanking arrow buttons) */}
        <div className="block lg:hidden w-full relative">

          <div className="flex items-center justify-center gap-4 sm:gap-8 py-6">

            {/* Left Nav Arrow Button */}
            <button
              onClick={prevMobileCard}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all bg-[#101010] text-[#E1E0CC] hover:text-primary cursor-pointer active:scale-90 select-none z-20 shrink-0"
              aria-label="Previous Certificate"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Active Single Card Wrapper */}
            <div className="w-[290px] h-[185px] sm:w-[310px] sm:h-[195px] relative perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileIndex}
                  initial={{ opacity: 0, x: slideDirection === 'right' ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection === 'right' ? -30 : 30 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <div
                    onClick={(e) => {
                      // Block flip if the user clicked the verification anchor tag
                      if ((e.target as HTMLElement).closest('a')) return;
                      setMobileFlipped(!mobileFlipped);
                    }}
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${mobileFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                  >

                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg text-left select-none">
                      {/* Hole & Hanging Wire Bridge */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      </div>
                      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[1px] h-[10px] bg-white/10" />

                      <div className="flex justify-center items-start pt-4 mb-4">
                        <span className="text-[10px] tracking-wider uppercase text-primary font-bold font-mono text-center">
                          {certificates[mobileIndex].tag}
                        </span>
                      </div>

                      <div className="my-auto pr-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#E1E0CC] leading-snug">
                          {certificates[mobileIndex].title}
                        </h3>
                      </div>

                      <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono">Issued Node</span>
                          <span className="text-xs text-gray-400 font-bold leading-tight block">{certificates[mobileIndex].issuer}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{certificates[mobileIndex].date}</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-black border border-primary/35 rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(222,219,200,0.08)] text-left select-none">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                          <ShieldCheck className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider select-none">Secured Node</span>
                      </div>

                      <div className="my-auto">
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block mb-1">Verification Object</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] leading-snug mb-3">
                          {certificates[mobileIndex].title}
                        </h4>
                        <a
                          href={certificates[mobileIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-black font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 transition-all select-none cursor-pointer"
                        >
                          View PDF Certificate <ExternalLink className="w-3 h-3 text-black" />
                        </a>
                      </div>

                      <div className="flex justify-between items-center border-t border-white/5 pt-3">
                        <span className="text-[9px] text-gray-500 font-mono">{certificates[mobileIndex].code}</span>
                        <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Verified</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Nav Arrow Button */}
            <button
              onClick={nextMobileCard}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all bg-[#101010] text-[#E1E0CC] hover:text-primary cursor-pointer active:scale-90 select-none z-20 shrink-0"
              aria-label="Next Certificate"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

          </div>

          {/* Mobile Caption */}
          <p className="text-gray-500 text-xs sm:text-sm mt-8 select-none tracking-wide text-center">
            • Tap the card to flip and verify •
          </p>
        </div>

      </div>
    </section>
  );
};
