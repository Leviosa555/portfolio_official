import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 4,
  padding = 50,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState('none');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const isWithinActiveZone = 
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (isWithinActiveZone) {
        const targetX = distanceX / strength;
        const targetY = distanceY / strength;
        setTransition('transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'); // ease-out behavior
        setTransform(`translate3d(${targetX}px, ${targetY}px, 0px)`);
      } else {
        setTransition('transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95)'); // ease-in-out behavior
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    const handleMouseLeave = () => {
      setTransition('transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95)'); // ease-in-out behavior
      setTransform('translate3d(0px, 0px, 0px)');
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, padding]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
};
