import { NextResponse } from 'next/server';
import { galleryImages } from '@/lib/data';

export async function GET() {
  return NextResponse.json(galleryImages);
}
