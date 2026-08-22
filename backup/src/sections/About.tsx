import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const root = useRef<HTMLElement>(null);

  const headingSegments = [
    { text: "I am Mohammed Junaid Betgeri, ", className: "text-[#E1E0CC] font-normal" },
    { text: "a Computer Science & IT specialist. ", className: "italic font-serif text-primary" },
    { text: "I have skills in full-stack web engineering, data analysis, cybersecurity, and artificial intelligence.", className: "text-[#E1E0CC] font-normal" }
  ];

  const paragraphText = "I design and develop modern software solutions, building full-stack web applications, leveraging Python for data-driven development, and exploring cybersecurity practices. I enjoy creating scalable software that balances performance, security, and user experience.";

  const characters = paragraphText.split("");

  // Map each heading segment character to preserve its specific class
  const headingChars = headingSegments.flatMap((seg) => {
    return seg.text.split("").map((char) => ({
      char,
      className: seg.className,
    }));
  });

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const frame = el.querySelector<HTMLElement>("[data-frame]");
      const caption = el.querySelector<HTMLElement>("[data-caption]");
      const kicker = el.querySelector<HTMLElement>("[data-kicker]");
      const centerLabel = el.querySelector<HTMLElement>("[data-center-label]");
      const titleChars = el.querySelectorAll(".about-title-char");
      const bodyChars = el.querySelectorAll(".about-char");

      if (!frame) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.8}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Frame scale-up animation
      tl.fromTo(
        frame,
        { width: "45vmin", height: "60vmin", borderRadius: "2rem" },
        { width: "100vw", height: "100vh", borderRadius: "0rem", ease: "power2.inOut" },
        0,
      );

      // Fade out centered "About me" label during card scale-up
      if (centerLabel) {
        tl.to(centerLabel, { scale: 1.3, opacity: 0, ease: "power2.in" }, 0);
      }

      // Fade out top kicker
      if (kicker) tl.to(kicker, { yPercent: -140, opacity: 0, ease: "power2.in" }, 0.1);

      // Fade in text caption container
      if (caption) {
        tl.fromTo(
          caption,
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "power2.out" },
          0.45,
        );
      }

      // Title character glow-in reveal
      if (titleChars.length > 0) {
        tl.to(
          titleChars,
          { opacity: 1, stagger: 0.003, ease: "none" },
          0.5,
        );
      }

      // Bio paragraph character glow-in reveal
      if (bodyChars.length > 0) {
        tl.to(
          bodyChars,
          { opacity: 1, stagger: 0.003, ease: "none" },
          0.75,
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="About me"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />

      <div
        data-kicker
        className="absolute left-1/2 top-[12%] z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-primary select-none font-bold"
      >
        // engineering with craft, driven by curiosity
      </div>

      <div className="relative flex h-full w-full items-center justify-center">
        <div
          data-frame
          className="relative overflow-hidden bg-[#101010] border border-white/5 shadow-2xl flex items-center justify-center"
          style={{ width: "45vmin", height: "60vmin", borderRadius: "2rem" }}
        >
          {/* Decorative corner highlights */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-tl-[2rem] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-br-[2rem] pointer-events-none" />

          {/* Centered label inside the initial small card frame */}
          <div
            data-center-label
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-primary font-bold shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              About me
            </div>
          </div>

          {/* Content layer that reveals after expansion */}
          <div
            data-caption
            className="absolute inset-0 px-6 sm:px-12 py-16 sm:py-24 md:py-28 flex flex-col items-center justify-center text-center opacity-0 select-none"
          >
            {/* Small sub-label */}
            <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6">
              About me
            </span>

            {/* Cinematic Staggered Title with Scroll-linked character glow reveal */}
            <h2 className="mx-auto max-w-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-center">
              {headingChars.map((item, index) => (
                <span
                  key={`h-${index}`}
                  className={`about-title-char opacity-[0.2] ${item.className}`}
                >
                  {item.char}
                </span>
              ))}
            </h2>

            {/* Biography Paragraph with Scroll-linked character glow reveal */}
            <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
              <p
                className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-center font-light"
                style={{ wordBreak: "break-word", color: "#E1E0CC" }}
              >
                {characters.map((char, index) => (
                  <span
                    key={index}
                    className="about-char opacity-[0.2]"
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
