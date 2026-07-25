'use client';

import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  const [activeTag, setActiveTag] = useState('semua');

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return ['semua', ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeTag === 'semua') return projects;
    return projects.filter((p) => (p.tags || []).includes(activeTag));
  }, [projects, activeTag]);

  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line px-6 py-16 text-center">
        <p className="font-mono text-sm text-muted">
          $ ls --published{'\n'}
          <span className="text-signal">0 results.</span> Belum ada project yang di-publish.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              activeTag === tag
                ? 'border-signal bg-signal/10 text-signal'
                : 'border-line text-muted hover:border-muted hover:text-fg'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
