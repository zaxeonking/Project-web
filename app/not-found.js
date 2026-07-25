import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-sm text-amber">$ cat project.json</p>
      <h1 className="mb-3 font-display text-2xl font-bold">404 — not found</h1>
      <p className="mb-6 text-muted">
        Project ini belum di-publish atau memang tidak ada.
      </p>
      <Link
        href="/"
        className="rounded-md border border-line px-4 py-2 font-mono text-sm text-fg hover:border-signal hover:text-signal"
      >
        ← kembali
      </Link>
    </main>
  );
}
