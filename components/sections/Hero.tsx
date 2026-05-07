'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/Animations';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 md:px-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* ✨ Availability Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Scalable systems. Clean UI. Real products.
              </span>
            </div>
          </FadeIn>



          {/* 💥 Headline */}
          <FadeIn delay={0.3}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 leading-tight">
              I build{' '}
              <span className="gradient-text">high-performance</span> web & mobile apps
            </h1>
          </FadeIn>

          {/* 👋 Intro */}
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Hi, I'm{' '}
              <span className="font-semibold text-foreground">
                Bablu Verma
              </span>{' '}
              — Full Stack Developer specializing in React, Next.js & scalable backend systems.
            </p>
          </FadeIn>

          {/* ⚡ Typing Animation */}
          <FadeIn delay={0.5}>
            <div className="text-xl md:text-2xl text-primary font-medium mb-6 h-[40px]">
              <TypeAnimation
                sequence={[
                  'I build fast & scalable apps',
                  1500,
                  'I create seamless user experiences',
                  1500,
                  'I turn ideas into real products',
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </FadeIn>


          {/* 🔗 Social Icons */}
          <FadeIn delay={0.7}>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/bablu-verma" target="_blank">
                <FaGithub className="w-6 h-6 hover:text-primary transition transform hover:scale-110" />
              </a>
              <a href="https://linkedin.com/in/babluverma" target="_blank">
                <FaLinkedin className="w-6 h-6 hover:text-primary transition transform hover:scale-110" />
              </a>
              {/* <a href="mailto:jbabluverma@gmail.com">
                <Mail className="w-6 h-6 hover:text-primary transition transform hover:scale-110" />
              </a> */}
            </div>
          </FadeIn>

          {/* 🚀 CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const projects = document.getElementById('projects');
                  projects?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <a href="/bablu_verma_full_stack_site.pdf" download>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </a>
            </div>
          </FadeIn>

          {/* 📊 Stats */}
          <FadeIn delay={0.9}>
            <div className="mt-14 flex items-center justify-center gap-10 flex-wrap">
              <div>
                <p className="text-3xl font-bold gradient-text">4+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">20+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </motion.div>
    </section>
  );
}