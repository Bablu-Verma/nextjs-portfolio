import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { Project, Experience, Education, Service, Testimonial, FAQItem, WorkflowStep, AboutData } from '@/types';

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => fetchData<Project[]>('/api/projects'),
  });
}

export function useSuspenseProjects() {
  return useSuspenseQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => fetchData<Project[]>('/api/projects'),
  });
}

export function useExperiences() {
  return useQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: () => fetchData<Experience[]>('/api/experiences'),
  });
}

export function useSuspenseExperiences() {
  return useSuspenseQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: () => fetchData<Experience[]>('/api/experiences'),
  });
}

export function useEducation() {
  return useQuery<Education[]>({
    queryKey: ['education'],
    queryFn: () => fetchData<Education[]>('/api/education'),
  });
}

export function useSuspenseEducation() {
  return useSuspenseQuery<Education[]>({
    queryKey: ['education'],
    queryFn: () => fetchData<Education[]>('/api/education'),
  });
}

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: () => fetchData<Service[]>('/api/services'),
  });
}

export function useSuspenseServices() {
  return useSuspenseQuery<Service[]>({
    queryKey: ['services'],
    queryFn: () => fetchData<Service[]>('/api/services'),
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: () => fetchData<Testimonial[]>('/api/testimonials'),
  });
}

export function useSuspenseTestimonials() {
  return useSuspenseQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: () => fetchData<Testimonial[]>('/api/testimonials'),
  });
}

export function useFaqs() {
  return useQuery<FAQItem[]>({
    queryKey: ['faqs'],
    queryFn: () => fetchData<FAQItem[]>('/api/faqs'),
  });
}

export function useSuspenseFaqs() {
  return useSuspenseQuery<FAQItem[]>({
    queryKey: ['faqs'],
    queryFn: () => fetchData<FAQItem[]>('/api/faqs'),
  });
}

export function useWorkflowSteps() {
  return useQuery<WorkflowStep[]>({
    queryKey: ['workflow'],
    queryFn: () => fetchData<WorkflowStep[]>('/api/workflow'),
  });
}

export function useSuspenseWorkflowSteps() {
  return useSuspenseQuery<WorkflowStep[]>({
    queryKey: ['workflow'],
    queryFn: () => fetchData<WorkflowStep[]>('/api/workflow'),
  });
}

export function useAbout() {
  return useQuery<AboutData>({
    queryKey: ['about'],
    queryFn: () => fetchData<AboutData>('/api/about'),
  });
}

export function useSuspenseAbout() {
  return useSuspenseQuery<AboutData>({
    queryKey: ['about'],
    queryFn: () => fetchData<AboutData>('/api/about'),
  });
}

export function useGalleryImages() {
  return useQuery<{ src: string; alt: string }[]>({
    queryKey: ['gallery'],
    queryFn: () => fetchData<{ src: string; alt: string }[]>('/api/gallery'),
  });
}

export function useSuspenseGalleryImages() {
  return useSuspenseQuery<{ src: string; alt: string }[]>({
    queryKey: ['gallery'],
    queryFn: () => fetchData<{ src: string; alt: string }[]>('/api/gallery'),
  });
}
