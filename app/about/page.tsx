import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Marquee } from "@/components/sections/Marquee";
import { Section } from "@/components/ui/Section";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  return (
    <Section className="relative">
      <About />
      <Skills />
      <Marquee />
      <Education />
    </Section>
  );
}
