// Data global situs. Ganti placeholder [ ... ] dengan data asli.

export const SITE = {
  name: 'Alfandhy',
  fullName: 'Alfandhy, S.T.',
  url: 'https://alfandhy.my.id',
  tagline: 'Menggabungkan AI, desain, dan pendidikan untuk menghidupkan ide.',
  description:
    'Alfandhy — AI Enthusiast dari Polewali Mandar. Memadukan AI dalam dunia desain dan pendidikan, serta aktif mengembangkan game edukatif.',
  location: 'Polewali Mandar, Sulawesi Barat',
  ogImage: '/og-default.png',
  locale: 'id_ID',
};

// Label Bahasa Indonesia mengikuti prototype; URL mengikuti sitemap PLAN.
export const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Karya', href: '/work' },
  { label: 'Game', href: '/game' },
  { label: 'Edu', href: '/edu' },
  { label: 'Tentang', href: '/about' },
  { label: 'Kontak', href: '/contact' },
];

// TAUTAN MEDIA SOSIAL AKTIF
export const SOCIALS = [
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCzfh3TtnMPkUMM8nbxsgZbw',
    icon: 'youtube',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alfandhy-243623155/',
    icon: 'linkedin',
  },
  {
    id: 'behance',
    label: 'Behance',
    href: 'https://www.behance.net/alfandhydesign',
    icon: 'behance',
  },
];

export const CONTACT = {
  // Diambil dari prototype — pastikan alamat ini aktif sebelum rilis.
  email: 'halo@alfandhy.my.id',
  whatsapp: '[NOMOR WHATSAPP]',
};

// Placeholder "[...]" yang belum diisi diarahkan ke "#"
export const safeHref = (href: string) => (href.startsWith('[') ? '#' : href);
