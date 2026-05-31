'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';
import { useAbout } from '@/hooks/useApi';
import Image from 'next/image';
export function About() {
  const { data: about } = useAbout();

  return (
    <Section id="about" className="relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">



          <div >
            <SectionHeader
              badge="About Me"
              title="Hi, I'm Bablu Verma"
              description="Passionate about crafting high-performance web applications with clean code and modern technologies"
            />

            <div className="text-left">
              {about?.bio.map((paragraph, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.1}>
                  <p className='mb-2 text-muted-foreground text-base leading-relaxed'>
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            {about?.image && (
              <Image
                height={200}
                width={200}
                src={about.image}
                alt="About me"
                className="md:rounded-2xl w-full md:max-w-md object-cover "
              />
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}