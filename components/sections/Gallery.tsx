'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useGalleryImages } from '@/lib/hooks/useApi';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GalleryCard } from '../ui/GalleryCard';

export function Gallery() {
  const { data: images = [], isLoading } = useGalleryImages();

  if (isLoading) {
    return (
      <Section className="relative overflow-hidden">
        <Container>
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
          {images.slice(0, 6).map((image, index) => (
            <GalleryCard key={index} image={image} index={index} />
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <motion.a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View All Gallery
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </FadeIn>
      </Container>
    </Section>
  );
}
