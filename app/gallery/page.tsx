'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useGalleryImages } from '@/lib/hooks/useApi';
import { GalleryCard } from '@/components/ui/GalleryCard';

export default function GalleryPage() {
  const { data: galleryImages = [], isLoading } = useGalleryImages();

  if (isLoading) {
    return (
      <Section className="relative overflow-hidden">
        <Container>
          <SectionHeader
            badge="Gallery"
            title="Moments & Memories"
            description="Loading..."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Gallery"
          title="Moments & Memories"
          description="A glimpse into my work environment and collaborative moments"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} image={image} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
