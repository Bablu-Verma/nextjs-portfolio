

import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Terminal } from '@/components/sections/Terminal';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Workflow } from '@/components/sections/Workflow';
import { Values } from '@/components/sections/Values';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { CTA } from '@/components/sections/CTA';
import HashScroller from '@/components/ui/HashScroller';

export default function Home() {


  return (
    <div >
      <HashScroller />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Terminal />
        <Services />
        <Projects />

        <Experience />
        <Education />
        <Workflow />
        <Values />
        <CTA />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />

      </main>


    </div>
  );
}