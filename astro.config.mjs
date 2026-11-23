// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Halaman yang sengaja tidak diindeks (kontennya belum ada).
const NOINDEX = ['/game/coming-soon-1/', '/game/coming-soon-2/', '/404'];

// https://astro.build/config
export default defineConfig({
  site: 'https://alfandhy.my.id',
  output: 'static',
  // Netlify menyajikan halaman dengan garis miring di akhir (/game → 301 → /game/).
  trailingSlash: 'ignore',
  // Thumbnail produk Etsy & Gumroad diunduh & dioptimasi saat build (CSP hanya mengizinkan gambar 'self').
  image: { domains: ['i.etsystatic.com', 'public-files.gumroad.com'] },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => page.includes(p)),
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id-ID', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Jangan inline <script>: CSP di netlify.toml hanya mengizinkan script-src 'self'.
    build: { assetsInlineLimit: 0 },
  },
});
