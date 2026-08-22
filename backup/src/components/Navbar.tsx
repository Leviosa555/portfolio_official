import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: "My story", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Internship", href: "#internship" },
    { label: "Inquiries", href: "#contact" }
  ];

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If close to the top, keep the navigation bar fully visible
      if (currentScrollY <= 50) {
        setVisible(true);
      } else {
        // If scrolling down, hide navbar. If scrolling up, show navbar.
        if (currentScrollY > lastScrollY) {
          setVisible(false); // Fade up/out
        } else {
          setVisible(true); // Fade down/in
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: visible ? 0 : -100, 
        opacity: visible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
    >
      <div className="bg-black/90 backdrop-blur-md border border-white/10 border-t-0 rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 shadow-2xl pointer-events-auto max-w-max">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 select-none uppercase whitespace-nowrap cursor-pointer"
            style={{ color: 'rgba(225, 224, 204, 0.8)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E1E0CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)';
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
