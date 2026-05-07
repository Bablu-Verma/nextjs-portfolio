import { NextResponse } from 'next/server';
import { aboutData } from '@/lib/data';

export async function GET() {
  return NextResponse.json(aboutData);
}
