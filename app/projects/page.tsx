'use client'

import { FadeIn } from "@/components/shared/Animations";
import { BackButton } from "@/components/ui/BackButton";
import { Card } from "@/components/ui/Card";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function AllProjects() {


    return (
        <Section className="relative">
            <Container>
                {/* <BackButton /> */}
                <SectionHeader
                    badge="Projects"
                    title="Featured Work"
                    description="A selection of my recent projects showcasing my expertise in building modern web applications"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>


            </Container>
        </Section>
    );
}