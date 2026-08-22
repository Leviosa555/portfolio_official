import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Framer-style split-text reveal: each character sits inside a mask and slides
 * up into view with a stagger, then masks out again on exit. Phrases cycle
 * automatically and re-reveal on pointer interaction.
 */
export function SplitText({
  phrases,
  className,
  interval = 5000,
}: {
  phrases: string[];
  className?: string;
  interval?: number;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
      setCycle((c) => c + 1);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, phrases.length, reduced]);

  const text = phrases[index] ?? '';
  const words = text.split(' ');

  return (
    <div
      className={className}
      aria-label={text}
      onPointerEnter={() => setCycle((c) => c + 1)}
      onPointerDown={() => setIndex((i) => (i + 1) % phrases.length)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${index}-${cycle}`}
          className="inline-block"
          initial="hidden"
          animate="show"
          exit="out"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.022, delayChildren: 0.04 } },
            out: { transition: { staggerChildren: 0.012, staggerDirection: -1 } },
          }}
        >
          {words.map((word, w) => (
            <span key={`${word}-${w}`} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, i) => (
                <span
                  key={`${char}-${i}`}
                  aria-hidden
                  className="inline-block overflow-hidden align-bottom"
                  style={{ lineHeight: 1.25 }}
                >
                  <motion.span
                    className="inline-block will-change-transform"
                    variants={{
                      hidden: reduced
                        ? { opacity: 0 }
                        : { y: '110%', opacity: 0, skewY: 6 },
                      show: {
                        y: '0%',
                        opacity: 1,
                        skewY: 0,
                        transition: { duration: 0.62, ease: EASE },
                      },
                      out: reduced
                        ? { opacity: 0 }
                        : {
                            y: '-110%',
                            opacity: 0,
                            skewY: -4,
                            transition: { duration: 0.38, ease: EASE },
                          },
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
              {w < words.length - 1 ? <span aria-hidden>&nbsp;</span> : null}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
