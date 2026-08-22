import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, Mail } from 'lucide-react';
import { WarpSpeed } from '../components/WarpSpeed';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);const TextSplitReveal: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer select-none border border-foreground/10 px-6 py-2 rounded-full overflow-hidden bg-foreground/5 hover:bg-foreground/10 transition-colors mt-2 mx-auto w-max shrink-0"
      style={{ height: '56px', width: '250px' }}
    >
      {/* Revealed word in the middle (Beige background, black text, no scale animation to prevent stutters, absolute inset-0 to match exact container width) */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 4
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center bg-primary text-black font-mono text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap z-0 font-bold [backface-visibility:hidden] [webkit-font-smoothing:antialiased] [will-change:transform]"
      >
        <span>Kachow, Hello</span>
        <motion.span
          animate={isHovered ? { rotate: [0, 15, -10, 15, 0] } : {}}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="inline-block ml-1"
        >
          👋
        </motion.span>
      </motion.div>

      {/* Top Half of "HOVER ME" */}
      <motion.div
        animate={{ y: isHovered ? -16 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center text-foreground/80 font-mono text-base sm:text-lg uppercase tracking-[0.25em] z-10 font-bold pointer-events-none select-none [backface-visibility:hidden] [webkit-font-smoothing:antialiased] [will-change:transform]"
        style={{
          clipPath: 'inset(0% 0% 50% 0%)',
          rotate: '0.001deg',
          translateZ: 0
        }}
      >
        HOVER ME
      </motion.div>

      {/* Bottom Half of "HOVER ME" */}
      <motion.div
        animate={{ y: isHovered ? 16 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center text-foreground/80 font-mono text-base sm:text-lg uppercase tracking-[0.25em] z-10 font-bold pointer-events-none select-none [backface-visibility:hidden] [webkit-font-smoothing:antialiased] [will-change:transform]"
        style={{
          clipPath: 'inset(50% 0% 0% 0%)',
          rotate: '0.001deg',
          translateZ: 0
        }}
      >
        HOVER ME
      </motion.div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is missing in your .env. Simulating local submission.");
      // Fallback local simulation
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitted(false);
          setShowForm(false);
        }, 3000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitted(false);
          setShowForm(false);
        }, 3000);
      } else {
        alert("Failed to send message: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black min-h-screen pt-20 pb-4 px-6 md:px-12 border-t border-white/5 relative z-10 overflow-hidden flex flex-col justify-between select-none">
      {/* Warpspeed Starfield Background (Matching Hero Section) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <WarpSpeed />
      </div>

      {/* Main Container expanded to edge-to-edge full width */}
      <div className="relative z-10 flex flex-col justify-between h-full flex-1 w-full gap-6">

        {/* Top Region: Interactive Text Split Reveal */}
        <TextSplitReveal />

        {/* Center Region: Large Typography Centered Horizontally & Vertically */}
        <div className="flex-grow flex flex-col justify-center items-center w-full my-auto">

          {/* Large Cinematic Headline */}
          <div className="text-center font-sans tracking-tight text-white mb-10 w-full">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase flex items-center justify-center gap-3 sm:gap-4 flex-wrap leading-[1.05]">
              {/* Inverted messaging bubble with staggered animated typing dots (Left side) */}
              <div className="inline-flex items-center justify-center text-primary shrink-0 drop-shadow-[0_0_12px_rgba(222,219,200,0.35)] scale-x-[-1]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 sm:w-16 md:w-20 lg:w-24 h-10 sm:h-16 md:h-20 lg:h-24">
                  {/* Outer bubble path */}
                  <path d="M12 2C6.477 2 2 6.03 2 11c0 2.29 1.01 4.38 2.68 5.92-.12.83-.52 2.45-1.52 3.4 0 0 1.66 0 3.32-1.12C7.79 19.72 9.8 20 12 20c5.523 0 10-4.03 10-9s-4.477-9-10-9z" />

                  {/* Staggered animated jumping dot cutouts (Asynchronous delay offset) */}
                  <motion.circle
                    cx="8"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  />
                  <motion.circle
                    cx="12"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.circle
                    cx="16"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7
                    }}
                  />
                </svg>
              </div>

              <span>NO NEED</span>

              {/* Glowing messaging bubble with staggered animated typing dots */}
              <div className="inline-flex items-center justify-center text-primary shrink-0 drop-shadow-[0_0_12px_rgba(222,219,200,0.35)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 sm:w-16 md:w-20 lg:w-24 h-10 sm:h-16 md:h-20 lg:h-24">
                  {/* Outer bubble path */}
                  <path d="M12 2C6.477 2 2 6.03 2 11c0 2.29 1.01 4.38 2.68 5.92-.12.83-.52 2.45-1.52 3.4 0 0 1.66 0 3.32-1.12C7.79 19.72 9.8 20 12 20c5.523 0 10-4.03 10-9s-4.477-9-10-9z" />

                  {/* Staggered animated jumping dot cutouts */}
                  <motion.circle
                    cx="8"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0
                    }}
                  />
                  <motion.circle
                    cx="12"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  />
                  <motion.circle
                    cx="16"
                    cy="11"
                    r="1.5"
                    fill="var(--bg-color)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                  />
                </svg>
              </div>
            </div>

            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.05] mt-1 sm:mt-2">
              TO BE SHY.
            </div>

            {/* Centered Aesthetic dot */}
            <div className="text-primary text-2xl mt-4 sm:mt-6 select-none">•</div>
          </div>

          {/* Center Trigger Button */}
          <div className="flex justify-center mb-8 shrink-0">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="bg-primary text-black font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-lg shadow-primary/10 hover:shadow-primary/25 transition-all select-none cursor-pointer"
            >
              <span>Talk to your Developer</span>
            </button>
          </div>

          {/* Floating Collapsible Contact Form Modal Overlay */}
          <AnimatePresence>
            {showForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop Blur Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowForm(false)}
                  className="absolute inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Form Dialog Card */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#101010]/95 border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl max-w-lg w-full z-10 text-left select-none"
                >
                  {/* Close button pill badge */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-6 right-6 border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono text-gray-400 hover:text-primary hover:border-primary/20 transition-all cursor-pointer"
                  >
                    CLOSE
                  </button>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                        <Send className="text-primary w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#E1E0CC] mb-2 uppercase tracking-wide">
                        Message Sent
                      </h3>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-sm font-bold text-[#E1E0CC]/80 mb-6 uppercase tracking-[0.2em] font-mono text-center">GET IN TOUCH</h3>

                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="text-[10px] text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-1.5 font-mono">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jane Doe"
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="text-[10px] text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-1.5 font-mono">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jane@example.com"
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="text-[10px] text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-1.5 font-mono">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Describe your design, system architecture, or project scope..."
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-black font-semibold text-xs uppercase tracking-widest py-3 rounded-xl flex items-center justify-center gap-2 group hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Region: Horizontal Flex Row distributing space levelly from left-end to right-end */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-white/5 pt-12 text-left w-full shrink-0 pb-6 mb-2">

          {/* Column 1: Field Related Description (aligned left bottom) */}
          <div className="flex gap-3 max-w-[280px]">
            <span className="text-primary text-sm font-semibold shrink-0">→</span>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wider uppercase font-sans">
              I spend my days in code, metrics, and cloud security architectures, but I'm always engaged to collaborate and bring your digital vision to life.
            </p>
          </div>

          {/* Column 2: Social Links (Icons, centered horizontally in wide screens) */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-gray-500 font-mono text-[14px] uppercase tracking-[0.25em] mb-4">SOCIAL</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 p-2.5 rounded-full text-[#E1E0CC] hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center bg-[#101010]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 p-2.5 rounded-full text-[#E1E0CC] hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center bg-[#101010]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mbetgeri2000@gmail.com"
                className="border border-white/10 p-2.5 rounded-full text-[#E1E0CC] hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center bg-[#101010]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Info (Email only, centered horizontally in wide screens) */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-gray-500 font-mono text-[14px] uppercase tracking-[0.25em] mb-4">CONTACTS</h4>
            <div className="text-[14px] font-mono text-gray-400 lowercase select-all">
              <a href="mailto:mbetgeri2000@gmail.com" className="hover:text-primary transition-colors block leading-relaxed">
                mbetgeri2000@gmail.com
              </a>
            </div>
          </div>

          {/* Column 4: Location details (aligned right bottom) */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-gray-500 font-mono text-[14px] uppercase tracking-[0.25em] mb-4">LOCATION</h4>
            <div className="text-[14px] font-mono text-gray-400 space-y-1 uppercase leading-relaxed text-left md:text-right select-none">
              <div>Karnataka, India</div>
              <div className="text-primary text-[12px] tracking-widest mt-1 font-sans font-normal">UTC+5:30 (IST)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
