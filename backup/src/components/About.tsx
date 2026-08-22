import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText";
import { SceneBackdrop } from "./SceneBackdrop";
import { education, personal, stats } from "../lib/portfolio-data";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const v = useCountUp(value, active);
  return (
    <div className="glass rounded-2xl p-5">
      <div className="font-display text-4xl font-semibold text-gradient">
        {v}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-10 bg-white/15" />
      <span>{label}</span>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative w-full overflow-hidden py-32">
      <SceneBackdrop image="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1800&q=80" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionEyebrow index="01" label="About" />
        <SplitText
          as="h2"
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          text="Engineering with craft, driven by curiosity."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-strong relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] glow-accent">
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center text-muted-foreground/40">
                <span className="text-xs uppercase tracking-[0.35em]">Portrait Placeholder</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Profile
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">{personal.name}</div>
                  <div className="text-xs text-muted-foreground">{personal.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {personal.summary}
            </motion.p>

            <div ref={ref} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} active={inView} />
              ))}
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Education
              </div>
              <ol className="mt-4 space-y-4">
                {education.map((e, i) => (
                  <motion.li
                    key={e.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="relative flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--accent-glow)]" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="font-medium">{e.title}</div>
                        <div className="text-xs text-muted-foreground">{e.year}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{e.institution}</div>
                      <div className="mt-1 text-xs text-muted-foreground/80">{e.detail}</div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
