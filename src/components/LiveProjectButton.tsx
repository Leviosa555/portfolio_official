import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href, onClick }) => {
  const className = "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200";

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        Live Project
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      Live Project
    </button>
  );
};

export default LiveProjectButton;
