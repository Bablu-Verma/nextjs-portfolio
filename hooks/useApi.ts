import { useQuery } from '@tanstack/react-query';
import type { Project, Experience, Education, EducationData, Service, WorkflowStep, AboutData, SkillGroup, HomePageData } from '@/types';

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export function useProjects(enabled = true) {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => fetchData<Project[]>('/api/projects'),
    enabled,
  });
}

export function useExperiences(enabled = true) {
  return useQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: () => fetchData<Experience[]>('/api/experiences'),
    enabled,
  });
}

export function useEducation(enabled = true) {
  return useQuery<EducationData>({
    queryKey: ['education'],
    queryFn: () => fetchData<EducationData>('/api/education'),
    enabled,
  });
}

export function useServices(enabled = true) {
  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: () => fetchData<Service[]>('/api/services'),
    enabled,
  });
}

export function useWorkflowSteps(enabled = true) {
  return useQuery<WorkflowStep[]>({
    queryKey: ['workflow'],
    queryFn: () => fetchData<WorkflowStep[]>('/api/workflow'),
    enabled,
  });
}

export function useAbout(enabled = true) {
  return useQuery<AboutData>({
    queryKey: ['about'],
    queryFn: () => fetchData<AboutData>('/api/about'),
    enabled,
  });
}

export function useSkills(enabled = true) {
  return useQuery<SkillGroup[]>({
    queryKey: ['skills'],
    queryFn: () => fetchData<SkillGroup[]>('/api/skills'),
    enabled,
  });
}

export function useGalleryImages(enabled = true) {
  return useQuery<{ src: string; alt: string }[]>({
    queryKey: ['gallery'],
    queryFn: () => fetchData<{ src: string; alt: string }[]>('/api/gallery'),
    enabled,
  });
}

export function useHomeData() {
  return useQuery<HomePageData>({
    queryKey: ['home'],
    queryFn: () => fetchData<HomePageData>('/api/home'),
  });
}
