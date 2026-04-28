'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)} {...props}>
      {children}
    </section>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 md:px-8', className)} {...props}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}