'use client';

import { useHomeData } from '@/hooks/useApi';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { About } from './About';
import { Skills } from './Skills';
import { Services } from './Services';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Education } from './Education';
import { Workflow } from './Workflow';
import { Values } from './Values';
import { CTA } from './CTA';
import { Gallery } from './Gallery';

import { Contact } from './Contact';

import HashScroller from '@/components/ui/HashScroller';


export default function HomeContent() {
  const { data } = useHomeData();

  return (
    <div>
      <HashScroller />
      <main>
        <Hero />
        <Marquee />
        {data && (
          <>
            <About data={data.about} />
            <Skills data={data.skills} />
            <Services data={data.services} />
            <Projects data={data.projects} />
            <Experience data={data.experiences} />
            <Education data={data.education} />
            <Workflow data={data.workflowSteps} />
            <Values />
            <CTA />
            <Gallery data={data.gallery} />

            <Contact />
          </>
        )}
      </main>
    </div>
  );
}
