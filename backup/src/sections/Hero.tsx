import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Zap, ExternalLink, MessageSquare } from "lucide-react";
import { personal } from "../lib/portfolio-data";
import gsap from "gsap";
import { Spotlight } from "../components/Spotlight";
import { WarpSpeed } from "../components/WarpSpeed";

export const Hero: React.FC<{ isExiting?: boolean; isLoaded?: boolean }> = ({
  isExiting = false,
  isLoaded = false,
}) => {
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    text: string;
    x: number;
    y: number;
    icon: "zap" | "bot" | null;
  }>({
    show: false,
    text: "",
    x: 0,
    y: 0,
    icon: null,
  });

  const zapRef = useRef(null);
  const zapSmallRef = useRef(null);

  const leftWords = ["SOFT", "DATA"];
  const rightWords = ["WARE", "BASE"];
  const [swapperIndex, setSwapperIndex] = useState(0);

  const githubUrl = personal.socialLinks?.find((s) => s.platform === "GitHub")?.url || "#";

  useEffect(() => {
    const swapperTimer = setInterval(() => {
      setSwapperIndex((prev) => (prev + 1) % leftWords.length);
    }, 3000); // Sync swap loop at 3s interval

    return () => clearInterval(swapperTimer);
  }, []);

  const renderLeftWord = (word: string) => {
    if (word === "SOFT") {
      return (
        <>
          <span>SOF</span>
          <span style={{ marginLeft: "0.08em" }}>T</span>
        </>
      );
    }
    return word;
  };

  useEffect(() => {
    if (!isExiting) return;

    const ctx = gsap.context(() => {
      // Zap pulsing - Energetic heartbeat effect
      gsap.to([zapRef.current, zapSmallRef.current], {
        scale: 1.25,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        force3D: true,
      });
    });

    return () => ctx.revert();
  }, [isExiting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-black text-[#E1E0CC] overflow-hidden selection:bg-primary/20"
    >
      {/* Film Grain Overlay */}
      <div className="film-grain" />

      {/* Warpspeed Starfield Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isLoaded && <WarpSpeed />}
      </div>

      {/* Spotlight Effect - Dramatic lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Spotlight />
      </div>

      <main className="relative flex-1 flex flex-col justify-center pt-28 pb-20 z-10 max-w-[105rem] w-full mx-auto">
        <div className="flex relative gap-4 px-6 md:items-center w-full flex-col justify-center">
          {/* Follow-Cursor Tooltip */}
          <AnimatePresence>
            {tooltip.show && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed pointer-events-none z-[100] flex items-center gap-2 bg-zinc-900 text-white font-bold px-4 py-2.5 rounded-full shadow-2xl border border-white/5"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                  x: "-50%",
                  y: "-150%", // offset slightly above the cursor
                }}
              >
                {tooltip.icon === "zap" && <ExternalLink className="w-4 h-4 text-sky-400" />}
                {tooltip.icon === "bot" && <MessageSquare className="w-4 h-4 text-yellow-500" />}
                <span className="text-sm font-sans tracking-wide">{tooltip.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Line 1: CYBER & AI */}
          <div className="md:flex gap-8 items-center relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs text-primary/70 text-start md:text-right leading-relaxed max-w-[200px] md:max-w-[220px] font-medium uppercase tracking-[0.2em] font-sans"
            >
              ENGINEERING HIGH-PERFORMANCE WEB SYSTEMS, ROBUST DATA PIPELINES, AND SECURE CYBER ARCHITECTURES.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,11vw,13rem)] font-black leading-[0.85] tracking-tighter text-shiny will-change-transform px-4 select-none"
            >
              <span className="relative inline-block pb-[0.05em]">
                <span className="inline-flex">
                  <span>CY</span>
                  <span style={{ marginLeft: "0.06em" }}>BER</span>
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isExiting ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 2.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "right" }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] md:h-[4px] bg-[#E1E0CC] rounded-full"
                />
              </span>
              <span> & AI</span>
            </motion.h1>
          </div>

          {/* Line 2: SOFTWARE / DATABASE (Kinetic Swapping) */}
          <div className="md:flex gap-8 items-center relative" style={{ perspective: 1200 }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter will-change-transform px-4 select-none"
            >
              {/* Left Kinetic Word - Fixed Width */}
              <span className="relative inline-flex justify-end" style={{ transformStyle: "preserve-3d", width: "3.15em" }}>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`left-${swapperIndex}`}
                    variants={{
                      initial: { opacity: 0, rotateX: -90, y: 40, z: -50 },
                      animate: { opacity: 1, rotateX: 0, y: 0, z: 0 },
                      exit: { opacity: 0, rotateX: 90, y: -40, z: -50 }
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.8 }}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      textAlign: "right",
                      transformOrigin: "center right",
                      whiteSpace: "nowrap",
                      paddingRight: "0.22em",
                      paddingLeft: "0.12em",
                    }}
                    className="text-shiny font-black tracking-tighter"
                  >
                    {renderLeftWord(leftWords[swapperIndex])}
                  </motion.span>
                </AnimatePresence>
                <span className="opacity-0 pointer-events-none select-none" style={{ whiteSpace: "nowrap" }}>
                  SOFT
                </span>
              </span>

              {/* Zap Icon Link - Positioned closer */}
              <div
                ref={zapRef}
                className="hidden lg:block mx-[0.09em] relative cursor-pointer group"
                onClick={() => window.open(githubUrl, "_blank")}
                onMouseEnter={(e) =>
                  setTooltip({
                    show: true,
                    text: "View Projects",
                    icon: "zap",
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
                onMouseMove={(e) => setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))}
                onMouseLeave={() => setTooltip((prev) => ({ ...prev, show: false }))}
              >
                <Zap
                  className="w-[0.8em] h-[0.8em] text-primary transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <div
                ref={zapSmallRef}
                className="block lg:hidden mx-[0.06em] relative cursor-pointer group"
                onClick={() => window.open(githubUrl, "_blank")}
                onMouseEnter={(e) =>
                  setTooltip({
                    show: true,
                    text: "View Projects",
                    icon: "zap",
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
                onMouseMove={(e) => setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))}
                onMouseLeave={() => setTooltip((prev) => ({ ...prev, show: false }))}
              >
                <Zap
                  className="w-[0.8em] h-[0.8em] text-primary transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>

              {/* Right Kinetic Word - Fixed Width */}
              <span className="relative inline-flex justify-start" style={{ transformStyle: "preserve-3d", width: "3.15em" }}>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`right-${swapperIndex}`}
                    variants={{
                      initial: { opacity: 0, rotateX: 90, y: -40, z: -50 }, // Inverted for downward roll
                      animate: { opacity: 1, rotateX: 0, y: 0, z: 0 },
                      exit: { opacity: 0, rotateX: -90, y: 40, z: -50 }    // Inverted for downward roll
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.8 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      textAlign: "left",
                      transformOrigin: "center left",
                      whiteSpace: "nowrap",
                      paddingRight: "0.22em",
                      paddingLeft: "0.12em",
                    }}
                    className="text-shiny font-black tracking-tighter"
                  >
                    {rightWords[swapperIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="opacity-0 pointer-events-none select-none" style={{ whiteSpace: "nowrap" }}>
                  WARE
                </span>
              </span>
            </motion.h1>
          </div>

          {/* Line 3: SYSTEMS */}
          <div className="md:flex gap-8 items-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter text-shiny will-change-transform px-4 select-none"
            >
              <span className="relative inline-block pb-[0.05em]">
                SYSTEMS
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isExiting ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 2.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] md:h-[4px] bg-[#E1E0CC] rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-xs text-primary/70 pt-4 md:pt-8 leading-relaxed max-w-[250px] md:max-w-[200px] font-medium uppercase tracking-widest font-sans"
            >
              SPECIALIZING IN INTUITIVE FRONT-END CRAFT, API OPTIMIZATIONS, AND VULNERABILITY ASSESSMENTS.
            </motion.p>
          </div>
        </div>

        {/* Separator Section */}
        <div className="mx-auto max-w-[105rem] w-full px-8 md:px-20 mt-8 md:mt-16">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-[#E1E0CC]/10 hidden md:block" />
            <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.3em] text-primary/70 uppercase font-sans">
              DESIGN & CODE — 2026
            </div>
            <a href="#about" className="group flex items-center">
              <motion.div className="relative flex items-center bg-[#E1E0CC] h-12 w-12 group-hover:w-44 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-black pl-6 pr-12 font-sans">
                  Explore Studio
                </span>
                <div className="absolute right-0 flex items-center justify-center size-12 text-black group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Hero;
