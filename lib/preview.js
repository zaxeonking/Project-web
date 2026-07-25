// Generate screenshot preview otomatis dari sebuah URL, mirip preview
// deployment di Vercel. Pakai WordPress mshots — gratis, tanpa API key.
// Screenshot pertama kali biasanya butuh beberapa detik buat "matang";
// kalau masih kosong, tinggal refresh beberapa saat lagi.
export function getPreviewUrl(url, { width = 1200, height = 630 } = {}) {
  if (!url || !url.trim()) return null;
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url.trim()
  )}?w=${width}&h=${height}`;
}
