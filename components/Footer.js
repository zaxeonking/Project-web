export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 font-mono text-xs text-muted">
      <div className="mx-auto max-w-5xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} — project log</span>
        <span className="text-muted/70">rendered from portfolio-admin</span>
      </div>
    </footer>
  );
}
