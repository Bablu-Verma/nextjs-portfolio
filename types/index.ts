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

export interface EducationData {
  intro: string[];
  items: Education[];
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

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface AboutData {
  bio: string[];
  image: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number; percentage: number }[];
}

export type Theme = 'dark' | 'light';

export interface UIState {
  isMenuOpen: boolean;
  isLoading: boolean;
  activeModal: string | null;
}