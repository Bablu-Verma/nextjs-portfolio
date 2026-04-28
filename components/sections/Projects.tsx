'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { projects } from '@/lib/data';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

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