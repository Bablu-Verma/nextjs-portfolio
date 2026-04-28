'use client';

import { useState, useEffect } from 'react';
import { Section, Container } from '@/components/ui/Section';
import { FadeIn } from '@/components/shared/Animations';
import { useRef } from 'react';

const commands = [
  {
    cmd: 'help',
    output: `
Available commands:

• help       → Show all commands
• about      → About me
• skills     → Technical skills
• projects   → Featured work
• experience → Work experience
• education  → Education details
• contact    → Contact info
• social     → Social links
• resume     → Download resume
• date       → Show current date & time
• whoami     → Show user info
• clear      → Clear terminal
  `,
  },

  {
    cmd: 'about',
    output: `
Hi, I'm Bablu Verma 👋

A passionate Full-Stack Developer with 4+ years of experience.
I specialize in building scalable web & mobile applications using modern technologies.

Focused on performance, clean code, and great user experience.
    `,
  },

  {
    cmd: 'skills',
    output: `
Frontend:
- React, Next.js, TypeScript, Tailwind CSS
- React Native, Three.js

Backend:
- Node.js, Express, GraphQL, REST APIs

Database:
- MongoDB, PostgreSQL, Redis

DevOps:
- Docker, AWS, Vercel, Firebase
    `,
  },

  {
    cmd: 'projects',
    output: `
Featured Projects:

1. E-Commerce Platform
   → Full-stack app with payments & admin panel

2. SaaS Dashboard
   → Analytics dashboard with real-time data

3. Portfolio Website
   → Modern animated portfolio (this one 😉)

Type "open project" (coming soon feature)
    `,
  },

  {
    cmd: 'experience',
    output: `
Experience:

• 4+ Years in Full Stack Development
• Worked with startups & freelance clients
• Delivered 20+ production applications
• Strong focus on scalable architecture
    `,
  },

  {
    cmd: 'education',
    output: `
Education:

Bachelor's Degree in Computer Science
Continuous self-learning in modern web technologies
    `,
  },

  {
    cmd: 'contact',
    output: `
Contact Me:

📧 Email: jbabluverma@gmail.com
🌐 Portfolio: bablu.dev
    `,
  },

  {
    cmd: 'social',
    output: `
Social Links:

GitHub: github.com/bablu-verma
LinkedIn: linkedin.com/in/babluverma
    `,
  },

  {
    cmd: 'resume',
    output: `
Download Resume:

Type this in browser:
→ /Bablu_Verma_Resume.pdf
    `,
  },
];


export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);

  const terminalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.toLowerCase().trim();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === 'date') {
      setHistory((prev) => [
        ...prev,
        { cmd: 'date', output: new Date().toString() },
      ]);
      return;
    }

    if (trimmedCmd === 'whoami') {
      setHistory((prev) => [
        ...prev,
        { cmd: 'whoami', output: 'bablu-verma (Full Stack Developer)' },
      ]);
      return;
    }

    const matched = commands.find((c) => c.cmd === trimmedCmd);

    if (matched) {
      setHistory((prev) => [...prev, matched]);
    } else if (trimmedCmd) {
      setHistory((prev) => [
        ...prev,
        { cmd: trimmedCmd, output: `Command not found: ${trimmedCmd}` },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <Section className="relative">
      <Container>
        <FadeIn className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center text-sm text-muted-foreground">
                bablu.dev@portfolio ~ terminal
              </div>
            </div>

            <div ref={terminalRef} className="bg-[#0d0d12] p-6 h-[400px] overflow-y-auto font-mono text-sm">
              <div className="text-green-400 mb-4">
                <p>Welcome to my interactive terminal!</p>
                <p>Type &apos;help&apos; to see available commands.</p>
              </div>

              {history.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">~/portfolio</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="text-white">{item.cmd}</span>
                  </div>
                  <div className="text-muted-foreground mt-1 pl-4 whitespace-pre-wrap">
                    {item.output}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2">
                <span className="text-primary">~/portfolio</span>
                <span className="text-muted-foreground">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white"

                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}