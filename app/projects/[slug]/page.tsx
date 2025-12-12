import { allProjects } from '@/lib/site-data';
import { ClientProjectPage } from '@/components/client-project-page';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.id,
  }));
}

// Next.js 15: params is a Promise
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.id === slug);

  return <ClientProjectPage project={project} />;
}
