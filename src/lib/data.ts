import {
  Code2,
  Server,
  Globe,
  ShieldCheck,
  Gauge,
  Paintbrush,
  Zap,
  Bot,
  Layers,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

// ===== Navigation =====

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// ===== Services =====

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-performance websites and landing pages built for speed, SEO, and conversion. Pixel-perfect, responsive, and optimized for every device.",
    icon: Globe,
  },
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications with modern frontend frameworks, robust backends, and seamless database integration. Built to scale with your business.",
    icon: Layers,
  },
  {
    title: "API & Backend Systems",
    description:
      "Secure, scalable REST APIs and backend architectures with authentication, data pipelines, and third-party integrations that power your products.",
    icon: Server,
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent business automation systems including AI-powered workflows, voice agents, and process optimization that save time and reduce costs.",
    icon: Bot,
  },
];

// ===== Featured Work =====

export interface WorkProject {
  title: string;
  description: string;
  highlights?: string[];
  results?: string[];
  techStack: string[];
  live?: string;
  featured?: boolean;
}

export const workProjects: WorkProject[] = [
  {
    title: "Lumina \u2013 Photography Platform",
    description:
      "A full-stack photography platform helping photographers worldwide deliver secure client galleries, manage downloads, and generate professional invoices \u2014 all from one system.",
    highlights: [
      "PIN-protected client galleries with secure delivery",
      "Smart cross-device downloads (iOS, Android, desktop)",
      "Built-in invoice generator with multi-currency support",
      "Image protection and dark/light mode theming",
    ],
    results: [
      "Production platform serving photographers globally",
      "Solves real-world delivery, security, and invoicing challenges",
      "Handles complex cross-device file delivery at scale",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudinary",
      "JWT",
    ],
    live: "https://luminashots.com",
    featured: true,
  },
  {
    title: "CryptoVault \u2013 Investment Dashboard",
    description:
      "A real-time crypto investment platform with portfolio tracking, plan management, and clean data visualization \u2014 built for financial clarity and secure transactions.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
  },
  {
    title: "VoxAgent \u2013 AI Business Automation",
    description:
      "An AI-powered automation platform with intelligent voice agents for customer support, lead qualification, and appointment scheduling \u2014 reducing manual overhead for businesses.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    title: "AdminCore \u2013 Enterprise Dashboard",
    description:
      "A modular admin system with role-based access control, real-time analytics widgets, and a scalable architecture \u2014 designed for multi-tenant business environments.",
    techStack: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "JWT"],
  },
];

// ===== Why Choose Us =====

export interface WhyUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Scalable Architecture",
    description:
      "Every system we build is architected for growth \u2014 from database design to API layers, your product scales effortlessly as your business expands.",
    icon: ArrowUpRight,
  },
  {
    title: "Performance-First Builds",
    description:
      "Sub-second load times, optimized rendering, and efficient data pipelines. We obsess over performance so your users never wait.",
    icon: Gauge,
  },
  {
    title: "Secure Systems",
    description:
      "Enterprise-grade security with JWT authentication, role-based access control, encrypted data, and security best practices built into every layer.",
    icon: ShieldCheck,
  },
  {
    title: "Clean UI/UX",
    description:
      "Interfaces that convert. We craft intuitive, responsive designs that look stunning and guide users naturally toward your business goals.",
    icon: Paintbrush,
  },
  {
    title: "Production-Ready Code",
    description:
      "No prototypes or half-built systems. Everything we deliver is tested, documented, and ready for real-world usage from day one.",
    icon: Code2,
  },
  {
    title: "Fast Delivery",
    description:
      "We move fast without cutting corners. Efficient workflows and modern tooling mean your project ships on time without sacrificing quality.",
    icon: Zap,
  },
];

// ===== Social / Company Links =====

export const socialLinks = {
  github: "https://github.com/Paul-Briman",
  linkedin: "https://linkedin.com/in/briman-paul",
  email: "mailto:hello@nexora.dev",
};
