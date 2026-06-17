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
  logo: string;
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

export interface Skill {
  name: string;
  image: string;
  rating: number;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface AboutData {
  bio: string[];
  image: string;
}


export interface HomePageData {
  about: AboutData;
  skills: SkillGroup[];
  services: Service[];
  projects: Project[];
  experiences: Experience[];
  education: EducationData;
  workflowSteps: WorkflowStep[];
  gallery: { src: string; alt: string }[];
}

