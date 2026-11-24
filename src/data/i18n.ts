// Teks ID dan EN untuk seluruh website.

export type Lang = 'id' | 'en';

export const DICT = {
  id: {
    meta: {
      homeTitle: 'Alfandhy — Guru, Desainer & Pengembang Game di Polewali Mandar',
      description:
        'Alfandhy, S.T. — guru SMK, desainer grafis, dan pengembang game dari Polewali Mandar, Sulawesi Barat. Pembuat Sandeq Rush dan pendiri SMEGTA MEDIA.',
      aboutTitle: 'Tentang Alfandhy',
      aboutDesc:
        'Profil Alfandhy, S.T.: guru di SMK Negeri Tapango, pendiri SMEGTA MEDIA, desainer grafis, dan pengembang game Sandeq Rush dari Polewali Mandar.',
    },
    nav: [
      { label: 'Karya', href: '/#karya' },
      { label: 'Game', href: '/game/' },
      { label: 'Tentang', href: '/about/' },
      { label: 'Kontak', href: '#kontak' },
    ],
    hero: {
      eyebrow: 'Polewali Mandar, Sulawesi Barat',
      headline: 'Halo, saya Alfandhy. Saya mengajar, mendesain, dan membuat game.',
      bio: 'Menciptakan sesuatu dengan ide sendiri, membangunnya menjadi sesuatu yang bernilai, dan memberikan manfaat kepada orang lain.',
      ctaWork: 'Lihat karya',
      ctaAbout: 'Tentang saya',
      altPhoto: 'Foto Alfandhy, S.T.',
    },
    work: {
      title: 'Karya pilihan',
      gameLink: 'Halaman game',
      more: 'Karya lain',
      others: [
        {
          title: 'SMEGTA MEDIA',
          text: 'Motion loop dan aset visual untuk Adobe Stock, sekaligus ruang belajar siswa ekstrakurikuler.',
          href: '/about/#smegta',
          meta: 'Microstock',
        },
        {
          title: 'Desain grafis',
          text: 'Portofolio desain grafis dan komunikasi visual.',
          href: 'https://www.behance.net/alfandhydesign',
          meta: 'Behance',
        },
        {
          title: 'Video edukasi',
          text: 'Video explainer untuk siswa DKV dan informatika.',
          href: 'https://www.youtube.com/channel/UCzfh3TtnMPkUMM8nbxsgZbw',
          meta: 'YouTube',
        },
      ],
    },
    approach: {
      title: 'Cara saya bekerja dengan AI',
      items: ['Desain & microstock', 'Pendidikan', 'Game', 'Prompt engineering'],
      quote1: 'Bagi saya AI bukan pengganti proses kreatif, melainkan ',
      quote1Emp: 'alat kerja',
      quote1Post: ', seperti pensil dan grid bagi desainer.',
      quote2:
        'Saya memakainya untuk mempercepat eksplorasi, lalu memilih, menyunting, dan menyelesaikan karya dengan tangan sendiri. Hal yang sama saya ajarkan kepada siswa di kelas.',
    },
    now: {
      title: 'Sekarang',
      items: [
        { label: 'Membangun', text: 'Sandeq Rush, persiapan rilis di Google Play.' },
        { label: 'Mengajar', text: 'DKV, Desain Brief, Mikroprosesor, dan Informatika.' },
        { label: 'Belajar', text: 'Pipeline aset game dan motion dengan AI.' },
      ],
    },
    about: {
      eyebrow: 'Tentang',
      title: 'Alfandhy, S.T.',
      lead: 'Saya guru, desainer grafis, dan pengembang game dari Polewali Mandar, Sulawesi Barat.',
      body: [
        'Sehari-hari saya mengajar di SMK Negeri Tapango: Desain Komunikasi Visual, Desain Brief, Mikroprosesor, dan Informatika. Latar belakang saya S1 Informatika, ditambah Pendidikan Profesi Guru (PPG).',
        'Di luar kelas saya mendirikan SMEGTA MEDIA, wadah siswa ekstrakurikuler yang membuat motion loop dan aset visual untuk Adobe Stock. Siswa belajar alur kerja yang nyata: riset, produksi, kurasi, sampai unggah dan metadata.',
        'Proyek terbesar saya sekarang adalah Sandeq Rush, game balap perahu Sandeq khas Mandar untuk Android yang saya bangun dengan Godot. Banyak aset visualnya saya kembangkan dengan bantuan AI, lalu saya sunting dan rapikan sendiri.',
      ],
      rolesTitle: 'Peran',
      roles: [
        { title: 'Guru', org: 'SMK Negeri Tapango', text: 'DKV, Desain Brief, Mikroprosesor, Informatika.' },
        { title: 'Pendiri', org: 'SMEGTA MEDIA', text: 'Kontributor Adobe Stock dan unit ekstrakurikuler sekolah.', id: 'smegta' },
        { title: 'Pengembang game', org: 'Sandeq Rush', text: 'Game balap perahu Sandeq untuk Android, dibangun dengan Godot.' },
        { title: 'Desainer grafis', org: 'Behance', text: 'Portofolio desain grafis dan komunikasi visual.' },
      ],
      eduTitle: 'Pendidikan',
      edu: [
        { title: 'S1 Informatika', text: 'Sarjana Teknik (S.T.)' },
        { title: 'Pendidikan Profesi Guru (PPG)', text: 'Sertifikasi guru profesional' },
      ],
      skillsTitle: 'Keahlian',
      skills: [
        { group: 'AI', items: ['Prompt engineering', 'Generasi gambar & video', 'Alur kerja kreatif berbasis AI'] },
        { group: 'Desain', items: ['Desain grafis', 'DKV', 'Motion graphic'] },
        { group: 'Teknis', items: ['Informatika', 'Mikroprosesor', 'Web', 'Godot Engine'] },
        { group: 'Pendidikan', items: ['Media ajar', 'Kurikulum Merdeka', 'Workshop'] },
      ],
      cta: 'Tertarik bekerja sama? Kirim email ke',
    },
    contact: {
      title: 'Kontak',
      heading: 'Punya proyek atau ingin berkolaborasi?',
      desc: 'Saya terbuka untuk diskusi tentang game edukatif, alur kerja AI untuk desain, kurikulum DKV & multimedia, dan workshop.',
      copy: 'Salin',
      copied: 'Tersalin',
      privacy: 'Kebijakan privasi',
      region: 'Sulawesi Barat',
    },
    notFound: {
      title: 'Halaman tidak ditemukan',
      text: 'Halaman yang Anda cari mungkin sudah dipindah atau tidak pernah ada.',
      back: 'Kembali ke beranda',
    },
    common: {
      skipToContent: 'Lewati ke konten',
      menu: 'Menu',
      close: 'Tutup',
      home: 'Beranda',
    },
  },
  en: {
    meta: {
      homeTitle: 'Alfandhy — Teacher, Designer & Game Developer in Polewali Mandar',
      description:
        'Alfandhy, S.T. — vocational school teacher, graphic designer, and game developer from Polewali Mandar, West Sulawesi, Indonesia. Maker of Sandeq Rush.',
      aboutTitle: 'About Alfandhy',
      aboutDesc:
        'About Alfandhy, S.T.: teacher at SMK Negeri Tapango, founder of SMEGTA MEDIA, graphic designer, and developer of the game Sandeq Rush.',
    },
    nav: [
      { label: 'Work', href: '/en/#karya' },
      { label: 'Games', href: '/en/game/' },
      { label: 'About', href: '/en/about/' },
      { label: 'Contact', href: '#kontak' },
    ],
    hero: {
      eyebrow: 'Polewali Mandar, West Sulawesi',
      headline: "Hi, I'm Alfandhy. I teach, design, and make games.",
      bio: 'Create from my own ideas, build them into something of value, and use it to benefit others.',
      ctaWork: 'See work',
      ctaAbout: 'About me',
      altPhoto: 'Portrait of Alfandhy, S.T.',
    },
    work: {
      title: 'Selected work',
      gameLink: 'Game page',
      more: 'Other work',
      others: [
        {
          title: 'SMEGTA MEDIA',
          text: 'Motion loops and visual assets for Adobe Stock, made with students in an extracurricular program.',
          href: '/en/about/#smegta',
          meta: 'Microstock',
        },
        {
          title: 'Graphic design',
          text: 'Graphic design and visual communication portfolio.',
          href: 'https://www.behance.net/alfandhydesign',
          meta: 'Behance',
        },
        {
          title: 'Educational videos',
          text: 'Explainer videos for design and computing students.',
          href: 'https://www.youtube.com/channel/UCzfh3TtnMPkUMM8nbxsgZbw',
          meta: 'YouTube',
        },
      ],
    },
    approach: {
      title: 'How I work with AI',
      items: ['Design & microstock', 'Education', 'Games', 'Prompt engineering'],
      quote1: "To me, AI doesn't replace the creative process. It's a ",
      quote1Emp: 'tool',
      quote1Post: ', like a pencil or a grid is for a designer.',
      quote2:
        'I use it to explore faster, then select, edit, and finish the work by hand. That is also what I teach my students.',
    },
    now: {
      title: 'Now',
      items: [
        { label: 'Building', text: 'Sandeq Rush, getting ready for Google Play.' },
        { label: 'Teaching', text: 'Visual design, design briefs, microprocessors, and computing.' },
        { label: 'Learning', text: 'AI-assisted pipelines for game assets and motion.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Alfandhy, S.T.',
      lead: "I'm a teacher, graphic designer, and game developer from Polewali Mandar, West Sulawesi, Indonesia.",
      body: [
        'Day to day I teach at SMK Negeri Tapango, a vocational high school: visual communication design, design briefs, microprocessors, and computing. I hold a bachelor’s degree in informatics and completed Indonesia’s professional teacher program (PPG).',
        'Outside class I founded SMEGTA MEDIA, an extracurricular group where students produce motion loops and visual assets for Adobe Stock. They learn a real workflow: research, production, curation, upload, and metadata.',
        'My biggest project right now is Sandeq Rush, an Android racing game about the Sandeq, the traditional sailboat of the Mandar people, built in Godot. Many of its visual assets started with AI, then I edited and finished them by hand.',
      ],
      rolesTitle: 'Roles',
      roles: [
        { title: 'Teacher', org: 'SMK Negeri Tapango', text: 'Visual design, design briefs, microprocessors, computing.' },
        { title: 'Founder', org: 'SMEGTA MEDIA', text: 'Adobe Stock contributor and school extracurricular program.', id: 'smegta' },
        { title: 'Game developer', org: 'Sandeq Rush', text: 'Sandeq boat racing game for Android, built in Godot.' },
        { title: 'Graphic designer', org: 'Behance', text: 'Graphic design and visual communication portfolio.' },
      ],
      eduTitle: 'Education',
      edu: [
        { title: 'Bachelor of Informatics', text: 'Sarjana Teknik (S.T.)' },
        { title: 'Professional Teacher Education (PPG)', text: 'National teacher certification' },
      ],
      skillsTitle: 'Skills',
      skills: [
        { group: 'AI', items: ['Prompt engineering', 'Image & video generation', 'AI-assisted creative workflows'] },
        { group: 'Design', items: ['Graphic design', 'Visual communication', 'Motion graphics'] },
        { group: 'Technical', items: ['Informatics', 'Microprocessors', 'Web', 'Godot Engine'] },
        { group: 'Education', items: ['Learning media', 'Kurikulum Merdeka', 'Workshops'] },
      ],
      cta: 'Want to work together? Email',
    },
    contact: {
      title: 'Contact',
      heading: 'Have a project or want to collaborate?',
      desc: "I'm open to conversations about educational games, AI workflows for design, design and multimedia curricula, and workshops.",
      copy: 'Copy',
      copied: 'Copied',
      privacy: 'Privacy policy',
      region: 'West Sulawesi',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for may have moved or never existed.',
      back: 'Back to home',
    },
    common: {
      skipToContent: 'Skip to content',
      menu: 'Menu',
      close: 'Close',
      home: 'Home',
    },
  },
};
