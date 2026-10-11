import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Skema `work` mengikuti PLAN 4.3, ditambah beberapa field opsional untuk tampilan.
// Slug = nama file (mis. sandeq-rush.md → /work/sandeq-rush).
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['design', 'stock', 'ai']),
      cover: image().optional(), // kosongkan sampai gambar asli tersedia
      coverAlt: z.string().default(''),
      date: z.coerce.date(),
      tools: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      summary: z.string(),
      // --- tambahan tampilan ---
      tags: z.array(z.string()).default([]), // label kecil di WorkRow
      order: z.number().default(99), // urutan di beranda (kecil = atas)
      href: z.string().optional(), // tautan khusus, mis. Sandeq Rush → /game/sandeq-rush
      placeholder: z.enum(['sea', 'ink', 'paper']).default('paper'), // warna blok sementara bila belum ada cover
      placeholderLabel: z.string().default('[Gambar karya]'),
    }),
});

export const collections = { work };
