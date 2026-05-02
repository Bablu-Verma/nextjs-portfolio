import type { Project, Experience, Education, Service, Testimonial, FAQItem, WorkflowStep } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

export async function getProjects(): Promise<Project[]> {
  return fetchData<Project[]>('/api/projects');
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}

export async function getExperiences(): Promise<Experience[]> {
  return fetchData<Experience[]>('/api/experiences');
}

export async function getExperienceByCompany(companySlug: string): Promise<Experience | undefined> {
  const experiences = await getExperiences();
  return experiences.find(e => e.companySlug === companySlug);
}

export async function getEducation(): Promise<Education[]> {
  return fetchData<Education[]>('/api/education');
}

export async function getServices(): Promise<Service[]> {
  return fetchData<Service[]>('/api/services');
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchData<Testimonial[]>('/api/testimonials');
}

export async function getFaqs(): Promise<FAQItem[]> {
  return fetchData<FAQItem[]>('/api/faqs');
}

export async function getWorkflowSteps(): Promise<WorkflowStep[]> {
  return fetchData<WorkflowStep[]>('/api/workflow');
}

export async function getGalleryImages(): Promise<Array<{ src: string; alt: string }>> {
  return fetchData<Array<{ src: string; alt: string }>>('/api/gallery');
}
