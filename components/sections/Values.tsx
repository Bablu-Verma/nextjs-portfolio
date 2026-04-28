'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Heart, Code, Palette, Globe, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'I genuinely love what I do and it reflects in every product I build.',
  },
  {
    icon: Code,
    title: 'Quality',
    description: 'Clean, scalable, and maintainable code is always my priority.',
  },
  {
    icon: Palette,
    title: 'Creativity',
    description: 'I solve problems with fresh ideas and modern design thinking.',
  },
  {
    icon: Globe,
    title: 'Reliability',
    description: 'Consistent delivery with trust, transparency, and accountability.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great products are built together with clear communication.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Optimized workflows for faster and better results.',
  },
];

export function Values() {
  return (
    <Section className="bg-secondary/30 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <Container className="relative">
        <SectionHeader
          badge="Values"
          title="My Core Values"
          description="Principles that define how I work and deliver high-quality results"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="group relative"
                whileHover={{ y: -6 }}
              >
                {/* ✨ Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 blur transition duration-300" />

                {/* 📦 Card */}
                <div className="relative h-full p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border group-hover:border-primary/40 transition-all duration-300">

                  {/* 🔥 Icon Badge */}
                  <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* 🧠 Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>

                  {/* 📝 Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* 🔥 Bottom Accent Line */}
                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />

                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}