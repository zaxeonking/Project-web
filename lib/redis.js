const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const PROJECTS_KEY = 'portfolio:projects';

async function redisGet(key) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error(
      'UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN belum di-set. Cek README.md.'
    );
  }
  const res = await fetch(`${REDIS_URL}/get/${key}`, {
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Gagal mengambil data dari Redis');
  const data = await res.json();
  return data.result;
}

export async function getAllProjects() {
  const raw = await redisGet(PROJECTS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function getPublishedProjects() {
  const all = await getAllProjects();
  return all
    .filter((p) => p.published)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || new Date(b.createdAt) - new Date(a.createdAt));
}

export async function getProjectById(id) {
  const all = await getAllProjects();
  return all.find((p) => p.id === id && p.published) || null;
}
