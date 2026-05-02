'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useProjects } from '@/lib/hooks/useApi';
import { ProjectCard } from '@/components/ui/ProjectCard';

export default function AllProjects() {
  const { data: projects = [], isLoading } = useProjects();

  if (isLoading) {
    return (
      <Section className="relative">
        <Container>
          <SectionHeader
            badge="Projects"
            title="Featured Work"
            description="Loading..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="relative">
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          description="A selection of my recent projects showcasing my expertise in building modern web applications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
