'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useProjects } from '@/lib/hooks/useApi';
import { ProjectCard } from '../ui/ProjectCard';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const { data: projects = [], isLoading } = useProjects();

  const featuredProjects = projects.filter((p) => p.featured);

  if (isLoading) {
    return (
      <Section id="projects" className="relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="projects" className="relative">
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          description="A selection of my recent projects showcasing my expertise in building modern web applications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </FadeIn>
      </Container>
    </Section>
  );
}
