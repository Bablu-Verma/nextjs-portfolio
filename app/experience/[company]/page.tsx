import { Metadata } from 'next';
import { experiences } from '@/lib/data';
import ExperienceDetail from './ExperienceDetail';

interface Props {
  params: Promise<{ company: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const exp = experiences.find((e) => e.companySlug === company);
  
  if (!exp) {
    return { title: 'Experience Not Found' };
  }

  return {
    title: `${exp.role} at ${exp.company} | Portfolio`,
    description: exp.description,
  };
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    company: exp.companySlug,
  }));
}

export default async function ExperiencePage({ params }: Props) {
  const { company } = await params;
  const exp = experiences.find((e) => e.companySlug === company);

  if (!exp) {
    return <div>Experience not found</div>;
  }

  return <ExperienceDetail experience={exp} />;
}
