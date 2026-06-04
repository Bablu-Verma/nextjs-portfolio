import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Bablu-Verma';

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: 'GitHub API failed' }, { status: 502 });
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce((acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count, 0);
    const totalForks = repos.reduce((acc: number, repo: { forks_count: number }) => acc + repo.forks_count, 0);

    const langMap: Record<string, number> = {};
    repos.forEach((repo: { language: string | null }) => {
      if (repo.language) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1;
      }
    });
    const totalWithLang = Object.values(langMap).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(langMap)
      .map(([language, count]) => ({
        language,
        count,
        percentage: Math.round((count / totalWithLang) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        bio: user.bio,
        public_repos: user.public_repos,
        public_gists: user.public_gists,
        followers: user.followers,
        following: user.following,
        location: user.location,
        blog: user.blog,
        created_at: user.created_at,
      },
      repos: repos.map((repo: { name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; updated_at: string; topics: string[] }) => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics,
      })),
      totalStars,
      totalForks,
      topLanguages,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 });
  }
}
