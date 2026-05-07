'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';
import { useAbout } from '@/lib/hooks/useApi';
import { Loader2 } from 'lucide-react';

export function About() {
  const { data: about, isLoading } = useAbout();

  if (isLoading) {
    return (
      <Section id="about" className="relative overflow-hidden">
        <Container>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="about" className="relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="text-center lg:text-left">
            <SectionHeader
              className="text-center lg:text-left items-center lg:items-start"
              badge="About Me"
              title="Building Scalable & Modern Digital Experiences"
              description=""
            />

            {about?.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <p className={i > 0 ? 'mt-6 text-muted-foreground leading-relaxed' : 'text-muted-foreground leading-relaxed'}>
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {about?.skillGroups.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.1}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition">

                  <h4 className="font-semibold mb-3 text-primary">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
}