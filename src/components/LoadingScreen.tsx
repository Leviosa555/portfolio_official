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
        // Prevent scroll during loading
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleAnimationComplete = () => {
        // Trigger mounting of the main content sections in the background
        onDrawingComplete?.();

        // Allow DOM to settle for 500ms before triggering exit slide
        setTimeout(() => {
            setIsLoading(false);
            onExitStart?.();
        }, 500);
    };

    const handleExitComplete = () => {
        document.body.style.overflow = '';
        onComplete?.();
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.1,
                            ease: [0.7, 0, 0.3, 1]
                        }
                    }}
                    onAnimationComplete={(definition) => {
                        if (definition === "exit" || (typeof definition === "object" && "y" in definition && definition.y === "-100%")) {
                            handleExitComplete();
                        }
                    }}
                    style={{
                        transform: "translate3d(0, 0, 0)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background overflow-hidden will-change-transform"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
                        }}
                        style={{
                            transform: "translate3d(0, 0, 0)",
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
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="absolute bottom-12 w-1.5 h-1.5 rounded-full bg-foreground/10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
