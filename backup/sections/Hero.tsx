import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { Navbar } from '../components/Navbar';
import { SeamlessVideo } from '../components/SeamlessVideo';

export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-screen relative p-4 md:p-6 bg-black overflow-hidden flex flex-col">
      {/* Outer container creating an inset frame */}
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-between bg-[#050505]">
        
        {/* Navigation pill */}
        <Navbar />

        {/* Background Video */}
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
          fadeDuration={1.2}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-20" />

        {/* Bottom Hero Content Grid */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 z-30 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            
            {/* Left 8 columns: Giant Heading */}
            <div className="lg:col-span-8 flex items-end">
              <WordsPullUp 
                text="Junaid" 
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                showAsterisk={true}
              />
            </div>

            {/* Right 4 columns: Text + Button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 xl:pl-10 pb-2 md:pb-4 max-w-md lg:max-w-none">
              
              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base mb-6 text-left"
                style={{ lineHeight: '1.2', color: 'rgba(225, 224, 204, 0.7)' }}
              >
                Mohammed Junaid is a Computer Science & IT engineer specializing in full-stack development, data analytics, and secure architectures. Bound by high performance and analytical problem-solving.
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href="#about"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary rounded-full flex items-center justify-between pl-5 pr-1.5 py-1.5 w-max gap-2 group cursor-pointer hover:gap-3 transition-all duration-300"
              >
                <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-wider select-none">
                  Explore studio
                </span>
                <div className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <ArrowRight className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
