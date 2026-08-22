import React, { useEffect, useRef } from "react";

interface WarpSpeedProps {
  starColor?: string;
  starCount?: number;
  speed?: number;
  opacity?: number;
}

export const WarpSpeed: React.FC<WarpSpeedProps> = ({
  starColor = "#E1E0CC", // Match beige theme
  starCount = 75,        // Fewer strikes for a minimal, clean look (adjusted to 75 by user)
  speed = 0.55,          // Slower velocity for premium, cinematic feel
  opacity = 0.75,        // Low visibility/opacity to sit elegantly in the background (adjusted to 0.75 by user)
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isIntersecting = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Set up star positions
    const stars = Array.from({ length: starCount }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
    }));

    const updateDimensions = () => {
      if (!canvas) return;
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (width > 0 && height > 0) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
    };

    updateDimensions();

    const renderFrame = () => {
      if (width === 0 || height === 0) return;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      stars.forEach((star) => {
        // Move star forward
        star.z -= 0.005 * speed;
        if (star.z <= 0) {
          star.z = 1;
          star.x = (Math.random() - 0.5) * 2;
          star.y = (Math.random() - 0.5) * 2;
        }

        const k = 1 / star.z;
        const px = star.x * k * cx + cx;
        const py = star.y * k * cy + cy;

        const prevK = 1 / (star.z + 0.02 * speed);
        const ppx = star.x * prevK * cx + cx;
        const ppy = star.y * prevK * cy + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = (1 - star.z) * 0.8;
          ctx.strokeStyle = starColor;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = Math.max(0.7, (1 - star.z) * 1.5);
          ctx.beginPath();
          ctx.moveTo(ppx, ppy);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      });

      ctx.restore();
    };

    const handleResize = () => {
      updateDimensions();
      renderFrame();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    const draw = () => {
      if (!isIntersecting) return;
      renderFrame();
      animationFrameId = requestAnimationFrame(draw);
    };

    // Optimize execution: pause animation loops when not visible inside viewport
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasIntersecting = isIntersecting;
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !wasIntersecting) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(draw);
        } else if (!isIntersecting) {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(canvas);

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [starColor, starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        backgroundColor: "transparent",
        pointerEvents: "none",
        opacity: opacity,
      }}
    />
  );
};
