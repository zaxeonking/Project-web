import { getPublishedProjects } from '../lib/redis';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

export const revalidate = 0;

export default async function HomePage() {
  let projects = [];
  let error = null;

  try {
    projects = await getPublishedProjects();
  } catch (e) {
    error = e.message;
  }

  return (
    <main className="min-h-screen">
      <section className="border-b border-line px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-block rounded-md border border-line bg-panel px-4 py-2 font-mono text-sm text-muted">
            <span className="text-signal">~/projects</span> $ ls -la --published
            <span className="cursor-blink text-signal">▌</span>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Project Log
          </h1>
          <p className="max-w-xl text-base text-muted sm:text-lg">
            Kumpulan hal-hal yang pernah gua bangun — dari eksperimen kecil sampai
            yang beneran dipakai. Diurus lewat dashboard terpisah, dipajang di sini.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          {error ? (
            <div className="rounded-lg border border-amber/40 bg-amber/5 px-6 py-8 font-mono text-sm text-amber">
              Gagal memuat data: {error}
            </div>
          ) : (
            <ProjectGrid projects={projects} />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
