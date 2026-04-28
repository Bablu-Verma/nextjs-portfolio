'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
    exp: any;
}

export function ExperienceCard({ exp }: ExperienceCardProps) {
    return (
        <motion.div
            className="group relative"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
        >
            <div className="relative h-full p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_10px_40px_rgba(232,93,4,0.15)]">




                {/* 💼 Icon */}
                <div className="w-12 h-12 absolute right-6 top-6 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                </div>

                {/* 💼 Role */}
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                </h3>

                {/* 🏢 Company */}
                <p className="text-primary font-medium mb-4">
                    {exp.company}
                </p>

                {/* 📅 + 📍 */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                    </div>
                </div>

                {/* 📝 Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {exp.description}
                </p>

                {/* 🏷 Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {exp.responsibilities.slice(0, 4).map((resp: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                            {resp}
                        </span>
                    ))}
                </div>

                {/* 🔗 CTA */}
                <Link
                    href={`/experience/${exp.companySlug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
                >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {/* ✨ Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-primary/5 to-accent/5" />

            </div>
        </motion.div>
    );
}