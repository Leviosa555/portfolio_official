import React from 'react';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: "Our story", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Internship", href: "#internship" },
    { label: "Inquiries", href: "#contact" }
  ];

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-max">
      <div className="bg-black border border-white/10 border-t-0 rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 shadow-2xl">
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
    </nav>
  );
};
