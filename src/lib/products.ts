// Ambil data produk trending saat build.
// - Etsy: lewat Etsy Open API v3 (halaman etsy.com memblokir pengambilan otomatis).
// - Gumroad: dari tag og:title / og:image di halaman produknya.
import type { TrendingItem } from '../data/trending';

export type Store = 'etsy' | 'gumroad' | 'other';

export interface TrendingCard {
  url: string;
  store: Store;
  title: string;
  image?: string;
  price?: string;
  badge?: string;
}

const API = 'https://api.etsy.com/v3/application/listings';

const storeOf = (url: string): Store =>
  /etsy\.com\//i.test(url) ? 'etsy' : /gumroad\.com\//i.test(url) ? 'gumroad' : 'other';

const meta = (html: string, prop: string) =>
  html.match(new RegExp(`<meta[^>]+property="${prop}"[^>]+content="([^"]+)"`, 'i'))?.[1]
    ?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

async function fetchGumroad(url: string) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (alfandhy.my.id build)' } });
    if (!res.ok) {
      console.warn(`[gumroad] ${url}: HTTP ${res.status}`);
      return undefined;
    }
    const html = await res.text();
    return { title: meta(html, 'og:title'), image: meta(html, 'og:image'), price: undefined as string | undefined };
  } catch (e) {
    console.warn(`[gumroad] ${url}: ${(e as Error).message}`);
    return undefined;
  }
}

const listingId = (url: string) => url.match(/etsy\.com\/(?:[a-z-]+\/)?listing\/(\d+)/i)?.[1];

// Judul cadangan dari slug URL: ".../listing/123/boho-wall-art-printable" → "Boho Wall Art Printable"
const titleFromSlug = (url: string) => {
  const slug = url.match(/listing\/\d+\/([^/?#]+)/)?.[1];
  if (!slug) return 'View product';
  return decodeURIComponent(slug)
    .split('-')
    .slice(0, 6)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

const formatPrice = (p?: { amount: number; divisor: number; currency_code: string }) =>
  p
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: p.currency_code }).format(p.amount / p.divisor)
    : undefined;

async function fetchListing(id: string, key: string) {
  try {
    const res = await fetch(`${API}/${id}?includes=Images`, { headers: { 'x-api-key': key } });
    if (!res.ok) {
      console.warn(`[etsy] listing ${id}: HTTP ${res.status} ${(await res.text()).slice(0, 160)}`);
      return undefined;
    }
    const d = await res.json();
    const img = [...(d.images ?? [])].sort((a: any, b: any) => (a.rank ?? 0) - (b.rank ?? 0))[0];
    return {
      title: d.title as string | undefined,
      image: (img?.url_570xN ?? img?.url_fullxfull) as string | undefined,
      price: formatPrice(d.price),
    };
  } catch (e) {
    console.warn(`[etsy] listing ${id}: ${(e as Error).message}`);
    return undefined;
  }
}

// Pastikan gambar bisa diunduh, supaya build tidak gagal karena satu gambar rusak.
async function reachable(src: string) {
  try {
    const res = await fetch(src, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function loadTrending(items: TrendingItem[]): Promise<TrendingCard[]> {
  const key = import.meta.env.ETSY_API_KEY ?? process.env.ETSY_API_KEY;
  return Promise.all(
    items.map(async (it) => {
      const store = storeOf(it.url);
      const id = store === 'etsy' ? listingId(it.url) : undefined;
      const needsFetch = !it.image || !it.title;
      const api =
        id && key && needsFetch ? await fetchListing(id, key)
        : store === 'gumroad' && needsFetch ? await fetchGumroad(it.url)
        : undefined;
      let image = it.image ?? api?.image;
      if (image && /^https?:/.test(image) && !(await reachable(image))) {
        console.warn(`[trending] gambar tidak bisa diunduh, dilewati: ${image}`);
        image = undefined;
      }
      return {
        url: it.url,
        store,
        title: it.title ?? api?.title ?? titleFromSlug(it.url),
        image,
        price: it.price ?? api?.price,
        badge: it.badge,
      };
    }),
  );
}
