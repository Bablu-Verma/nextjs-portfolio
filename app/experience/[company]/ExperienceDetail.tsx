'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/Animations';
import { useThemeStore } from '@/store';
import type { Experience } from '@/types';
import { BackButton } from '@/components/ui/BackButton';

interface ExperienceDetailProps {
  experience: Experience;
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${theme}`}>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-8 py-12 relative">
        <BackButton />

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                {experience.current ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                ) : null}
                <span className="text-sm font-medium">
                  {experience.current ? 'Present' : 'Past Role'}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-2">
                {experience.role}
              </h1>
              <p className="text-2xl text-primary font-semibold mb-4">{experience.company}</p>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.startDate} - {experience.current ? 'Present' : experience.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4">About This Role</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs text-primary font-medium">{i + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <h2 className="text-2xl font-semibold font-heading mb-4">Key Achievements</h2>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-1">
              <FadeIn delay={0.5}>
                <div className="sticky top-24 space-y-6">
                  <div className="p-6 rounded-xl glass">
                    <h3 className="font-semibold mb-4">Role Details</h3>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="text-muted-foreground mb-1">Company</dt>
                        <dd className="font-medium">{experience.company}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground mb-1">Position</dt>
                        <dd className="font-medium">{experience.role}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground mb-1">Location</dt>
                        <dd className="font-medium">{experience.location}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground mb-1">Duration</dt>
                        <dd className="font-medium">
                          {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="p-6 rounded-xl glass">
                    <h3 className="font-semibold mb-4">Looking to Hire?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I&apos;m currently open to new opportunities. Let&apos;s connect!
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
    </div>
  );
}