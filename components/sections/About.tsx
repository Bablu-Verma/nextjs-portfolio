'use client';

import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'React Native', 'Three.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
  },

  {
    title: 'Infrastructure',
    items: ['Docker', 'AWS', 'Firebase', 'Supabase', 'Netlify', 'Vercel'],
  },
  {
    title: 'Tools & Design',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'PM2', 'Nginx', 'Linux'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Redis', 'PostgreSQL'],
  },
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">

      {/* subtle background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 🧠 LEFT SIDE (Text) */}
          <div className="text-center lg:text-left">
            <SectionHeader
              className="text-center lg:text-left items-center lg:items-start"
              badge="About Me"
              title="Building Scalable & Modern Digital Experiences"
              description=""
            />

            <FadeIn delay={0.3}>
              <p className=" text-muted-foreground leading-relaxed">
                I'm a full-stack developer focused on building high-performance web and mobile applications. I specialize in modern technologies and love turning complex problems into simple, elegant solutions.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                With strong expertise in both frontend and backend development, I help startups and businesses
                create scalable, user-friendly, and production-ready applications. My approach combines clean code,
                performance optimization, and thoughtful design.
              </p>
            </FadeIn>
          </div>

          {/* ⚡ RIGHT SIDE (Skills Grid) */}
          <div className="grid sm:grid-cols-2 gap-6">

            {skillGroups.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.1}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition">

                  <h4 className="font-semibold mb-3 text-primary">
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
}