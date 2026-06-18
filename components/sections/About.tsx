'use client';

import { Section, Container } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';
import { useAbout } from '@/hooks/useApi';
import type { AboutData } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';




export function About({ data: propData }: { data?: AboutData }) {
  const { data: fetchedData } = useAbout(!propData);
  const about = propData ?? fetchedData;

  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 blur-[150px] rounded-full" />

      <Container>
        <div className="grid lg:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for Work
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Hi, I&apos;m{' '}
                <span className="gradient-text">Bablu Verma</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Full Stack Developer specializing in building high-performance web & mobile applications with React, Node.js, and modern cloud infrastructure.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {about?.bio.map((paragraph, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.1}>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="/#projects">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    View My Work
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </a>
                <a href="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-medium hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    Let&apos;s Talk
                  </motion.button>
                </a>
              </div>
            </FadeIn>

          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 flex items-center justify-center">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative">

                <div className="relative w-[85vw] h-[85vw] sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] max-w-[28rem] rounded-2xl overflow-hidden border-2 border-border">
                  {about?.image && (
                    <Image
                      src={about.image}
                      alt="About me"
                      fill
                      className="object-cover"
                      priority
                    />
                  )}

                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-dashed border-primary/40"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl bg-card border border-border shadow-lg"
                >
                  <p className="text-sm font-medium gradient-text">⚡ Let's Code</p>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}