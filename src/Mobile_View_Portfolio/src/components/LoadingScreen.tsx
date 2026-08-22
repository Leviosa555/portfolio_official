import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppleHelloItalianEffect } from "./AppleHelloEffect";

/**
 * Mobile-first intro loader: hand-draws "Ciao" then slides up to reveal the page.
 */
export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const { body, documentElement } = document;
    body.style.setProperty("overflow", "hidden", "important");
    documentElement.style.setProperty("overflow", "hidden", "important");
    return () => {
      body.style.removeProperty("overflow");
      documentElement.style.removeProperty("overflow");
    };
  }, [isLoading]);

  const handleDrawn = () => {
    window.setTimeout(() => {
      setIsLoading(false);
      window.setTimeout(() => onComplete?.(), 1000);
    }, 420);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden bg-background px-6 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            exit={{ opacity: 0, y: -28, transition: { duration: 0.5 } }}
            className="relative flex w-full max-w-[320px] items-center justify-center will-change-transform"
          >
            <AppleHelloItalianEffect
              speed={0.85}
              onAnimationComplete={handleDrawn}
              className="h-16 w-full text-foreground will-change-transform"
            />
          </motion.div>

          <motion.div
            animate={{ opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 2, repeat: Infinity }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute bottom-10 size-1.5 rounded-full bg-foreground/30"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
