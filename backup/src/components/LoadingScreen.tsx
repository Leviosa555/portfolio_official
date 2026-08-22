import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleHelloItalianEffect } from './AppleHelloEffect';

interface LoadingScreenProps {
    onComplete?: () => void;
    onExitStart?: () => void;
    onDrawingComplete?: () => void;
    duration?: number;
}

export function LoadingScreen({ onComplete, onExitStart, onDrawingComplete }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            // Prevent scroll and hide scrollbar during loading
            document.body.style.setProperty('overflow', 'hidden', 'important');
            document.documentElement.style.setProperty('overflow', 'hidden', 'important');

            const style = document.createElement('style');
            style.id = 'scrollbar-loading-hide';
            style.innerHTML = `
                ::-webkit-scrollbar {
                    width: 0px !important;
                    height: 0px !important;
                    display: none !important;
                }
                ::-webkit-scrollbar-thumb {
                    background: transparent !important;
                    background-color: transparent !important;
                }
                ::-webkit-scrollbar-track {
                    background: transparent !important;
                }
                html, body, #root {
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                    overflow: hidden !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            // Restore scroll and scrollbar when loading is complete
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            const existingStyle = document.getElementById('scrollbar-loading-hide');
            if (existingStyle) {
                existingStyle.remove();
            }
        }

        return () => {
            // Fallback cleanup
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            const existingStyle = document.getElementById('scrollbar-loading-hide');
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, [isLoading]);

    const handleAnimationComplete = () => {
        // Trigger mounting of the main content sections
        onDrawingComplete?.();

        // Settle layout for 500ms while loading screen is static
        setTimeout(() => {
            setIsLoading(false);
            onExitStart?.();
            setTimeout(() => {
                onComplete?.();
            }, 1200); // Smooth overlap
        }, 500);
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.2,
                            ease: [0.7, 0, 0.3, 1]
                        }
                    }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background overflow-hidden will-change-transform"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                        }}
                        className="relative flex flex-col items-center justify-center w-full max-w-[400px] will-change-transform"
                    >
                        <AppleHelloItalianEffect
                            speed={1}
                            onAnimationComplete={handleAnimationComplete}
                            className="text-foreground h-16 sm:h-20 md:h-24 will-change-transform"
                        />
                    </motion.div>

                    {/* Subtle aesthetic dot */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="absolute bottom-12 w-1.5 h-1.5 rounded-full bg-foreground/10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
