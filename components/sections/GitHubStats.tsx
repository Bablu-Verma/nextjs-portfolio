'use client';

import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa6';
import { FaUsers, FaBookOpen } from 'react-icons/fa';
import { useGitHub } from '@/hooks/useApi';
import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';

function StatCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | number }) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300"
    >
      <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
      <p className="text-3xl font-bold gradient-text">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
}

function LanguageBar({ languages }: { languages: { language: string; percentage: number }[] }) {
  return (
    <div className="flex h-3 rounded-full overflow-hidden">
      {languages.map((lang) => (
        <div
          key={lang.language}
          style={{ width: `${lang.percentage}%` }}
          className="transition-all duration-500 hover:opacity-80"
          title={`${lang.language}: ${lang.percentage}%`}
        />
      ))}
    </div>
  );
}

function RepoCard({ repo }: { repo: { name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; topics: string[] } }) {
  return (
    <motion.a
      variants={staggerItem}
      href={repo.html_url}
      target="_blank"
      className="glass rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 block"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-semibold text-foreground truncate">{repo.name}</h4>
        <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
          <span className="flex items-center gap-1">
            <FaStar className="w-3.5 h-3.5" /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <FaCodeBranch className="w-3.5 h-3.5" /> {repo.forks_count}
          </span>
        </div>
      </div>
      {repo.description && (
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{repo.description}</p>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {repo.language && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{repo.language}</span>
        )}
        {repo.topics?.slice(0, 3).map((topic) => (
          <span key={topic} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{topic}</span>
        ))}
      </div>
    </motion.a>
  );
}

import { motion } from 'framer-motion';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Go: '#00ADD8',
  Rust: '#dea584',
  Dart: '#00B4AB',
  C: '#555555',
  'C++': '#f34b7d',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

export function GitHubStats() {
  const { data, isLoading, isError } = useGitHub();

  if (isLoading) {
    return (
      <Section>
        <Container>
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </Container>
      </Section>
    );
  }

  if (isError || !data) return null;

  const { user, repos, totalStars, totalForks, topLanguages } = data;
  const recentRepos = repos.slice(0, 6);

  return (
    <Section id="github">
      <Container>
        <FadeIn>
          <SectionHeader
            badge="GitHub"
            title="Open Source Activity"
            description="My public GitHub profile and repositories"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={user.html_url}
            target="_blank"
            className="glass rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4 mb-10 max-w-md mx-auto"
          >
            <FaGithub className="w-10 h-10 text-primary" />
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-muted-foreground">@{user.login}</p>
            </div>
          </a>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard icon={FaBookOpen} label="Public Repos" value={user.public_repos} />
            <StatCard icon={FaStar} label="Total Stars" value={totalStars} />
            <StatCard icon={FaCodeBranch} label="Total Forks" value={totalForks} />
            <StatCard icon={FaUsers} label="Followers" value={user.followers} />
          </div>
        </StaggerContainer>

        {topLanguages.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="glass rounded-xl p-6 border border-border mb-10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaCode className="w-4 h-4 text-primary" />
                Top Languages
              </h3>
              <LanguageBar languages={topLanguages} />
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                {topLanguages.map((lang) => (
                  <span key={lang.language} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: LANG_COLORS[lang.language] || '#6b7280' }}
                    />
                    {lang.language} {lang.percentage}%
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.4}>
          <h3 className="text-xl font-semibold mb-6">Recent Repositories</h3>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </StaggerContainer>

        {repos.length > 6 && (
          <FadeIn delay={0.5}>
            <div className="text-center mt-8">
              <a
                href={user.html_url}
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                View all {user.public_repos} repositories on GitHub <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        )}
      </Container>
    </Section>
  );
}
