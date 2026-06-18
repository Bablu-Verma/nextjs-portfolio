'use client';

import { useState } from 'react';
import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useEducation } from '@/hooks/useApi';
import type { EducationData } from '@/types';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export function Education({ data: propData }: { data?: EducationData }) {
  const { data: fetchedData } = useEducation(!propData);
  const educationData = propData ?? fetchedData;
  const [showAll, setShowAll] = useState(false);
  const education = educationData?.items ?? [];
  const intro = educationData?.intro ?? [];
  const displayed = showAll ? education : education.slice(0, 3);

  return (
    <Section className="bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              badge="Education"

              title="My Academic Journey"
              description="A foundation built on continuous learning and academic excellence in computer science"
            />

            <FadeIn delay={0.2}>
              {intro.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-2 text-left max-w-2xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </FadeIn>
          </div>

          <div className="space-y-6">
            {displayed.map((edu, index) => (
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
            {education.length > 3 && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_4px_15px_rgba(232,93,4,0.1)] transition-all duration-300"
                >
                  {showAll ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>View All ({education.length}) <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
