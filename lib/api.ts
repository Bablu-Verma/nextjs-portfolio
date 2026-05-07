import type {
  Project,
  Experience,
  Education,
  Service,
  Testimonial,
  FAQItem,
  WorkflowStep,
  AboutData,
} from '@/types';

// Single source of truth
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${BASE_URL}${endpoint}`);
  }

  return res.json();
}

// ✅ Use relative endpoints only
export async function getProjects(): Promise<Project[]> {
  return fetchData("/api/projects");
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}

export async function getExperiences(): Promise<Experience[]> {
  return fetchData("/api/experiences");
}

export async function getExperienceByCompany(companySlug: string) {
  const data = await getExperiences();
  return data.find(e => e.companySlug === companySlug);
}

export async function getEducation(): Promise<Education[]> {
  return fetchData("/api/education");
}

export async function getServices(): Promise<Service[]> {
  return fetchData("/api/services");
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchData("/api/testimonials");
}

export async function getFaqs(): Promise<FAQItem[]> {
  return fetchData("/api/faqs");
}

export async function getWorkflowSteps(): Promise<WorkflowStep[]> {
  return fetchData("/api/workflow");
}

export async function getAbout(): Promise<AboutData> {
  return fetchData("/api/about");
}

export async function getGalleryImages() {
  return fetchData("/api/gallery");
}