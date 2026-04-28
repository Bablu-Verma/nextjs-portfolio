'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">

      {/* ✨ subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 text-center relative">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-2xl font-heading max-w-2xl mx-auto leading-relaxed"
        >
          “Great products are built with passion, precision, and purpose.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          — Crafted by Bablu Verma
        </motion.p>

      </div>
    </footer>
  );
}