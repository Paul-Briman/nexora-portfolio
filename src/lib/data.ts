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
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  highlights?: string[];
  results?: string[];
  techStack: string[];
  live?: string;
  github?: string;
  featured?: boolean;
}

export const workProjects: WorkProject[] = [
  {
    title: "Lumina",
    subtitle: "Photography Platform",
    description:
      "Secure client galleries, smart cross-device downloads, and professional invoicing for photographers worldwide.",
    image: "/images/lumina.svg",
    gradient: "from-blue-600/20 via-purple-600/20 to-indigo-600/20",
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
      "PostgreSQL",
      "Cloudinary",
    ],
    live: "https://luminashots.com",
    github: "https://github.com/Paul-Briman/lumina-photography",
    featured: true,
  },
  {
    title: "CryptoVault",
    subtitle: "Investment Dashboard",
    description:
      "Real-time portfolio tracking, investment plans, and clean data visualization for financial clarity.",
    image: "/images/cryptovault.svg",
    gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
    github: "https://github.com/Paul-Briman",
  },
  {
    title: "VoxAgent",
    subtitle: "AI Business Automation",
    description:
      "Intelligent voice agents for customer support, lead qualification, and appointment scheduling.",
    image: "/images/voxagent.svg",
    gradient: "from-violet-600/20 via-fuchsia-600/20 to-pink-600/20",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Paul-Briman",
  },
  {
    title: "AdminCore",
    subtitle: "Enterprise Dashboard",
    description:
      "Role-based access, real-time analytics, and modular widgets for multi-tenant business environments.",
    image: "/images/admincore.svg",
    gradient: "from-amber-600/20 via-orange-600/20 to-red-600/20",
    techStack: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "JWT"],
    github: "https://github.com/Paul-Briman",
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
