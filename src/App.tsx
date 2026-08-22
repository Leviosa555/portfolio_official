import { useState, useEffect, useRef } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Navbar } from './components/Navbar';
import { Expertise } from './sections/Expertise';
import { Certificates } from './sections/Certificates';
import { Projects } from './sections/Projects';
import { Internship } from './sections/Internship';
import { Activities } from './sections/Activities';
import { Contact } from './sections/Contact';
import { MobilePortfolio } from './components/mobile/MobilePortfolio';
import { useIsDesktop } from './hooks/useMediaQuery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [mountSections, setMountSections] = useState(false);
  const isDesktop = useIsDesktop(1024);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll on desktop when sections are first mounted
  useEffect(() => {
    if (!mountSections || !isDesktop) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger updates with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Lockstep Lenis frame updates directly with GSAP's ticker for ultra-smooth 120fps scrubbing
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Stop scrolling initially while the loading screen is covering the page
    if (loading) {
      lenis.stop();
    }

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [mountSections, isDesktop]);

  // Handle loading state completion
  useEffect(() => {
    if (!lenisRef.current) return;

    if (loading) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
      // Recalculate ScrollTrigger offsets once the preloader is fully offscreen
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [loading]);

  return (
    <>
      <LoadingScreen
        onDrawingComplete={() => setMountSections(true)}
        onExitStart={() => setIsExiting(true)}
        onComplete={() => setLoading(false)}
      />

      {mountSections && (
        <>
          {/* Strictly for mobile and tablet (screen width < 1024px) */}
          {!isDesktop ? (
            <MobilePortfolio />
          ) : (
            /* Desktop Layout (screen width >= 1024px) */
            <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-400">
              {!loading && <Navbar />}
              {/* Cinematic desktop layout */}
              <Hero isExiting={isExiting} isLoaded={!loading} />
              <About />
              <Expertise />
              <Certificates />
              <Projects />
              <Internship />
              <Activities />
              <Contact />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;

