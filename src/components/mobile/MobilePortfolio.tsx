import {
  BadgeCheck,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Award,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem, Tap } from './Reveal';
import { SplitText } from './SplitText';
import { ThemeToggle } from './ThemeToggle';
import { certifications } from './certifications';

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

import avatar from '../../assets/mobile/avatar.jpg';
import project1 from '../../assets/mobile/project-1.jpg';
import formcraftShot from '../../assets/mobile/fromcraft.png';
import campusdriveShot from '../../assets/mobile/campusdrive.png';
import cyberscanShot from '../../assets/mobile/cyberscan.png';
import resume from '../../assets/mobile/resume.pdf';
import infosysLogo from '../../assets/mobile/Infosys-Springboard.webp';
import roomanLogo from '../../assets/mobile/Rooman.webp';
import excelerateLogo from '../../assets/mobile/Excelerate.png';
import vaultLogo from '../../assets/mobile/vaultofcodes.jpg';
import eyesecLogo from '../../assets/mobile/eyesec.jpg';

const EMAIL = 'mbetgeri2000@gmail.com';

const skills = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'JavaScript',
  'SQL',
  'React.js',
  'Node.js',
  'Tailwind CSS',
  'Power BI',
  'Tableau',
  'Excel',
  'Burp Suite',
  'Ethical Hacking',
  'Firebase',
  'Figma',
  'Git/GitHub',
];

const brands = [
  'Infosys Springboard',
  'Rooman Technologies',
  'Excelerate',
  'VaultofCodes',
  'Eyesec',
  'IBM SkillsBuild',
  'McKinsey Forward',
];

const caseStudies = [
  {
    index: '01',
    domain: 'Full-Stack · AI & Backend',
    title: 'FormCraft — Low-Code Dynamic Form Platform',
    stack: 'Python · FastAPI · PostgreSQL · React.js',
    tags: ['FastAPI', 'PostgreSQL', 'React.js', 'Gemini API', 'Brevo API', 'PWA'],
    blurb:
      'Scalable low-code dynamic form builder platform for data collection workflows. Features schema versioning, server-side conditional logic validation, AI-based form generation via Gemini API, Brevo OTP verification, and PWA analytics with CSV/JSON exports.',
    image: formcraftShot,
    alt: 'FormCraft low-code dynamic form workflow platform interface',
  },
  {
    index: '02',
    domain: 'Data Analytics',
    title: 'E-Commerce Sales Dashboard with Cohort Analysis',
    stack: 'Python · Power BI · DAX',
    tags: ['Pandas', 'NumPy', 'DAX', 'Data Modeling'],
    blurb:
      'Interactive Power BI dashboard analysing e-commerce sales with cohort analysis to track customer retention and buying behaviour over time. Cleaned and modelled raw data with NumPy and Pandas, then designed DAX KPIs for retention and revenue storytelling.',
    image: project1,
    alt: 'E-commerce sales analytics dashboard with retention cohorts',
  },
  {
    index: '03',
    domain: 'Full-Stack · Mobile',
    title: 'CampusDrive — Live Bus Tracking App',
    stack: 'React.js · Firebase · OSRM API · Android',
    tags: ['Realtime GPS', 'Firebase', 'Maps', 'Android'],
    blurb:
      'Role-based app for students and drivers with real-time GPS streaming, interactive route maps and per-stop ETAs. Added a fallback distance calculation for unreliable GPS plus an emergency broadcast module. Shipped as both a web and Android app.',
    image: campusdriveShot,
    alt: 'Bus tracking app screen with live map and stop ETAs',
  },
  {
    index: '04',
    domain: 'Cybersecurity',
    title: 'CyberScan — Malicious URL Scanner',
    stack: 'React.js · Node.js · REST APIs',
    tags: ['Threat Scoring', 'REST APIs', 'Node.js'],
    blurb:
      'Full-stack web app that detects malicious URLs by aggregating multiple cybersecurity APIs. Built a threat-analysis engine that computes risk scores and returns tailored security recommendations through a responsive scan interface.',
    image: cyberscanShot,
    alt: 'URL threat scanner interface showing a risk score',
  },
];

const services = [
  'Full-Stack Web Apps',
  'Data Analytics & EDA',
  'Power BI Dashboards',
  'SQL & Data Modeling',
  'Vulnerability Assessment',
  'Responsive UI Development',
];

const serviceBullets = [
  'CSE graduate who has shipped across development, data and security teams',
  'Comfortable end to end: SQL and Python through to React interfaces',
  'Dashboards built for decisions, not just charts',
  'Star Performer recognition at Excelerate',
  'Clear communication and quick turnaround',
];

const education = [
  {
    org: 'S.G. Balekundri Institute of Technology',
    course: 'B.E. Computer Science',
    detail: '2026 · Belgaum, India',
  },
  {
    org: 'M.L. Bharatesh Polytechnic',
    course: 'Diploma in Computer Science',
    detail: '2023 · Belgaum, India',
  },
];

const focusAreas = [
  {
    title: 'Build',
    text: 'React, Node and Firebase apps that ship — realtime, responsive, production-ready.',
  },
  {
    title: 'Analyse',
    text: 'SQL, Python and Power BI turned into dashboards teams actually make calls on.',
  },
  {
    title: 'Secure',
    text: 'Vulnerability assessments with Burp Suite and Wireshark before things break.',
  },
];

const journey: {
  org: string;
  role: string;
  period: string;
  text: string;
  logo?: string;
}[] = [
  {
    org: 'Infosys Springboard 7.0',
    logo: infosysLogo,
    role: 'Python Intern',
    period: 'Jul 2026 – Sep 2026 · Remote',
    text: 'Completed structured Python internship covering OOP, database systems and software engineering principles. Engineered a capstone backend system using FastAPI, PostgreSQL and REST APIs with conditional validation logic.',
  },
  {
    org: 'Rooman Technologies',
    logo: roomanLogo,
    role: 'Data Analytics Intern',
    period: 'Feb 2026 – May 2026 · Bangalore',
    text: 'Trained across the full analytics lifecycle. Wrote SQL with joins, subqueries and CTEs, ran EDA with Pandas and NumPy, and built Power BI dashboards with DAX KPIs and data modeling.',
  },
  {
    org: 'Excelerate',
    logo: excelerateLogo,
    role: 'Data Visualization Trainee',
    period: 'Aug 2025 – Sep 2025 · Remote',
    text: 'Analysed real-world datasets with a cross-functional virtual team, handling cleaning, transformation and statistical exploration. Recognised as Star Performer.',
  },
  {
    org: 'VaultofCodes',
    logo: vaultLogo,
    role: 'Web Developer Intern',
    period: 'Aug 2025 – Sep 2025 · Remote',
    text: 'Built and deployed responsive pages with HTML, CSS and JavaScript, adding interactive features for better usability while working with React and Tailwind.',
  },
  {
    org: 'Eyesec CyberSecurity Pvt Ltd',
    logo: eyesecLogo,
    role: 'Cyber Security Intern',
    period: 'Mar 2023 – May 2023 · Belgaum',
    text: 'Worked through HackTheBox labs, ran vulnerability assessments with Burp Suite and used Wireshark for network analysis and exploitation techniques.',
  },
];

const activities = [
  {
    name: 'Aspire Leader Program',
    org: 'Aspire Institute (Harvard-founded)',
    text: 'Selected for a global leadership program; completed the Harvard-designed Aspire Horizons course on leadership in the age of AI, plus a professional development module.',
  },
  {
    name: 'McKinsey Forward Program',
    org: 'McKinsey & Company',
    text: '10-week program on adaptability, structured problem-solving and communication using McKinsey frameworks, earning the Forward digital badge.',
  },
  {
    name: 'Skilling Programs (AICTE-affiliated)',
    org: 'IBM SkillsBuild · Shell India × Edunet',
    text: 'AI & Cloud Technology, Front End Web Development, and AI & Data Analytics (Green Skills) — 2025.',
  },
];

const socials = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohammedjb', label: 'LinkedIn' },
  { Icon: Github, href: 'https://github.com/Leviosa555', label: 'GitHub' },
];

function SocialRow({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'size-8' : 'size-11';
  const icon = size === 'sm' ? 'size-3.5' : 'size-4';
  return (
    <div className="flex gap-2">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${box} flex items-center justify-center rounded-full border border-border bg-card transition-transform active:scale-95`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}

function Avatar({ className = '' }: { className?: string }) {
  return (
    <img
      src={avatar}
      alt="Illustrated avatar of Mohammed Junaid Betgeri"
      width={816}
      height={816}
      className={`object-cover ${className}`}
    />
  );
}

export function MobilePortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground mobile-view-container font-display">
      <main className="mx-auto w-full max-w-[430px] sm:max-w-lg md:max-w-xl px-4 pb-8 pt-4">
        {/* Profile Card Header */}
        <Reveal className="panel overflow-hidden">
          <div className="cover-gradient relative h-32 overflow-hidden">
            {/* Animated mesh blobs */}
            <span
              className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full blur-[58px]"
              style={{
                background: 'oklch(0.95 0.08 95 / 0.7)',
                animation: 'float-1 14s ease-in-out infinite',
              }}
            />
            <span
              className="pointer-events-none absolute -right-10 -bottom-16 h-40 w-40 rounded-full blur-[58px]"
              style={{
                background: 'oklch(0.86 0.1 200 / 0.6)',
                animation: 'float-2 17s ease-in-out infinite',
              }}
            />
            <span
              className="pointer-events-none absolute right-10 -top-10 h-32 w-32 rounded-full blur-[48px]"
              style={{
                background: 'oklch(0.88 0.09 280 / 0.55)',
                animation: 'float-3 12s ease-in-out infinite',
              }}
            />
            <span
              className="pointer-events-none absolute left-1/3 bottom-0 h-24 w-24 rounded-full blur-[44px]"
              style={{
                background: 'oklch(0.9 0.08 20 / 0.45)',
                animation: 'float-2 15s ease-in-out infinite reverse',
              }}
            />

            {/* Technical dot grid */}
            <span
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: 'radial-gradient(oklch(0.25 0.01 260) 1.2px, transparent 1.2px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Slow light sweep */}
            <span
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                background:
                  'linear-gradient(100deg, transparent 25%, oklch(1 0 0 / 0.45) 50%, transparent 75%)',
                animation: 'shimmer 7s ease-in-out infinite',
              }}
            />

            {/* Bottom edge glow */}
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, oklch(1 0 0 / 0.5), transparent)',
              }}
            />

            {/* Rotating orbital rings */}
            <svg
              className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 text-foreground/[0.14]"
              viewBox="0 0 100 100"
              style={{ animation: 'orbit 22s linear infinite' }}
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="10 7"
              />
            </svg>
            <svg
              className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 text-foreground/[0.10]"
              viewBox="0 0 100 100"
              style={{ animation: 'orbit 30s linear infinite reverse' }}
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="5 8"
              />
            </svg>

            {/* Right-side orbital rings */}
            <svg
              className="pointer-events-none absolute -right-10 top-4 h-40 w-40 text-foreground/[0.11]"
              viewBox="0 0 100 100"
              style={{ animation: 'orbit 28s linear infinite reverse' }}
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="14 10"
              />
            </svg>
            <svg
              className="pointer-events-none absolute -right-6 top-10 h-28 w-28 text-foreground/[0.08]"
              viewBox="0 0 100 100"
              style={{ animation: 'orbit 20s linear infinite' }}
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 9"
              />
            </svg>

            {/* Centered split-text headline */}
            <div className="absolute inset-x-0 top-1/2 z-[5] -translate-y-1/2 px-6 text-center">
              <SplitText
                className="cursor-default select-none text-[0.95rem] font-semibold tracking-tight text-foreground/80"
                phrases={[
                  'Full-Stack Development',
                  'Data Analytics & Power BI',
                  'Cybersecurity & Threat Detection',
                  'Cloud · Java · Python · SQL',
                ]}
              />
            </div>

            <span className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-full bg-card/90 px-3 py-1.5 text-[11px] font-medium backdrop-blur">
              <span className="size-1.5 rounded-full bg-online glow-pulse" />
              Engineering · Data · Security
            </span>

            <ThemeToggle className="absolute left-3 top-3 z-10" />
          </div>

          <div className="relative px-5 pb-6">
            <div className="-mt-11 flex items-end justify-between">
              <div className="size-[92px] overflow-hidden rounded-2xl border-[3px] border-card shadow-[var(--shadow-float)] ring-2 ring-cyan-500/25">
                <Avatar className="size-full" />
              </div>
            </div>

            <h1 className="mt-4 flex items-center gap-1.5 text-[1.45rem] font-extrabold leading-tight">
              Mohammed Junaid Betgeri
              <BadgeCheck className="size-5 shrink-0 text-verified" />
            </h1>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Computer Science Engineer · Full Stack & Data
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 text-verified">
                <Mail className="size-3.5 text-muted-foreground" />
                {EMAIL}
              </a>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-3.5" />
                Belgaum, Karnataka
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Star className="size-3.5 text-accent-foreground" />
                5 Internships
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Computer Science graduate with experience across full stack development,
              cybersecurity and data analysis. I work with React, JavaScript, Python, SQL,
              Power BI, Tableau and Burp Suite — building real-time web apps, running
              vulnerability assessments and turning raw data into decisions.
            </p>

            <div className="mt-5">
              <SocialRow />
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <h2 className="text-sm font-bold">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <h2 className="text-sm font-bold">Trained & mentored by</h2>
            </div>
          </div>

          <div className="overflow-hidden py-3 pb-7">
            <div className="marquee-track">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center">
                  {brands.map((b) => (
                    <span
                      key={`${dup}-${b}`}
                      className="flex items-center whitespace-nowrap px-8 py-2 text-[1.35rem] font-bold text-muted-foreground/50"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Section */}
        <Reveal id="work" className="mt-4">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-1">
            <h2 className="truncate text-2xl font-extrabold">Projects</h2>
            <a
              href="https://github.com/Leviosa555"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark shrink-0 px-4 py-2 text-xs"
            >
              GitHub
            </a>
          </div>

          <Stagger className="mt-4 space-y-4">
            {caseStudies.map((c) => (
              <StaggerItem key={c.title}>
                <article className="panel p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="chip">{c.domain}</span>
                    <span className="font-mono text-[11px] font-bold text-muted-foreground">
                      {c.index}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground">{c.stack}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <img
                    src={c.image}
                    alt={c.alt}
                    width={1920}
                    height={1088}
                    loading="lazy"
                    className="mt-4 aspect-[16/10] w-full rounded-xl border border-border object-cover object-left-top"
                  />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* What I do (Services) */}
        <Reveal className="panel mt-4 p-5">
          <h2 className="text-2xl font-extrabold">What I do</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            I build and ship across development, analytics and security — from data models to
            polished front ends.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5">
            {serviceBullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-foreground" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-secondary p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              How I work
            </p>
            <div className="mt-4 space-y-4">
              {focusAreas.map((f, i) => (
                <div key={f.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                  <span className="mt-0.5 font-mono text-[11px] font-bold text-verified">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{f.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Tap>
              <a href={`mailto:${EMAIL}`} className="btn-dark mt-5 w-full px-5 py-3 text-sm">
                <Mail className="size-4" /> Start a conversation
              </a>
            </Tap>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal className="mt-6">
          <h2 className="px-1 text-2xl font-extrabold">Education</h2>
          <Stagger className="mt-4 space-y-3">
            {education.map((e) => (
              <StaggerItem key={e.org}>
                <article className="panel p-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary">
                      <GraduationCap className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-bold leading-snug">{e.org}</p>
                      <p className="text-[13px] text-muted-foreground">{e.course}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{e.detail}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* Experience */}
        <Reveal className="mt-6">
          <h2 className="px-1 text-2xl font-extrabold">Experience</h2>
          <Stagger className="mt-4 space-y-3">
            {journey.map((j) => (
              <StaggerItem key={j.org}>
                <article className="panel p-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                    <div className="grid size-14 shrink-0 place-items-center self-start overflow-hidden rounded-2xl bg-white p-1.5 ring-1 ring-border">
                      {j.logo ? (
                        <img
                          src={j.logo}
                          alt={`${j.org} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-2xl font-extrabold text-foreground">
                          {j.org.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 self-center">
                      <p className="text-base font-bold leading-snug">{j.org}</p>
                      <p className="text-[13px] text-muted-foreground">{j.role}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{j.period}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* Certifications */}
        <Reveal className="panel mt-6 p-5">
          <h2 className="text-2xl font-extrabold">Certifications</h2>
          <p className="mt-2 text-[13px] text-muted-foreground">
            Tap any credential to open the issuer's verification page.
          </p>
          <ul className="mt-4 divide-y divide-border">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 py-3.5"
                >
                  <Award className="mt-0.5 size-4 shrink-0 text-verified" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{c.name}</span>
                    <span className="mt-0.5 block text-[11px] text-muted-foreground">
                      {c.issuer} · {c.date}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-verified">
                    Verify <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Programs & Activities */}
        <Reveal className="mt-6 mb-4">
          <h2 className="px-1 text-2xl font-extrabold">Programs & Activities</h2>
          <Stagger className="mt-4 space-y-3">
            {activities.map((a) => (
              <StaggerItem key={a.name}>
                <article className="panel p-5">
                  <p className="text-base font-bold leading-snug">{a.name}</p>
                  <p className="text-[12px] text-muted-foreground">{a.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* Bottom Floating Dossier / Mail Card */}
        <motion.div
          className="z-20 mt-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-float)]">
            <div className="p-4">
              <span className="flex w-fit items-center gap-2 text-[11px] font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-online glow-pulse" />
                Engineering · Data · Security
              </span>
              <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <div className="size-10 shrink-0 overflow-hidden rounded-xl">
                  <Avatar className="size-full" />
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-[13px] font-bold">
                    <span className="truncate">Mohammed Junaid</span>
                    <BadgeCheck className="size-3.5 shrink-0 text-verified" />
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    CSE · Full Stack & Data Analytics
                  </p>
                </div>
                <SocialRow size="sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-border text-[13px] font-semibold">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-r border-border py-3.5 active:bg-secondary transition-colors"
              >
                <FileText className="size-4" /> Full Dossier
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2 py-3.5 active:bg-secondary transition-colors"
              >
                <Mail className="size-4" /> Mail me
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
