'use client';

import { useState } from 'react';
import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { testimonials } from '@/lib/data';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 2 : 1;

  const next = () => {
    setCurrent((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev - itemsPerView < 0
        ? Math.max(testimonials.length - itemsPerView, 0)
        : prev - itemsPerView
    );
  };

  const visibleItems = testimonials.slice(current, current + itemsPerView);

  return (
    <Section className="bg-secondary/30 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Clients Say"
          description="Feedback from people I've worked with"
        />

        <div className="max-w-6xl mx-auto">

          {/* 🧠 CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleItems.map((item, i) => (
              <FadeIn key={i}>
                <motion.div
                  className="p-6 md:p-8 rounded-2xl glass h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* ⭐ Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* 💬 Content */}
                  <p className="text-base md:text-lg mb-6 leading-relaxed">
                    “{item.content}”
                  </p>

                  {/* 👤 User */}
                  <div className="flex items-center gap-4">


                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.role} • {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* 🔘 Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </Container>
    </Section>
  );
}