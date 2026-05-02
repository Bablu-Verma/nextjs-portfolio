'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useServices } from '@/lib/hooks/useApi';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Smartphone,
  Users,
  Database,
  Cloud,
  GitBranch,
  Terminal
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  palette: Palette,
  smartphone: Smartphone,
  users: Users,
  database: Database,
  cloud: Cloud,
  'git-branch': GitBranch,
  terminal: Terminal,
};

export function Services() {
  const { data: services = [], isLoading } = useServices();

  if (isLoading) {
    return (
      <Section id="services" className="relative">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="services" className="relative">
      <Container>
        <SectionHeader
          badge="Services"
          title="What I Can Do For You"
          description="Comprehensive development services tailored to bring your vision to life"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="relative h-full p-6 group overflow-hidden border border-border hover:border-primary/40 transition duration-300">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 to-transparent" />

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground hover:text-primary transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
