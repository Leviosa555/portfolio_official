import React, { useRef, useState, useEffect } from 'react';

interface SeamlessVideoProps {
  src: string;
  className?: string;
  fadeDuration?: number; // in seconds
}

export const SeamlessVideo: React.FC<SeamlessVideoProps> = ({ src, className = "", fadeDuration = 1.2 }) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
  // Track which video is currently playing/active (1 or 2)
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isCrossfading, setIsCrossfading] = useState(false);

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;
    if (!video1 || !video2) return;

    // Start playing video1 initially
    video1.play().catch(e => console.log("Initial video play interrupted:", e));

    const checkInterval = setInterval(() => {
      const activeVideoEl = activeVideo === 1 ? video1 : video2;
      const nextVideoEl = activeVideo === 1 ? video2 : video1;

      if (!activeVideoEl.duration || isNaN(activeVideoEl.duration)) return;

      const timeLeft = activeVideoEl.duration - activeVideoEl.currentTime;

      // Start crossfade when active video is nearing its end
      if (timeLeft <= fadeDuration && !isCrossfading) {
        setIsCrossfading(true);
        
        // Reset and prepare the next video element
        nextVideoEl.currentTime = 0;
        nextVideoEl.play()
          .then(() => {
            // Trigger CSS transition opacity fade
            setActiveVideo(activeVideo === 1 ? 2 : 1);
            
            // Wait for transition duration to complete, then pause the previous video
            setTimeout(() => {
              activeVideoEl.pause();
              setIsCrossfading(false);
            }, fadeDuration * 1000);
          })
          .catch(err => {
            console.log("Seamless loop crossplay failed:", err);
            setIsCrossfading(false);
          });
      }
    }, 200);

    return () => clearInterval(checkInterval);
  }, [activeVideo, isCrossfading, fadeDuration]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video element 1 */}
      <video
        ref={videoRef1}
        src={src}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out select-none pointer-events-none z-0"
        style={{ 
          opacity: activeVideo === 1 ? 1 : 0,
          transitionDuration: `${fadeDuration}s`
        }}
      />
      {/* Video element 2 */}
      <video
        ref={videoRef2}
        src={src}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out select-none pointer-events-none z-0"
        style={{ 
          opacity: activeVideo === 2 ? 1 : 0,
          transitionDuration: `${fadeDuration}s`
        }}
      />
    </div>
  );
};
