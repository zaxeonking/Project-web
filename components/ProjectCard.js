import Link from 'next/link';
import { getPreviewUrl } from '../lib/preview';

function Thumbnail({ project }) {
  const previewUrl = getPreviewUrl(project.link);

  if (!previewUrl) {
    return (
      <div className="flex aspect-video w-full items-center justify-center border-b border-line bg-panel2 font-mono text-xs text-muted">
        no preview
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden border-b border-line bg-panel">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt={`Preview ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const date = project.createdAt
    ? new Date(project.createdAt).toISOString().slice(0, 10)
    : '0000-00-00';

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block overflow-hidden rounded-lg border border-line bg-panel/60 transition-colors hover:border-signal/50 hover:bg-panel"
    >
      {project.featured && (
        <span className="absolute right-3 top-3 z-10 rounded-full border border-amber/40 bg-ink/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber backdrop-blur">
          featured
        </span>
      )}

      <Thumbnail project={project} />

      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
          <span className="text-signal">#{project.id.slice(-6)}</span>
          <span>·</span>
          <span>{date}</span>
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold text-fg group-hover:text-signal">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
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
      </div>
    </Link>
  );
}
