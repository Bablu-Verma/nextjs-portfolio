'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Card } from '@/components/ui/Card';
import type { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card hover className="group overflow-hidden relative">

            {/* 🖼 Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    )}

                    {project.githubUrl && (
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaGithub className="w-4 h-4" />
                        </motion.a>
                    )}

                </div>
            </div>

            {/* 📄 Content */}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                    {project.shortDescription}
                </p>

                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

        </Card >
    );
}