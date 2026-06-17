'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useSkills } from '@/hooks/useApi';
import type { SkillGroup } from '@/types';
import { FadeIn } from '@/components/shared/Animations';
import Image from 'next/image';

export function Skills({ data: propData }: { data?: SkillGroup[] }) {
  const { data: fetchedData = [] } = useSkills(!propData);
  const skillGroups = propData ?? fetchedData;

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
                <h4 className="font-semibold mb-4 text-primary">
                  {group.title}
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/tile relative px-3 py-2.5 rounded-lg border border-border bg-secondary/50 hover:bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-center gap-2">
                        {item.image && (
                          <div className="w-5 h-5 relative flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="text-sm text-muted-foreground group-hover/tile:text-foreground transition-colors">
                          {item.name}
                        </span>
                      </div>

                      {/* <div className="absolute -top-1.5 -right-1.5 flex gap-0.5 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-200">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < Math.round(item.rating / 2)
                                ? 'bg-primary'
                                : 'bg-border'
                            }`}
                          />
                        ))}
                      </div> */}
                    </div>
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
