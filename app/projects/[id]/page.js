import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '../../../lib/redis';
import { getPreviewUrl } from '../../../lib/preview';
import Footer from '../../../components/Footer';

export const revalidate = 0;

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectById(params.id);

  if (!project) notFound();

  const date = project.createdAt
    ? new Date(project.createdAt).toISOString().slice(0, 10)
    : '0000-00-00';

  return (
    <main className="min-h-screen">
      <div className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-signal"
          >
            ← cd ..
          </Link>

          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="text-signal">#{project.id.slice(-6)}</span>
            <span>·</span>
            <span>{date}</span>
            {project.featured && (
              <>
                <span>·</span>
                <span className="text-amber">featured</span>
              </>
            )}
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            {project.title}
          </h1>

          {getPreviewUrl(project.link) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getPreviewUrl(project.link)}
              alt={project.title}
              className="mb-6 w-full rounded-lg border border-line object-cover object-top"
            />
          )}

          <p className="mb-6 whitespace-pre-line text-base leading-relaxed text-muted">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-line bg-ink px-2 py-0.5 font-mono text-[11px] text-signal"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-signal px-4 py-2 font-mono text-sm font-medium text-ink hover:bg-signal/90"
              >
                Buka demo →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-4 py-2 font-mono text-sm text-fg hover:border-signal hover:text-signal"
              >
                Lihat kode
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
