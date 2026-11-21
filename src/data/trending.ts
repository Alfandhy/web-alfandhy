// PRODUK TRENDING di /shop — cukup tempel link listing Etsy.
//
// Thumbnail, judul & harga diambil otomatis saat build lewat Etsy Open API
// bila env var ETSY_API_KEY diisi (format "keystring:shared_secret", lihat
// https://www.etsy.com/developers/your-apps). Tanpa kunci itu, isi `image`
// (klik kanan gambar di Etsy → Copy image address) dan `title` secara manual.
// Field yang diisi manual selalu menang atas data otomatis.

export interface TrendingItem {
  /** Link listing, mis. https://www.etsy.com/listing/1234567890/nama-produk */
  url: string;
  /** Opsional: judul pendek pengganti judul Etsy (judul Etsy sering terlalu panjang). */
  title?: string;
  /** Opsional: URL gambar (https://i.etsystatic.com/...). */
  image?: string;
  /** Opsional: harga, mis. "$4.99". */
  price?: string;
  /** Opsional: label kecil di pojok, mis. "Bestseller". */
  badge?: string;
}

export const TRENDING: TrendingItem[] = [
  {
    url: 'https://www.etsy.com/listing/4622130573/100-sportswear-seamless-patterns-bundle',
    title: '100 Sportswear Seamless Patterns Bundle',
    image: 'https://i.etsystatic.com/47231213/r/il/374556/8948338933/il_570xN.8948338933_h4lt.jpg',
  },
  // { url: 'https://www.etsy.com/listing/1234567890/nama-produk', title: 'Nama pendek' },
];
