'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { galleryImages } from '@/lib/data';
import { GalleryCard } from '@/components/ui/GalleryCard';
import { BackButton } from '@/components/ui/BackButton';

export default function GalleryPage() {


    return (
        <Section className="relative overflow-hidden">
            <Container>
                <BackButton />
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