import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { SectionEyebrow } from "../components/About";
import { projects, type Project } from "../lib/portfolio-data";

const Github = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-8, 8]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative w-[78vw] shrink-0 overflow-hidden rounded-3xl glass-strong sm:w-[62vw] md:w-[46vw] lg:w-[36vw]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image && (
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-100"
            style={{ backgroundImage: `url(${project.image})` }}
            aria-hidden
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent ?? "from-primary/30 to-transparent"} mix-blend-overlay`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="font-display text-3xl font-semibold leading-tight text-gradient">
            {project.title}
          </span>
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
          0{index + 1}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition hover:brightness-110"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-white/5"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapEl = wrap.current;
    const trackEl = track.current;
    if (!wrapEl || !trackEl) return;

    const ctx = gsap.context(() => {
      const getDistance = () => trackEl.scrollWidth - window.innerWidth;

      const tween = gsap.to(trackEl, {
        x: () => `-${getDistance()}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapEl,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        tween.kill();
      };
    }, wrapEl);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative w-full">
      <div ref={wrap} className="relative h-screen w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />

        <div ref={track} className="flex h-full w-max items-center gap-6 pl-6 pr-[10vw] sm:gap-8 sm:pl-10">
          {/* Intro panel */}
          <div className="flex h-full w-[80vw] shrink-0 flex-col justify-center sm:w-[60vw] md:w-[42vw]">
            <SectionEyebrow index="03" label="Projects" />
            <SplitText
              as="h2"
              className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              text="Selected work — scroll →"
            />
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              A horizontal reel of shipped work. Keep scrolling — the story moves sideways.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-[2px] w-10 bg-primary" />
              {projects.length} projects
            </div>
          </div>

          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}

          <div className="h-full w-[10vw] shrink-0" aria-hidden />
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll to advance →
        </div>
      </div>
    </section>
  );
}

export default Projects;
