'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Search, Code, Palette, Rocket } from 'lucide-react';
import { workflowSteps } from '@/lib/data';

const icons = [Search, Code, Palette, Rocket];

export function Workflow() {
  return (
    <Section className="relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <Container className="relative">
        <SectionHeader
          badge="Process"
          title="My Workflow"
          description="A smooth and structured process to build high-quality products"
        />

        {/* 🔥 Timeline */}
        <div className="relative mt-20">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2" />

          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const Icon = icons[index] || Search;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full lg:w-1/2 px-6"
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border backdrop-blur-xl hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 group">

                      {/* Icon */}
                      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                        {step.title}
                      </h3>

                      {/* Desc */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold shadow-lg z-10">
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}