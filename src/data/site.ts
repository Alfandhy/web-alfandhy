// Data global situs.

export const SITE = {
  name: 'Alfandhy',
  fullName: 'Alfandhy, S.T.',
  url: 'https://alfandhy.my.id',
  location: 'Polewali Mandar, Sulawesi Barat',
  ogImage: '/og-default.png',
  themeColor: '#0f0f0e',
};

// TAUTAN MEDIA SOSIAL AKTIF
export const SOCIALS = [
  { id: 'behance', label: 'Behance', href: 'https://www.behance.net/alfandhydesign' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@alfandhyyy' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/alfandhyyy/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfandhy-243623155/' },
  { id: 'threads', label: 'Threads', href: 'https://www.threads.com/@alfandhyyy' },
] as const;

export const CONTACT = {
  email: 'halo@alfandhy.my.id',
};

// Satu sumber data Person untuk JSON-LD (beranda & tentang).
export const personLd = (lang: 'id' | 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: 'Alfandhy',
  honorificSuffix: 'S.T.',
  url: `${SITE.url}/`,
  image: `${SITE.url}/alfandhy-portrait.jpg`,
  email: `mailto:${CONTACT.email}`,
  jobTitle: lang === 'en' ? 'Teacher, Designer & Game Developer' : 'Guru, Desainer & Pengembang Game',
  worksFor: { '@type': 'EducationalOrganization', name: 'SMK Negeri Tapango' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Polewali Mandar',
    addressRegion: lang === 'en' ? 'West Sulawesi' : 'Sulawesi Barat',
    addressCountry: 'ID',
  },
  knowsAbout: ['Artificial Intelligence', 'Prompt Engineering', 'Desain Komunikasi Visual', 'Graphic Design', 'Game Development', 'Godot Engine'],
  sameAs: SOCIALS.map((s) => s.href),
});

// TAUTAN TOKO (/shop) — urutan di sini = urutan logo di halaman. `color` = warna merek.
export const SHOP_LINKS = [
  {
    id: 'etsy',
    label: 'Etsy',
    href: 'https://www.etsy.com/shop/AlfandhyStudio',
    color: '#F1641E',
    desc: 'Digital downloads, templates & printables',
  },
  {
    id: 'gumroad',
    label: 'Gumroad',
    href: 'https://pngasset.gumroad.com/',
    color: '#FF90E8',
    desc: 'PNG assets & graphic resources',
  },
] as const;
