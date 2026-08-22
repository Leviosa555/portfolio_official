import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  trigger?: "scroll" | "immediate";
};

/** Word-by-word reveal driven by GSAP + ScrollTrigger. */
export function SplitText({
  as: Tag = "h2",
  text,
  className,
  delay = 0,
  stagger = 0.06,
  trigger = "scroll",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    gsap.set(words, { yPercent: 110, opacity: 0 });

    const anim = gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger,
      delay,
      scrollTrigger:
        trigger === "scroll"
          ? { trigger: el, start: "top 85%", once: true }
          : undefined,
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [text, delay, stagger, trigger]);

  return (
    <Tag ref={ref as never} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pr-[0.25em]"
        >
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
