'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/Animations';
import { useThemeStore } from '@/store';
import type { Project } from '@/types';
import { BackButton } from '@/components/ui/BackButton';

interface ProjectDetailProps {
  project: Project;
}

export default function ClientProjectDetail({ project }: ProjectDetailProps) {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${theme}`}>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-8 py-12 relative">
        <BackButton />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Challenges
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs text-destructive font-medium">{i + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Solutions
                  </h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Results
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {project.results.map((result, i) => (
                      <div key={i} className="p-4 rounded-xl glass">
                        <p className="text-2xl font-bold font-heading gradient-text">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-1">
            <FadeIn delay={0.3}>
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-xl glass">
                  <h3 className="font-semibold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full justify-start">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Site
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full justify-start">
                          <FaGithub className="w-4 h-4 mr-2" />
                          View Source Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 rounded-xl glass">
                  <h3 className="font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-md bg-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl glass">
                  <h3 className="font-semibold mb-4">Need Similar Project?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I can help you build something amazing. Let&apos;s discuss your requirements.
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}