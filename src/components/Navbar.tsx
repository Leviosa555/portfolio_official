import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const leftItems = [
    { label: "My story", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Certificates", href: "#certificates" },
  ];

  const rightItems = [
    { label: "Projects", href: "#projects" },
    { label: "Internship", href: "#internship" },
    { label: "Inquiries", href: "#contact" }
  ];

  const [visible, setVisible] = useState(true);

  // Initialize theme from localStorage or fallback to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 50) {
            setVisible(true);
          } else if (currentScrollY > lastY + 10) {
            setVisible(false);
          } else if (currentScrollY < lastY - 10) {
            setVisible(true);
          }
          lastY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="bg-black/90 nav-glass backdrop-blur-md border border-white/10 border-t-0 rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-7 md:py-3.5 flex items-center justify-center gap-2 sm:gap-3.5 md:gap-5 lg:gap-6 xl:gap-7 shadow-2xl pointer-events-auto max-w-max">
        
        {/* Left Side Links */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          {leftItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 select-none uppercase whitespace-nowrap cursor-pointer hover:text-foreground"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ rotate: 15, scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center cursor-pointer select-none text-foreground border border-white/5 pointer-events-auto"
        >
          {theme === 'dark' ? (
            <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" strokeWidth={2.2} />
          ) : (
            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" strokeWidth={2.2} />
          )}
        </motion.button>

        {/* Right Side Links */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          {rightItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 select-none uppercase whitespace-nowrap cursor-pointer hover:text-foreground"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
};
