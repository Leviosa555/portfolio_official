import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';

// Custom inline SVG icons because modern Lucide React does not export brand logos
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
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate cinematic submission trigger
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:hello@prisma.studio" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" }
  ];

  return (
    <section id="contact" className="bg-black py-20 px-4 md:px-8 border-t border-white/5 relative z-10">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[250px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4 select-none">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
            <WordsPullUp text="Let's build together" />
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mt-4 leading-relaxed font-light">
            Have a project in mind or interested in collaboration? Drop a line and let's unlock creative potential.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#101010] border border-white/5 rounded-[2rem] p-6 sm:p-10 md:p-12 max-w-2xl mx-auto shadow-2xl">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                <Send className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E1E0CC] mb-2">
                Message Sent Successfully
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto">
                Thank you for reaching out. We will get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="text-left">
                <label htmlFor="name" className="text-xs text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-2 font-mono">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="text-left">
                <label htmlFor="email" className="text-xs text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-2 font-mono">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jane@example.com"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="text-left">
                <label htmlFor="message" className="text-xs text-[#E1E0CC]/80 font-medium uppercase tracking-wider block mb-2 font-mono">
                  Message
                </label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your visual concept or project requirements..."
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button 
                type="submit"
                className="w-full bg-primary text-black font-semibold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 group hover:opacity-90 transition-all select-none cursor-pointer"
              >
                Send Message
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>

        {/* Footer social links */}
        <div className="mt-16 flex items-center justify-center gap-6 sm:gap-10 border-t border-white/5 pt-8">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors select-none group"
            >
              <span className="p-2 bg-[#101010] border border-white/5 rounded-xl group-hover:border-primary/20 transition-all">
                {social.icon}
              </span>
              <span className="font-semibold uppercase tracking-wider hidden sm:inline">{social.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
