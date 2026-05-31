'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useSkills } from '@/hooks/useApi';
import { FadeIn } from '@/components/shared/Animations';

export function Skills() {
  const { data: skillGroups = [] } = useSkills();

  return (
    <Section id="skills" className="relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Skills"
          title="Technical Expertise"
          description="Technologies and tools I work with daily"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.1}>
              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition">
                <h4 className="font-semibold mb-3 text-primary">
                  {group.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-base px-4 py-1.5 rounded-xl border border-primary/10 bg-primary/5 text-primary/80 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
