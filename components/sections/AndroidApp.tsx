'use client';

import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Download, Zap, Shield, RefreshCw, Smartphone } from 'lucide-react';


// new apk url 
const apkurl = 'https://expo.dev/artifacts/eas/cwF6F2xFwjutwasBXekkpf.apk'



export function AndroidApp() {
  return (
    <Section className="pt-20 relative overflow-hidden">
      <Container className="relative">
        <div id='apkInstall' className="md:flex justify-between gap-12  items-center ">
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
              <a href={apkurl} className="flex items-center">
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
