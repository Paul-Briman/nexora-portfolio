import {
  Code2,
  Server,
  Database,
  Cloud,
  Layout,
  Paintbrush,
  FileCode,
  Braces,
  Atom,
  Frame,
  Component,
  ServerCog,
  Globe,
  ShieldCheck,
  HardDrive,
  Cloudy,
  GitBranch,
  Plug,
  Gauge,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Value", href: "#value" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Paintbrush },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Atom },
      { name: "Framer Motion", icon: Frame },
      { name: "shadcn/ui", icon: Component },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: ServerCog },
      { name: "Express.js", icon: Globe },
      { name: "PHP", icon: FileCode },
      { name: "JWT Auth", icon: ShieldCheck },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: HardDrive },
      { name: "MySQL", icon: HardDrive },
      { name: "MongoDB", icon: HardDrive },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      { name: "Cloudinary", icon: Cloudy },
      { name: "Supabase", icon: Database },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "REST APIs", icon: Plug },
      { name: "Web Performance", icon: Gauge },
      { name: "Resend", icon: Mail },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  highlights?: string[];
  impact?: string[];
  techStack: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Lumina \u2013 Photography Platform",
    description:
      "A full-stack photography platform inspired by Pixieset, built to help photographers worldwide deliver secure client galleries, manage downloads, and generate professional invoices.",
    highlights: [
      "PIN-protected client galleries",
      "Smart cross-device downloads (iOS ZIP handling, optimized Android/desktop delivery)",
      "Invoice generator with currency + discount support",
      "Dark/light mode theming",
      "Image protection (disable right-click & long-press)",
    ],
    impact: [
      "Production-ready platform for photographers globally",
      "Solves real delivery, security, and workflow problems",
      "Handles complex cross-device challenges",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
      "JWT",
      "Resend",
    ],
    github: "https://github.com/Paul-Briman/lumina-photography",
    live: "https://luminashots.com",
    featured: true,
  },
  {
    title: "CryptoVault \u2013 Investment Platform",
    description:
      "A crypto investment dashboard featuring real-time portfolio tracking, investment plans, and analytics. Built with a focus on clean data visualization and secure transactions.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
    github: "https://github.com/Paul-Briman",
    live: "#",
  },
  {
    title: "VoxAgent \u2013 AI Business Automation",
    description:
      "An AI-powered business automation platform featuring intelligent voice agents for customer support, lead qualification, and appointment scheduling.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Paul-Briman",
    live: "#",
  },
  {
    title: "AdminCore \u2013 Dashboard System",
    description:
      "A comprehensive admin dashboard with role-based access control, real-time analytics, and modular widget system. Designed for scalability and performance.",
    techStack: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "JWT"],
    github: "https://github.com/Paul-Briman",
    live: "#",
  },
  {
    title: "RESTify \u2013 API Service",
    description:
      "A robust REST API service with comprehensive documentation, rate limiting, authentication, and automated testing. Built following best practices for scalable API architecture.",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
    github: "https://github.com/Paul-Briman",
    live: "#",
  },
];

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const valueItems: ValueItem[] = [
  {
    title: "Scalable Backend Systems",
    description:
      "Architecting server-side solutions built to grow \u2014 from RESTful APIs to database design, every layer is built for scale.",
    icon: Server,
  },
  {
    title: "Performance-Focused Development",
    description:
      "Every millisecond matters. Optimized rendering, lazy loading, and efficient data fetching for blazing-fast applications.",
    icon: Gauge,
  },
  {
    title: "Secure Authentication Flows",
    description:
      "Implementing JWT-based auth, role-based access control, and security best practices to protect user data.",
    icon: ShieldCheck,
  },
  {
    title: "Clean UI/UX Systems",
    description:
      "Pixel-perfect interfaces with intuitive user flows. Responsive, accessible, and visually polished designs.",
    icon: Paintbrush,
  },
  {
    title: "Real-World Problem Solving",
    description:
      "Building solutions that address actual business needs \u2014 from cross-device file delivery to automated invoicing.",
    icon: Code2,
  },
];

export const socialLinks = {
  github: "https://github.com/Paul-Briman",
  linkedin: "https://linkedin.com/in/briman-paul",
  email: "mailto:contact@brimanpaul.dev",
};
