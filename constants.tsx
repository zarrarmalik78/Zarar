import { Search, Smartphone, Zap, Map, Code, Rocket, Layout, Globe, Cpu, Layers } from "lucide-react";
import { Project, Service, Testimonial } from "./types.ts";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const BENEFITS = [
  {
    title: "Local SEO",
    description: "Appear on the first page of Google when local customers search for your services. I make sure you are found.",
    icon: Search,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Mobile-First Design",
    description: "Your business will look perfect on every phone, where 60% of your customers are looking for you.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Lightning Speed",
    description: "I build sites that load in under 2 seconds. Don't let a slow site drive customers to your competitors.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "zentrix",
    title: "Zentrix — AI Gamified Study SaaS",
    description: "Transforming static syllabi into interactive 'daily missions' using AI. Engineered a custom Gamification Engine (XP, Streaks, Badges) to solve the user retention problem common in EdTech.",
    image: "https://picsum.photos/seed/zentrix/800/600",
    tags: ["EdTech", "Gamification", "AI", "SaaS"],
    techStack: ["Next.js 14", "Tailwind CSS", "Shadcn UI", "Firebase", "OpenAI"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "vapetrax-crm",
    title: "VapeTrax — Desktop CRM & Inventory Manager",
    description: "A specialized offline software solution designed for vape shop owners to manage complex inventory, track sales, and handle customer relationships.",
    image: "https://picsum.photos/seed/vapetrax/800/600",
    tags: ["CRM", "Inventory", "Offline First", "Desktop"],
    techStack: ["C++", "Python", "SQL"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "medtime",
    title: "MedTime — Smart Medicine Reminder",
    description: "A cross-platform mobile application built to ensure medication adherence through intelligent scheduling and timely notifications.",
    image: "https://picsum.photos/seed/medtime/800/600",
    tags: ["Mobile App", "HealthTech", "Flutter"],
    techStack: ["Flutter", "Dart", "Local Notifications"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "pluto-runner",
    title: "Pluto Runner — Interactive Web Game",
    description: "A fast-paced, browser-based game developed to showcase skills in physics-based movement and responsive web interactions.",
    image: "https://picsum.photos/seed/pluto/800/600",
    tags: ["Game Dev", "Interactive", "Web"],
    techStack: ["JavaScript", "HTML5 Canvas", "Netlify"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "global-intel",
    title: "GlobalIntel — Data-Driven Intelligence Tool",
    description: "An analytical tool designed for processing and visualizing complex datasets to provide actionable insights.",
    image: "https://picsum.photos/seed/data/800/600",
    tags: ["Data Science", "Analytics", "AI", "Visualization"],
    techStack: ["Python", "Streamlit", "OpenAI API"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "visionary-ai",
    title: "Visionary AI — Multimodal Storyteller",
    description: "A powerful, AI-driven web application that leverages multimodal intelligence to extract deep contextual insights from images and generate creative stories.",
    image: "https://picsum.photos/seed/visionary/800/600",
    tags: ["AI", "Multimodal", "Storytelling", "React"],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Google Gemini API"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "fitpulse-gym",
    title: "FitPulse Gym",
    description: "A high-energy fitness platform featuring membership management, class scheduling, and a mobile-optimized experience for gym members.",
    image: "/fitpulse.png",
    tags: ["Fitness", "UX Design", "Conversion"],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
    links: { demo: "https://fitpulse-gym.netlify.app/", github: "#" },
  },
  {
    id: "apex-real-estate",
    title: "Apex Real Estate",
    description: "A premium real estate portal designed for high-end property listings, featuring advanced search filters and lead capture for agents.",
    image: "/apex.png",
    tags: ["Real Estate", "Search API", "Lead Gen"],
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Google Maps API"],
    links: { demo: "https://apex-real-estate.netlify.app/", github: "#" },
  },
  {
    id: "verdant-scapes",
    title: "Verdant Scapes",
    description: "Digital storefront for a landscaping agency, focusing on high-quality visual portfolios and local SEO for service bookings.",
    image: "/verdant.png",
    tags: ["Service Industry", "SEO", "Visual Portfolio"],
    techStack: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
    links: { demo: "https://verdant-scapes.netlify.app/", github: "#" },
  },
  {
    id: "home-cleaning",
    title: "Sparkle Cleaning",
    description: "A robust booking platform for a cleaning agency that automated their scheduling process and increased online leads by 40%.",
    image: "/cleaning.png",
    tags: ["Automation", "Booking System", "Business Growth"],
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    links: { demo: "https://home-cleaning-theta.vercel.app/", github: "#" },
  },
  {
    id: "zyntrum-tech",
    title: "Zyntrum Tech",
    description: "A sleek, corporate tech solutions website showcasing software services, AI integration expertise, and enterprise-grade products.",
    image: "/zyntrum.png",
    tags: ["Technology", "B2B", "Enterprise"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    links: { demo: "https://zyntrum-tech.netlify.app/", github: "#" },
  },
];

export const LAUNCH_STEPS = [
  {
    id: "step-1",
    step: "01",
    title: "The Blueprint",
    description: "I research your local competitors and find the gaps you can exploit to stand out from day one.",
    icon: Map,
  },
  {
    id: "step-2",
    step: "02",
    title: "The Build",
    description: "I create a high-speed, professional site tailored specifically to your brand and your customers' needs.",
    icon: Code,
  },
  {
    id: "step-3",
    step: "03",
    title: "The Launch",
    description: "We go live, and your business finally appears where it matters: Google Maps and Search results.",
    icon: Rocket,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Khan",
    role: "Local Business Owner",
    content: "Zarar made the process so easy. I was worried about the tech, but he handled everything. I finally have a professional presence that brings in real calls.",
    avatar: "/avatar1.png",
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Agency Founder",
    content: "My business felt invisible before. Now, we are ranking on Google and the booking system Zarar built is like having a second employee who never sleeps.",
    avatar: "/avatar2.png",
  },
  {
    id: "t3",
    name: "Mike Ross",
    role: "Retailer",
    content: "Reliable and fast. If you're looking for someone who understands business results and not just code, Zarar is your guy.",
    avatar: "/avatar3.png",
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Custom Web Design",
    description: "Tailor-made, high-converting websites that reflect your unique brand identity and turn visitors into customers.",
    icon: Layout,
  },
  {
    id: "seo",
    title: "Local SEO Strategy",
    description: "Dominating local search results so your business is the first thing customers see when they need your services.",
    icon: Globe,
  },
  {
    id: "automation",
    title: "AI Automations",
    description: "Smart workflows that handle your repetitive tasks, from lead management to customer booking, saving you hours every day.",
    icon: Cpu,
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Lightning-fast load times and mobile-first architecture to ensure you never lose a lead to a slow connection.",
    icon: Layers,
  },
];

export const SKILLS = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma"],
  Tools: ["n8n", "Zapier", "Git", "Docker", "Postman"],
  Other: ["SEO Strategy", "Google Ads", "Analytics", "UI/UX Design", "Copywriting"]
};