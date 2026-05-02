import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Education } from "@/components/sections/Education";
import { Terminal } from "@/components/sections/Terminal";
import { FadeIn } from "@/components/shared/Animations";
import { BackButton } from "@/components/ui/BackButton";
import { Card } from "@/components/ui/Card";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { getProjects } from "@/lib/api";
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default async function ContactPage() {
  const projects = await getProjects();

  return (
    <Section className="relative">
      <Contact />
    </Section>
  );
}
