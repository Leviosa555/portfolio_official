export interface Project {
  title: string;
  description: string;
  image?: string;
  accent?: string;
  tech: string[];
  demo?: string;
  github?: string;
}

export interface EducationItem {
  title: string;
  year: string;
  institution: string;
  detail: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export const personal = {
  name: "Mohammed Junaid Betgeri",
  location: "Karnataka, India",
  summary: "I design and develop modern software solutions, building full-stack web applications, leveraging Python for data-driven development, and exploring cybersecurity practices. I enjoy creating scalable software that balances performance, security, and user experience.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Instagram", url: "https://instagram.com" }
  ]
};

export const stats: StatItem[] = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Completed Projects", value: 12, suffix: "" },
  { label: "Certifications", value: 6, suffix: "" },
  { label: "Global Clients", value: 5, suffix: "+" }
];

export const education: EducationItem[] = [
  {
    title: "Bachelor of Engineering in Computer Science",
    year: "2020 - 2024",
    institution: "Visvesvaraya Technological University",
    detail: "Focused on Software Engineering, Databases, Networks, and Web Technologies."
  },
  {
    title: "Full-Stack Development Certification",
    year: "2022",
    institution: "Meta / Coursera",
    detail: "Comprehensive training in front-end and back-end development tools."
  }
];

export const projects: Project[] = [
  {
    title: "FormCraft – Low-Code Dynamic Form Platform",
    description: "Scalable low-code form builder platform for dynamic data collection workflows supporting schema versioning, AI-driven form generation via Gemini API, server-side conditional validation, Brevo OTP verification, and PWA analytics.",
    image: "/fromcraft.png",
    accent: "from-[#10B981]/30 to-transparent",
    tech: ["Python", "FastAPI", "PostgreSQL", "React.js"],
    //demo: "#",
    //github: "#"
  },
  {
    title: "E-Commerce Sales Performance Dashboard with Cohort Analysis",
    description: "Interactive Power BI analytics platform mapping customer retention, cohort analysis, and sales metrics, driven by an automated python data preprocessing pipeline.",
    image: "/ecommerce_dashboard_mockup.png",
    accent: "from-[#006699]/30 to-transparent",
    tech: ["Python", "Power BI", "DAX", "NumPy", "Pandas"],
    //demo: "#",
    //github: "#"
  },
  {
    title: "CampusDrive – Bus Tracking Application",
    description: "Role-based mobile app for students and drivers executing real-time GPS streaming via Geolocation API, Firebase Realtime Database, and OSRM API for stop ETAs.",
    image: "/campusdrive_bus_mockup.png",
    accent: "from-[#BE4C00]/30 to-transparent",
    tech: ["React.js", "Firebase", "Geolocation", "Android"],
    //demo: "#",
    //github: "#"
  },
  {
    title: "CyberScan",
    description: "Web application mapping security reports and threat intelligence by aggregating multiple cybersecurity REST APIs to compute custom risk scores and security recommendations.",
    image: "/cyberscan_security_mockup.png",
    accent: "from-[#7621B0]/30 to-transparent",
    tech: ["JavaScript", "REST APIs", "Node.js"],
    //demo: "#",
    //github: "#"
  }
];
