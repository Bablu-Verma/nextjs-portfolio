import { NextResponse } from 'next/server';
import {
  aboutData,
  skills,
  services,
  projects,
  experiences,
  educationData,
  workflowSteps,
  galleryImages,

} from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    about: aboutData,
    skills,
    services,
    projects,
    experiences,
    education: educationData,
    workflowSteps,
    gallery: galleryImages,

  });
}
