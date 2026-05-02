'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useExperiences } from '@/lib/hooks/useApi';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { ExperienceCard } from '../ui/ExperienceCard';
import { ArrowRight } from 'lucide-react';

export function Experience() {
  const { data: experiences = [], isLoading } = useExperiences();

  if (isLoading) {
    return (
      <Section id="experience" className="relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="experience" className="relative">
      <Container>
        <SectionHeader
          badge="Experience"
          title="Work Experience"
          description="A journey through my professional career and the impactful projects I've delivered."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-8 mt-12">
          {experiences.slice(0, 4).map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </StaggerContainer>
        <FadeIn delay={0.3} className="mt-12 text-center">
          <motion.a
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View All Experience
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </FadeIn>
      </Container>
    </Section>
  );
}
