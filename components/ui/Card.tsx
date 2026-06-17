'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-300';

    const variants = {
      default: 'bg-card text-card-foreground border border-border',
      glass: 'glass bg-secondary/50',
      gradient: 'gradient-border bg-card',
    };

    const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 cursor-pointer' : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };