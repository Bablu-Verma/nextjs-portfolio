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

• help        → Show all commands
• about       → About me
• skills      → Technical skills
• experience  → Work experience
• education   → Education details
• services    → Services I provide
• contact     → Contact information
• social      → Social profiles

• date        → Show current date & time
• whoami      → Show user info
• clear       → Clear terminal
    `,
  },

  {
    cmd: 'about',
    output: `
Hi, I'm Bablu Verma 👋

Full Stack Developer with 4+ years of experience
building scalable web, backend, and mobile applications.

Specialized in:
• React.js / Next.js
• Node.js / Express.js
• React Native
• PostgreSQL / MongoDB
• Real-time systems & scalable architecture

Focused on performance optimization,
clean architecture, SEO, DevOps,
and production-ready engineering.
    `,
  },

  {
    cmd: 'skills',
    output: `
Frontend & Mobile:
• React.js
• Next.js
• TypeScript
• Tailwind CSS
• React Native
• Redux Toolkit
• React Query
• Material UI

Backend & APIs:
• Node.js
• Express.js
• REST APIs
• GraphQL
• Socket.io
• Redis Pub/Sub
• BullMQ

Database:
• MongoDB
• PostgreSQL
• Redis
• Prisma ORM
• Mongoose

DevOps & Infrastructure:
• Docker
• AWS
• GitHub Actions
• Nginx
• PM2
• Vercel
• Firebase

Testing & Tools:
• Jest
• Postman
• Swagger
• Git & GitHub
    `,
  },

  {
    cmd: 'experience',
    output: `
Work Experience:

4tuners Technologies
→ Full Stack Developer
→ Jul 2025 - Mar 2026

Freekaamaal.com
→ React.js & React Native Developer
→ Sep 2022 - May 2025

Qwerty Code
→ Web Developer
→ Oct 2021 - Aug 2022

Highlights:
• 4+ years industry experience
• Built scalable production systems
• Worked on high traffic applications
• Led frontend & backend architecture
    `,
  },

  {
    cmd: 'education',
    output: `
Education:

Amity University
→ BCA (Cloud & Cyber Security)
→ 2023 - 2026

GBSS School, Delhi
→ Senior Secondary (12th)

Additional Learning:
• Next.js 14 & React Certification
• Full Stack Development Bootcamp
• Continuous self-learning & production experience
    `,
  },

  {
    cmd: 'services',
    output: `
Services:

• Full Stack Web Development
• Backend API Development
• React & Next.js Applications
• React Native Mobile Apps
• Real-time Systems
• Ecommerce Development
• Performance Optimization
• SEO Optimization
• DevOps & Deployment
• Database Architecture
    `,
  },

  {
    cmd: 'contact',
    output: `
Contact Information:

📧 Email:
abc@gmail.com

📍 Location:
Noida, India

📱 Phone:
+91 00000000

🌐 Available for:
Remote / Hybrid / Relocation
    `,
  },

  {
    cmd: 'social',
    output: `
Social Profiles:

GitHub:
github.com/bablu-verma

LinkedIn:
linkedin.com/in/babluverma

Portfolio:
bablu.dev : https://bablu-verma.vercel.app/
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