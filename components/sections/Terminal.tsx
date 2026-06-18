'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTerminalDataStore } from '@/store';
import type { HomePageData } from '@/types';

const BANNER = `
\x1b[38;5;208m  ╔══════════════════════════════════════╗
  ║     BABLU VERMA - INTERACTIVE CLI     ║
  ║     Full Stack Developer              ║
  ╚══════════════════════════════════════╝\x1b[0m

  Type \x1b[38;5;208mhelp\x1b[0m to see available commands.
`;

const projectUrls: Record<string, string> = {
  '1': 'https://woost.io/',
  '2': 'https://play.google.com/store/apps/details?id=com.woost&hl=en_IN',
  '3': 'https://freekaamaal.com/',
  '4': 'https://freekaamaal.com/',
  '5': 'https://www.gaurastra.com',
  '6': 'https://github.com/Bablu-Verma/automation-saas',
  '7': 'https://test.gaurastra.com/offline/login',
  '8': 'https://play.google.com/store/apps/details?id=com.cinchoffline.ccm',
};

const ansiToHtml = (text: string): string => {
  return text
    .replace(/\x1b\[38;5;208m/g, '<span class="text-[#E85D04]">')
    .replace(/\x1b\[0m/g, '</span>')
    .replace(/\n/g, '<br/>');
};

const HELP_TEXT = `
\x1b[38;5;208mAvailable commands:\x1b[0m

  \x1b[38;5;208mabout\x1b[0m        About Bablu Verma
  \x1b[38;5;208mskills\x1b[0m       Technical skills & technologies
  \x1b[38;5;208mexperience\x1b[0m   Work experience
  \x1b[38;5;208meducation\x1b[0m    Education & certifications
  \x1b[38;5;208mservices\x1b[0m     Services I provide
  \x1b[38;5;208mprojects\x1b[0m     List featured projects
  \x1b[38;5;208mcontact\x1b[0m      Contact information
  \x1b[38;5;208msocial\x1b[0m       Social profiles & links

  \x1b[38;5;208mwhoami\x1b[0m       Current user info
  \x1b[38;5;208mdate\x1b[0m         Current date & time
  \x1b[38;5;208mgithub\x1b[0m       Open GitHub profile
  \x1b[38;5;208mlinkedin\x1b[0m     Open LinkedIn profile
  \x1b[38;5;208mecho\x1b[0m         Repeat a message
  \x1b[38;5;208msudo\x1b[0m         Try it 😉
  \x1b[38;5;208mclear\x1b[0m        Clear terminal
`;

function formatAbout(data: HomePageData): string {
  const { about } = data;
  return `
\x1b[38;5;208m  ${about.bio[0] || 'Bablu Verma'}\x1b[0m
  ────────────────────────────────────────────
  ${about.bio.slice(1).join('\n  ')}

  \x1b[38;5;208mSpecialized in:\x1b[0m
${data.skills.slice(0, 3).map((g) => `  • ${g.title}: ${g.items.slice(0, 3).map((s) => s.name).join(', ')}`).join('\n')}
`;
}

function formatSkills(data: HomePageData): string {
  const sections = data.skills.map((group) =>
    `  \x1b[38;5;208m${group.title}:\x1b[0m\n    ${group.items.map((s) => s.name).join('  ')}`
  ).join('\n\n');
  return `
\x1b[38;5;208m  Technical Skills\x1b[0m
  ────────────────────────────────────────────

${sections}
`;
}

function formatExperience(data: HomePageData): string {
  const items = data.experiences.map((exp) =>
    `  \x1b[38;5;208m${exp.company}\x1b[0m
  → ${exp.role}
  → ${exp.startDate} - ${exp.endDate || 'Present'}`
  ).join('\n\n');
  return `
\x1b[38;5;208m  Work Experience\x1b[0m
  ────────────────────────────────────────────

${items}
`;
}

function formatEducation(data: HomePageData): string {
  const items = data.education.items.map((edu) =>
    `  \x1b[38;5;208m${edu.institution}\x1b[0m
  → ${edu.degree}${edu.field ? ` - ${edu.field}` : ''}
  → ${edu.startDate} - ${edu.endDate}`
  ).join('\n\n');
  return `
\x1b[38;5;208m  Education\x1b[0m
  ────────────────────────────────────────────

${items}
`;
}

function formatServices(data: HomePageData): string {
  const items = data.services.map((s) =>
    `  \x1b[38;5;208m• ${s.title}\x1b[0m
    ${s.description}`
  ).join('\n\n');
  return `
\x1b[38;5;208m  Services\x1b[0m
  ────────────────────────────────────────────

${items}
`;
}

function formatProjects(data: HomePageData): string {
  const items = data.projects.map((p, i) =>
    `  \x1b[38;5;208m[${i + 1}]\x1b[0m  ${p.title}  — ${p.shortDescription}`
  ).join('\n');
  return `
\x1b[38;5;208m  Featured Projects\x1b[0m
  ────────────────────────────────────────────

  Run \x1b[38;5;208mrepo <number>\x1b[0m to open a project:

${items}
`;
}

const CONTACT_OUTPUT = `
\x1b[38;5;208m  Contact Information\x1b[0m
  ────────────────────────────────────────────

  📧 \x1b[38;5;208mEmail:\x1b[0m     bablu@example.com
  📍 \x1b[38;5;208mLocation:\x1b[0m  Noida, India
  🌐 \x1b[38;5;208mAvailable:\x1b[0m Remote / Hybrid / Relocation
`;

const SOCIAL_OUTPUT = `
\x1b[38;5;208m  Social Profiles\x1b[0m
  ────────────────────────────────────────────

  \x1b[38;5;208mGitHub:\x1b[0m     github.com/bablu-verma
  \x1b[38;5;208mLinkedIn:\x1b[0m   linkedin.com/in/babluverma
  \x1b[38;5;208mPortfolio:\x1b[0m  bablu-verma.vercel.app
`;

const cmdNames = ['help', 'about', 'skills', 'experience', 'education', 'services', 'projects', 'contact', 'social'];

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: '', output: BANNER },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { homeData, isLoading, fetchHomeData } = useTerminalDataStore();

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      fetchHomeData();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (input.trim()) {
      const matches = cmdNames
        .filter((c) => c.startsWith(input.toLowerCase().trim()) && c !== input.toLowerCase().trim());
      setSuggestions(matches.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleEscape = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && document.activeElement !== inputRef.current) {
        handleEscape();
      }
      if (e.ctrlKey && e.key === '`' && !isOpen) {
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isOpen, handleEscape]);

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.toLowerCase().trim();

    if (!trimmedCmd) return;

    setCmdHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === 'clear') {
      setHistory([{ cmd: '', output: BANNER }]);
      return;
    }

    if (trimmedCmd === 'date') {
      setHistory((prev) => [
        ...prev,
        { cmd: 'date', output: new Date().toLocaleString() },
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

    if (trimmedCmd === 'github') {
      window.open('https://github.com/bablu-verma', '_blank');
      setHistory((prev) => [
        ...prev,
        { cmd: 'github', output: 'Opening GitHub profile...' },
      ]);
      return;
    }

    if (trimmedCmd === 'linkedin') {
      window.open('https://linkedin.com/in/babluverma', '_blank');
      setHistory((prev) => [
        ...prev,
        { cmd: 'linkedin', output: 'Opening LinkedIn profile...' },
      ]);
      return;
    }

    if (trimmedCmd === 'sudo') {
      setHistory((prev) => [
        ...prev,
        {
          cmd: 'sudo',
          output: `
  ╔══════════════════════════════════════╗
  ║  🎉  You have super powers now!     ║
  ║  Just kidding — keep being awesome!  ║
  ╚══════════════════════════════════════╝
          `,
        },
      ]);
      return;
    }

    if (trimmedCmd.startsWith('echo ')) {
      const message = trimmedCmd.slice(5);
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: message }]);
      return;
    }

    if (trimmedCmd.startsWith('repo ')) {
      const num = trimmedCmd.slice(5).trim();
      const idx = parseInt(num, 10) - 1;
      const project = homeData?.projects[idx];
      const url = project?.liveUrl || projectUrls[num];
      if (url) {
        window.open(url, '_blank');
        setHistory((prev) => [
          ...prev,
          { cmd: trimmedCmd, output: `Opening ${project?.title || `project ${num}`}...` },
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          { cmd: trimmedCmd, output: `Project "${num}" not found. Type 'projects' to see the list.` },
        ]);
      }
      return;
    }

    if (trimmedCmd === 'help') {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: HELP_TEXT }]);
      return;
    }

    if (trimmedCmd === 'about' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatAbout(homeData) }]);
      return;
    }

    if (trimmedCmd === 'skills' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatSkills(homeData) }]);
      return;
    }

    if (trimmedCmd === 'experience' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatExperience(homeData) }]);
      return;
    }

    if (trimmedCmd === 'education' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatEducation(homeData) }]);
      return;
    }

    if (trimmedCmd === 'services' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatServices(homeData) }]);
      return;
    }

    if (trimmedCmd === 'projects' && homeData) {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: formatProjects(homeData) }]);
      return;
    }

    if (trimmedCmd === 'contact') {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: CONTACT_OUTPUT }]);
      return;
    }

    if (trimmedCmd === 'social') {
      setHistory((prev) => [...prev, { cmd: trimmedCmd, output: SOCIAL_OUTPUT }]);
      return;
    }

    const msg = trimmedCmd
      ? `Command not found: ${trimmedCmd}. Type 'help' for available commands.`
      : '';
    setHistory((prev) => [
      ...prev,
      { cmd: trimmedCmd, output: msg },
    ]);
  }, [homeData]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setSuggestions([]);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(cmdHistory[newIndex]);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
      return;
    }

    if (e.key === 'Escape') {
      setSuggestions([]);
    }
  };

  const renderOutput = (output: string) => {
    if (!output.includes('\x1b[')) {
      return output;
    }
    return <span dangerouslySetInnerHTML={{ __html: ansiToHtml(output) }} />;
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-8 bottom-24 z-50 w-14 h-14 rounded-2xl bg-[#0a0a0f] border-2 border-green-400/70 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center hover:border-green-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-90 transition-all duration-200 font-mono group cursor-pointer"
        title="Open Terminal (Ctrl+`)"
        whileTap={{ scale: 0.85 }}
        aria-label="Toggle terminal"
      >
        {/* Tooltip label */}
        <span className="absolute -top-10 right-0 px-3 py-1.5 rounded-lg bg-[#0a0a0f] border border-green-500/30 text-green-400 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg shadow-green-500/10">
          Terminal ▾
        </span>

        {/* Pulsing glow ring */}
        <span className="absolute inset-0 rounded-2xl border-2 border-green-400/30 animate-pulse-slow" />

        {/* Subtle ambient glow */}
        <span className="absolute inset-0 rounded-2xl bg-green-500/5 animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {isOpen ? (
          <X className="w-5 h-5 relative z-10" />
        ) : (
          <span className="text-lg font-bold leading-none relative z-10">
            {'>'}<span className="animate-pulse">_</span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="fixed inset-4 md:inset-6 z-50 flex flex-col"
            >
              <div className="flex-1 rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/40 flex flex-col bg-[#0a0a0f]">
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-5 py-3 bg-[#12121a] border-b border-border/50 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80  transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-sm text-muted-foreground font-mono">
                    bablu@portfolio — interactive terminal
                  </div>
                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Terminal Output */}
                <div
                  ref={terminalRef}
                  className="flex-1 p-5 md:p-6 overflow-y-auto font-mono text-sm leading-relaxed overflow-x-hidden"
                >
                  {history.map((item, i) => (
                    <div key={i} className="mb-3">
                      {item.cmd && (
                        <div className="flex items-center gap-2 text-sm mb-1">
                          <span className="text-[#E85D04] font-semibold">bablu@portfolio</span>
                          <span className="text-muted-foreground">:</span>
                          <span className="text-blue-400">~</span>
                          <span className="text-muted-foreground">$</span>
                          <span className="text-white/90">{item.cmd}</span>
                        </div>
                      )}
                      <div className="text-gray-300 pl-2 whitespace-pre-wrap break-words">
                        {typeof item.output === 'string' && item.output.includes('\x1b[')
                          ? renderOutput(item.output)
                          : item.output}
                      </div>
                    </div>
                  ))}

                  {/* Input Line */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#E85D04] font-semibold shrink-0">bablu@portfolio</span>
                    <span className="text-muted-foreground shrink-0">:</span>
                    <span className="text-blue-400 shrink-0">~</span>
                    <span className="text-muted-foreground shrink-0">$</span>
                    <div className="relative flex-1 min-w-0">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        spellCheck={false}
                        autoComplete="off"
                        className="w-full bg-transparent outline-none text-white/90 caret-[#E85D04]"
                      />
                      {suggestions.length > 0 && input.trim() && (
                        <div className="absolute bottom-full left-0 mb-1 flex gap-1.5 flex-wrap">
                          {suggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => { setInput(s); setSuggestions([]); inputRef.current?.focus(); }}
                              className="px-2 py-0.5 text-xs rounded-md bg-[#E85D04]/10 text-[#E85D04] border border-[#E85D04]/20 hover:bg-[#E85D04]/20 transition-colors"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}