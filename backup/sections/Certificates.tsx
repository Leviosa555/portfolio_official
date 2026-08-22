import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';

interface Certificate {
  tag: string;
  num: string;
  title: string;
  issuer: string;
  date: string;
  code: string;
  link: string;
}

export const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates: Certificate[] = [
    {
      tag: "Cloud • Architecture",
      num: "01",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Oct 2025",
      code: "SYS ID: #AWS-01",
      link: "#"
    },
    {
      tag: "Cyber Security",
      num: "02",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "May 2024",
      code: "SYS ID: #CEH-02",
      link: "#"
    },
    {
      tag: "Cloud • AI",
      num: "03",
      title: "AWS Certified AI Practitioner",
      issuer: "AWS Academy",
      date: "Nov 2025",
      code: "SYS ID: #AWS-03",
      link: "#"
    },
    {
      tag: "Data Analytics",
      num: "04",
      title: "Power BI Data Analyst Associate",
      issuer: "Microsoft (NASSCOM)",
      date: "Dec 2024",
      code: "SYS ID: #MS-04",
      link: "#"
    },
    {
      tag: "JS Core",
      num: "24",
      title: "JavaScript Essentials 2",
      issuer: "Cisco NetAcad",
      date: "Jun 2023",
      code: "SYS ID: #CISCO-24",
      link: "#"
    },
    {
      tag: "Full Stack",
      num: "05",
      title: "Meta Full-Stack Developer Certificate",
      issuer: "Meta / Coursera",
      date: "Jun 2022",
      code: "SYS ID: #META-05",
      link: "#"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 330; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certificates" className="bg-black py-24 px-4 md:px-8 border-t border-white/5 relative z-10 select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Row */}
        <div className="flex justify-between items-end mb-12">
          <div className="text-left">
            <span className="bg-[#101010] border border-white/5 px-3.5 py-1.5 rounded-full text-primary text-[10px] sm:text-xs tracking-[0.1em] uppercase font-bold block mb-4 select-none w-max">
              System Badges
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
              <WordsPullUp text="Professional Credentials" />
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all bg-[#101010] text-[#E1E0CC] hover:text-primary cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all bg-[#101010] text-[#E1E0CC] hover:text-primary cursor-pointer active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-1 scroll-smooth w-full snap-x snap-mandatory"
        >
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="w-[290px] h-[210px] sm:w-[310px] sm:h-[220px] shrink-0 group perspective-1000 snap-start"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg text-left">
                  {/* Metal Rivet Detail */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  </div>

                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] tracking-wider uppercase text-primary font-bold font-mono">
                      {cert.tag}
                    </span>
                    <span className="text-sm text-gray-500 font-serif italic select-none">
                      {cert.num}
                    </span>
                  </div>

                  {/* Body Title */}
                  <div className="my-auto pr-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#E1E0CC] leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Bottom Row metadata */}
                  <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono">Issued Node</span>
                      <span className="text-xs text-gray-400 font-bold leading-tight block">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{cert.date}</span>
                  </div>
                </div>

                {/* Back Side (Flipped) */}
                <div className="absolute inset-0 bg-black border border-primary/35 rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(222,219,200,0.08)] text-left">
                  {/* Security Info */}
                  <div className="flex justify-between items-start">
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                      <ShieldCheck className="text-primary w-4 h-4" />
                    </div>
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider select-none">Secured Node</span>
                  </div>

                  {/* PDF Verification Link */}
                  <div className="my-auto">
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block mb-1">Verification Object</span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] leading-snug mb-3">
                      {cert.title}
                    </h4>
                    <a 
                      href={cert.link}
                      className="bg-primary text-black font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 transition-all select-none cursor-pointer"
                    >
                      View PDF Certificate <ExternalLink className="w-3 h-3 text-black" />
                    </a>
                  </div>

                  {/* System Signatures */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <span className="text-[9px] text-gray-500 font-mono">{cert.code}</span>
                    <span className="text-[9px] text-primary font-bold tracking-widest uppercase">Verified</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Caption Caption */}
        <p className="text-gray-500 text-xs sm:text-sm mt-8 select-none tracking-wide text-center">
          Hover a card to flip and verify • Total of {certificates.length} certificates running.
        </p>

      </div>
    </section>
  );
};
