'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import {
  Code,
  Zap,
  Layers,
  Server,
  Laptop,
  Gauge,
  ArrowUpRight,
} from 'lucide-react';

export function Marquee() {
  const techStack = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'GSAP', icon: Zap },
    { name: 'Tailwind', icon: SiTailwindcss },
  ];

  const concepts = [
    { name: 'Architecture', icon: Layers },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: Laptop },
    { name: 'Scalability', icon: ArrowUpRight },
    { name: 'Performance', icon: Gauge },
    { name: 'Mobile', icon: FaMobileAlt },
  ];

  const renderItems = (items: any[]) =>
    [...items, ...items].map((item, i) => {
      const Icon = item.icon;
      return (
        <div
          key={i}
          className="flex items-center gap-4 mx-10 whitespace-nowrap group"
        >
          <Icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition duration-300" />
          <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/70 group-hover:text-foreground transition duration-300">
            {item.name}
          </span>
        </div>
      );
    });

  return (
    <section className="relative py-14 overflow-hidden border-y border-border bg-secondary/30 transform -skew-y-1">

      {/* 🌫️ Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />

      {/* 🔥 Tech Stack (← Left) */}
      <motion.div
        className="flex mb-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: 'linear',
        }}
      >
        {renderItems(techStack)}
      </motion.div>

      {/* 🔥 Concepts / Skills (→ Right) */}
      <motion.div
        className="flex"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: 'linear',
        }}
      >
        {renderItems(concepts)}
      </motion.div>
    </section>
  );
}