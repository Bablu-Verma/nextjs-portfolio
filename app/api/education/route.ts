import { NextResponse } from 'next/server';
import { educationData } from '@/lib/data';

export async function GET() {
  return NextResponse.json(educationData);
}
