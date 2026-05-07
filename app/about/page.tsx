import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Marquee } from "@/components/sections/Marquee";
import { Terminal } from "@/components/sections/Terminal";
import { Section } from "@/components/ui/Section";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  return (
    <Section className="relative">
      <About />
      <Marquee />
      <Terminal />
      <Education />
    </Section>
  );
}
