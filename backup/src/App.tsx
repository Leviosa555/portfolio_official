import { useState, useEffect } from 'react';
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [mountSections, setMountSections] = useState(false);
  const [mountHeavySections, setMountHeavySections] = useState(false);

  useEffect(() => {
    if (loading) return;

    // Stagger loading of heavy components by 300ms to allow preloader exit to complete at 60fps
    const heavyTimer = setTimeout(() => {
      setMountHeavySections(true);
    }, 300);

    return () => clearTimeout(heavyTimer);
  }, [loading]);

  useEffect(() => {
    if (!mountHeavySections) return;

    // Initialize Lenis smooth scroll after DOM elements have mounted
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Sync ScrollTrigger updates with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Coordinate GSAP ticker raf with Lenis
    const rafHandler = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafHandler);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a brief delay to ensure DOM heights have settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
    };
  }, [mountHeavySections]);

  return (
    <>
      <LoadingScreen
        onDrawingComplete={() => setMountSections(true)}
        onExitStart={() => setIsExiting(true)}
        onComplete={() => setLoading(false)}
      />

      {mountSections && (
        <div className="relative min-h-screen bg-black text-[#E1E0CC] overflow-x-hidden">
          {!loading && <Navbar />}
          {/* Cinematic layout */}
          <Hero isExiting={isExiting} isLoaded={!loading} />
          {!loading && (
            <>
              {mountHeavySections && (
                <>
                  <About />
                  <Expertise />
                  <Certificates />
                  <Projects />
                  <Internship />
                  <Activities />
                  <Contact />
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
export { };
