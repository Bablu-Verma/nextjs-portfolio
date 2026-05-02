'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useExperiences } from '@/lib/hooks/useApi';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { ExperienceCard } from '@/components/ui/ExperienceCard';

export default function ExperiencePage() {
  const { data: experiences = [], isLoading } = useExperiences();

  if (isLoading) {
    return (
      <Section className="relative">
        <Container>
          <SectionHeader
            badge="Experience"
            title="Work Experience"
            description="Loading..."
          />
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="relative">
      <Container>
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
