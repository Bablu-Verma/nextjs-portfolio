import { NextResponse } from 'next/server';
import { workflowSteps } from '@/lib/data';

export async function GET() {
  return NextResponse.json(workflowSteps);
}
