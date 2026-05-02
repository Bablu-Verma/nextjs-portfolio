'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useEducation } from '@/lib/hooks/useApi';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Calendar, BookOpen } from 'lucide-react';

export function Education() {
  const { data: education = [], isLoading } = useEducation();

  if (isLoading) {
    return (
      <Section className="bg-secondary/30 relative overflow-hidden">
        <Container className="relative">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items">
          <div>
            <SectionHeader
              badge="Education"
              className="text-center lg:text-left items-center lg:items-start"
              title="My Academic Journey"
              description=""
            />

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-center md:text-left leading-relaxed max-w-md">
                My education has played a key role in shaping my development skills.
                Along with formal learning, I continuously improve through real-world projects
                and self-learning in modern technologies.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(232,93,4,0.12)] transition-all duration-300"
                >
                  <div className="absolute -top-5 left-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-md">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 mt-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition">
                    {edu.degree}
                  </h3>

                  <p className="text-primary font-medium mb-1">
                    {edu.field}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>

                  {edu.description && (
                    <p className="mt-3 text-sm text-muted-foreground border-t border-border pt-3">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
