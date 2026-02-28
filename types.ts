import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack?: string[];
  links: {
    demo: string;
    github: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  icon: string; // URL or name for an icon component mapping
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}