'use client';

import { useState } from 'react';
import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { useFaqs } from '@/lib/hooks/useApi';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { data: faqs = [], isLoading } = useFaqs();

  if (isLoading) {
    return (
      <Section className="relative">
        <Container>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 rounded-xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          <FadeIn>
            <div className="lg:sticky lg:top-24 self-start">
              <SectionHeader
                badge="FAQ"
                className="text-center lg:text-left items-center lg:items-start"
                title="Frequently Asked Questions"
                description=""
              />

              <p className="mt-6 text-center md:text-left text-base text-muted-foreground leading-relaxed">
                I believe in transparency and smooth communication. Here are some common things clients usually ask before starting a project.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div key={faq.id} variants={staggerItem}>
                <div
                  className={cn(
                    'rounded-xl border transition-all duration-300 overflow-hidden',
                    openId === faq.id
                      ? 'bg-card border-primary/40 shadow-lg shadow-primary/10'
                      : 'bg-secondary/30 border-border hover:border-primary/30'
                  )}
                >
                  <button
                    onClick={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
