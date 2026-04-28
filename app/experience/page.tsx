'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { experiences } from '@/lib/data';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { ArrowRight } from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';

export default function ExperiencePage() {
    return (
        <Section id="experience" className="relative">
            <Container>
                <BackButton />
                <SectionHeader
                    badge="Experience"
                    title="Work Experience"
                    description="A journey through my professional career and the impactful projects I've delivered."
                />

                <StaggerContainer className="grid md:grid-cols-2 gap-8 mt-12">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} exp={exp} />
                    ))}
                </StaggerContainer>

            </Container>
        </Section>
    );
}