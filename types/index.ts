export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  companySlug: string;
  role: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;

  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  number: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AboutData {
  bio: string[];
  skillGroups: Array<{
    title: string;
    items: string[];
  }>;
}

export type Theme = 'dark' | 'light';

export interface UIState {
  isMenuOpen: boolean;
  isLoading: boolean;
  activeModal: string | null;
}