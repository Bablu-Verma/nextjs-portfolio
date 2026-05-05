'use client';

import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Download, Zap, Shield, RefreshCw, Smartphone } from 'lucide-react';

export function AndroidApp() {
  return (
    <Section className="pt-20 relative overflow-hidden">


      <Container className="relative">
        <div className="md:flex justify-between gap-12  items-center ">
          <FadeIn className='max-w-[700]'>

            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Install Our <span className="gradient-text">Android Application</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Download and install our Android APK to explore our complete portfolio directly on your device. Experience smooth performance, modern design, and easy navigation.
            </p>

          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <Button size="lg" className="group">
              <a href='https://expo.dev/artifacts/eas/f48QeTjczqJRHszwKqi5vG.apk' className="flex items-center">
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Install Now
              </a>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
