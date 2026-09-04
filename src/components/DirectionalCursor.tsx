import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export interface DirectionalCursorProps {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  keepBrowserCursor?: boolean;
  keepTextCursor?: boolean;
  keepPointerCursor?: boolean;
  cursorSize?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
  restDelta?: number;
  customSvg?: string;
  useCustomSvg?: boolean;
  style?: React.CSSProperties;
}

const DefaultCursorSVG: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={44}
      viewBox="0 0 50 54"
      fill="none"
      className="select-none pointer-events-none"
    >
      <g filter="url(#filter0_d_directional_cursor)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="#000000"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="#FFFFFF"
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_directional_cursor"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_directional_cursor" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_directional_cursor" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

const getDeviceType = (): 'desktop' | 'tablet' | 'mobile' => {
  if (typeof window === 'undefined') return 'desktop';
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  if (isMobile) {
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    );
    return isTablet ? 'tablet' : 'mobile';
  }
  return 'desktop';
};

export const DirectionalCursor: React.FC<DirectionalCursorProps> = ({
  hideOnMobile = true,
  hideOnTablet = true,
  keepBrowserCursor = false,
  cursorSize = 0.85,
  damping = 45,
  stiffness = 400,
  mass = 1,
  restDelta = 0.001,
  customSvg = '',
  useCustomSvg = false,
  keepTextCursor = true,
  keepPointerCursor = false,
  style,
}) => {
  const springConfig = useMemo(
    () => ({ damping, stiffness, mass, restDelta }),
    [damping, stiffness, mass, restDelta]
  );

  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  const shouldHideCursor = useMemo(() => {
    if (deviceType === 'mobile' && hideOnMobile) return true;
    if (deviceType === 'tablet' && hideOnTablet) return true;
    return false;
  }, [deviceType, hideOnMobile, hideOnTablet]);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(typeof window !== 'undefined' ? window.innerWidth / 2 : 0, springConfig);
  const cursorY = useSpring(typeof window !== 'undefined' ? window.innerHeight / 2 : -50, springConfig);
  const translateX = useSpring('-50%', springConfig);
  const translateY = useSpring('0%', springConfig);

  const rotation = useSpring(0, { ...springConfig, damping: 60, stiffness: 300 });
  const baseScale = useSpring(1, { ...springConfig, stiffness: 500, damping: 35 });
  const combinedScale = useTransform(baseScale, (val) => val * (cursorSize || 1));

  // CSS injection to hide default browser cursor on desktop while keeping text inputs accessible
  useEffect(() => {
    if (keepBrowserCursor || shouldHideCursor) return;

    const cssId = 'smooth-cursor-css';
    let existingStyle = document.getElementById(cssId) as HTMLStyleElement | null;
    if (!existingStyle) {
      existingStyle = document.createElement('style');
      existingStyle.id = cssId;
      document.head.appendChild(existingStyle);
    }

    let css = `* { cursor: none !important; }`;
    if (keepTextCursor) {
      css += `
        input,
        textarea,
        select,
        [contenteditable="true"] {
          cursor: text !important;
        }
      `;
    }
    if (keepPointerCursor) {
      css += `
        button,
        button *,
        a,
        a *,
        [role="button"],
        [role="button"] *,
        [onclick],
        [onclick] *,
        .clickable,
        .clickable * {
          cursor: pointer !important;
        }
      `;
    }
    existingStyle.innerHTML = css;

    return () => {
      const styleEl = document.getElementById(cssId);
      if (styleEl) styleEl.remove();
    };
  }, [keepBrowserCursor, keepTextCursor, keepPointerCursor, shouldHideCursor]);

  // Main cursor tracking & directional angle calculation
  useEffect(() => {
    if (shouldHideCursor) return;

    const updateVelocity = (currentPos: { x: number; y: number }) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }
      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const smoothMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);
      const speed = Math.sqrt(
        velocity.current.x * velocity.current.x + velocity.current.y * velocity.current.y
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        // Calculate angle based on velocity direction
        const currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;

        // Smooth angle unwrapping so the arrow never flips 360 awkwardly
        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        // Directional transform offset
        const normalizedAngle = ((currentAngle % 360) + 360) % 360;
        if (normalizedAngle >= 315 || normalizedAngle < 45) {
          // Moving UP
          translateX.set('-50%');
          translateY.set('0%');
        } else if (normalizedAngle >= 45 && normalizedAngle < 135) {
          // Moving RIGHT
          translateX.set('-100%');
          translateY.set('-50%');
        } else if (normalizedAngle >= 135 && normalizedAngle < 225) {
          // Moving DOWN
          translateX.set('-50%');
          translateY.set('-100%');
        } else {
          // Moving LEFT
          translateX.set('0%');
          translateY.set('-50%');
        }

        baseScale.set(0.92);
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          baseScale.set(1);
        }, 150);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e);
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(resetTimeout);
    };
  }, [cursorX, cursorY, rotation, baseScale, translateX, translateY, shouldHideCursor, isVisible]);

  if (shouldHideCursor) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: cursorX,
        top: cursorY,
        translateX: translateX,
        translateY: translateY,
        rotate: rotation,
        scale: combinedScale,
        opacity: isVisible ? 1 : 0,
        zIndex: 99999,
        pointerEvents: 'none',
        willChange: 'transform',
        ...style,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      {useCustomSvg && customSvg ? (
        <div dangerouslySetInnerHTML={{ __html: customSvg }} />
      ) : (
        <DefaultCursorSVG />
      )}
    </motion.div>
  );
};

export default DirectionalCursor;
