import type { TourPackage } from '../types'

// 6 paket kurasi (PRD §5.2). Harga "mulai dari" — konfirmasi final via WhatsApp.
export const packages: TourPackage[] = [
  {
    id: 'ubud-retreat',
    slug: 'ubud-retreat',
    name: 'Ubud Spiritual Retreat',
    tagline:
      'Empat hari buat melambat — air suci, sawah hijau, dan ritme Bali yang menenangkan jiwa.',
    type: 'private_trip',
    category: 'spiritual',
    duration: '4 Hari 3 Malam',
    maxPax: 'Maks 8 orang',
    pricePerPerson: 1650000,
    pricePer: 'orang',
    priceNote: 'Sudah termasuk villa bambu & sebagian makan',
    image: '/images/paket/ubud-retreat.jpg',
    highlights: [
      'Ritual pemurnian (melukat) di Tirta Empul',
      'Menginap di villa bambu tepi sawah',
      'Yoga & meditasi saat matahari terbit',
      'Trekking lembut Campuhan Ridge',
    ],
    isFeatured: true,
    itinerary: [
      {
        label: 'Hari 1',
        title: 'Tiba & Bernapas Pelan',
        description:
          'Kami jemput di bandara, lalu antar ke villa bambu di tengah sawah. Sore santai dengan welcome drink jamu dan jalan kaki keliling desa.',
      },
      {
        label: 'Hari 2',
        title: 'Air Suci & Sawah Tegalalang',
        description:
          'Ritual melukat di Tirta Empul dipandu pemangku, dilanjut menyusuri terasering Tegalalang dan makan siang menghadap lembah.',
      },
      {
        label: 'Hari 3',
        title: 'Sunrise & Seni Ubud',
        description:
          'Yoga sunrise di deck villa, lalu kelas membuat canang sari, mampir Pasar Seni, dan pijat Bali tradisional sebelum malam.',
      },
      {
        label: 'Hari 4',
        title: 'Campuhan & Pamit',
        description:
          'Trekking ringan di Campuhan Ridge Walk, brunch sehat, lalu kami antar kembali ke bandara dengan hati yang lebih ringan.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran bandara',
      '3 malam di villa bambu (twin/double share)',
      'Sarapan setiap hari + 2 makan siang',
      'Pemandu lokal berbahasa Indonesia',
      'Tiket masuk semua objek di itinerary',
      'Sesi melukat dipandu pemangku',
      'Mobil ber-AC + sopir sepanjang trip',
    ],
    excludes: [
      'Tiket pesawat ke/dari Bali',
      'Pengeluaran pribadi & oleh-oleh',
      'Makan di luar itinerary',
      'Tipping pemandu & sopir (opsional)',
    ],
    notes:
      'Trip ini santai dan cocok buat solo, pasangan, atau keluarga. Kalau kamu mau perpanjang menginap atau tambah sesi spa, tinggal bilang — kami atur.',
    relatedPackages: ['kintamani-sunrise', 'honeymoon-bali', 'bali-adventure'],
    relatedDestinations: ['ubud', 'kintamani'],
    seo: {
      title: 'Ubud Spiritual Retreat 4D3N | SaktiWisata Bali',
      description:
        'Paket wisata Ubud 4 hari — ritual Tirta Empul, trekking Campuhan, villa bambu tepi sawah. Mulai Rp 1.650.000/orang. Konfirmasi via WhatsApp.',
      ogImage: '/images/paket/ubud-retreat.jpg',
    },
  },
  {
    id: 'bali-adventure',
    slug: 'bali-adventure',
    name: 'Bali Adventure Full',
    tagline:
      'Lima hari penuh adrenalin — dari puncak Batur saat fajar sampai air terjun tersembunyi di utara.',
    type: 'open_trip',
    category: 'petualangan',
    duration: '5 Hari 4 Malam',
    maxPax: 'Maks 12 orang',
    pricePerPerson: 2450000,
    pricePer: 'orang',
    priceNote: 'Open trip — gabung peserta lain, lebih hemat',
    image: '/images/paket/bali-adventure.jpg',
    highlights: [
      'Trekking sunrise Gunung Batur',
      'Arung jeram Sungai Ayung',
      'Air terjun Sekumpul & Aling-Aling',
      'Snorkeling di Amed',
    ],
    isFeatured: false,
    itinerary: [
      {
        label: 'Hari 1',
        title: 'Tiba & Briefing',
        description:
          'Sampai Bali, check-in homestay di Ubud, briefing trip sambil kenalan sesama peserta open trip. Malam kulineran pasar senggol.',
      },
      {
        label: 'Hari 2',
        title: 'Sunrise Batur & Air Panas',
        description:
          'Mulai trekking dini hari ke puncak Gunung Batur, sarapan dengan pemandangan kaldera, lalu rendam di pemandian air panas alami Toya Devasya.',
      },
      {
        label: 'Hari 3',
        title: 'Arung Jeram Ayung',
        description:
          'Memacu adrenalin di jeram Sungai Ayung sejauh 12 km melewati tebing berukir dan air terjun, sore santai di Ubud.',
      },
      {
        label: 'Hari 4',
        title: 'Air Terjun Utara',
        description:
          'Jelajah air terjun Sekumpul dan Aling-Aling — termasuk lompat tebing buat yang berani. Menginap di Lovina.',
      },
      {
        label: 'Hari 5',
        title: 'Snorkeling & Pulang',
        description:
          'Snorkeling di terumbu Amed melihat bangkai kapal USAT Liberty, makan siang seafood, lalu kami antar ke bandara.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran bandara',
      '4 malam homestay (sharing room)',
      'Sarapan harian + makan sesuai itinerary',
      'Semua tiket aktivitas & perlengkapan safety',
      'Pemandu trekking & instruktur bersertifikat',
      'Transport ber-AC sepanjang trip',
    ],
    excludes: [
      'Tiket pesawat ke/dari Bali',
      'Sewa GoPro/dokumentasi (opsional)',
      'Pengeluaran pribadi',
      'Asuransi perjalanan',
    ],
    notes:
      'Butuh kondisi fisik standar — bisa jalan kaki 2 jam. Kalau kamu mau versi private (bukan open trip), kami bisa atur dengan harga khusus.',
    relatedPackages: ['kintamani-sunrise', 'nusa-penida', 'ubud-retreat'],
    relatedDestinations: ['kintamani', 'nusa-penida'],
    seo: {
      title: 'Bali Adventure Full 5D4N | SaktiWisata Bali',
      description:
        'Paket adventure Bali 5 hari — sunrise Batur, arung jeram Ayung, air terjun Sekumpul, snorkeling Amed. Mulai Rp 2.450.000/orang.',
      ogImage: '/images/paket/bali-adventure.jpg',
    },
  },
  {
    id: 'seminyak-luxury',
    slug: 'seminyak-luxury',
    name: 'Seminyak Luxury Escape',
    tagline:
      'Tiga hari penuh gaya — villa kolam pribadi, beach club ikonik, dan sunset yang bikin lupa pulang.',
    type: 'private_luxury',
    category: 'luxury',
    duration: '3 Hari 2 Malam',
    maxPax: 'Maks 4 orang',
    pricePerPerson: 4800000,
    pricePer: 'orang',
    priceNote: 'Villa private pool & spa termasuk',
    image: '/images/paket/seminyak-luxury.jpg',
    highlights: [
      'Villa private pool di jantung Seminyak',
      'Sunset & dinner di beach club ikonik',
      'Spa couple 90 menit',
      'Mobil pribadi + sopir on-call',
    ],
    isFeatured: false,
    itinerary: [
      {
        label: 'Hari 1',
        title: 'Kemewahan Dimulai',
        description:
          'Dijemput pakai mobil pribadi, check-in villa private pool, sore bersantai di Potato Head atau Ku De Ta menyambut sunset dengan koktail.',
      },
      {
        label: 'Hari 2',
        title: 'Belanja, Spa & Fine Dining',
        description:
          'Pagi santai di kafe Seminyak, siang belanja butik di Jalan Kayu Aya, sore spa couple, malam fine dining seafood tepi pantai.',
      },
      {
        label: 'Hari 3',
        title: 'Slow Morning & Pamit',
        description:
          'Sarapan malas di villa, berenang sepuasnya, late check-out, lalu kami antar ke bandara penuh kesan.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran bandara (mobil premium)',
      '2 malam villa private pool',
      'Sarapan harian + 1 dinner beach club',
      'Spa couple 90 menit',
      'Sopir pribadi on-call seharian',
      'Reservasi beach club & resto',
    ],
    excludes: [
      'Tiket pesawat ke/dari Bali',
      'Belanja & pengeluaran pribadi',
      'Minuman di luar paket',
      'Tipping (opsional)',
    ],
    notes:
      'Cocok buat pasangan atau teman yang mau liburan tanpa ribet. Mau upgrade ke villa 2 kamar atau tambah malam? Kabari kami ya.',
    relatedPackages: ['honeymoon-bali', 'ubud-retreat', 'nusa-penida'],
    relatedDestinations: ['seminyak', 'uluwatu'],
    seo: {
      title: 'Seminyak Luxury Escape 3D2N | SaktiWisata Bali',
      description:
        'Paket luxury Seminyak Bali — villa private pool, beach club sunset, spa couple, sopir pribadi. Mulai Rp 4.800.000/orang.',
      ogImage: '/images/paket/seminyak-luxury.jpg',
    },
  },
  {
    id: 'nusa-penida',
    slug: 'nusa-penida',
    name: 'Nusa Penida One Day Trip',
    tagline:
      'Satu hari penuh ke pulau ikon Instagram — tebing Kelingking, laut toska, dan spot foto tak terlupakan.',
    type: 'open_trip',
    category: 'day_trip',
    duration: '1 Hari',
    maxPax: 'Maks 14 orang',
    pricePerPerson: 550000,
    pricePer: 'orang',
    priceNote: 'Sudah termasuk fast boat PP & makan siang',
    image: '/images/paket/nusa-penida.jpg',
    highlights: [
      'Tebing ikonik Kelingking Beach',
      'Snorkeling Crystal Bay',
      'Angel’s Billabong & Broken Beach',
      'Fast boat pulang-pergi',
    ],
    isFeatured: false,
    itinerary: [
      {
        label: '06.30',
        title: 'Jemput & Menyeberang',
        description:
          'Dijemput dari hotel area Sanur/Kuta menuju Pelabuhan Sanur, lalu fast boat ±45 menit ke Nusa Penida.',
      },
      {
        label: '08.30',
        title: 'Penida Barat',
        description:
          'Langsung ke ikon Kelingking Beach (tebing T-Rex), lanjut Angel’s Billabong dan Broken Beach untuk foto memukau.',
      },
      {
        label: '12.30',
        title: 'Makan Siang & Crystal Bay',
        description:
          'Makan siang lokal, lalu santai dan snorkeling di Crystal Bay yang airnya jernih kebiruan.',
      },
      {
        label: '15.30',
        title: 'Kembali ke Bali',
        description:
          'Fast boat balik ke Sanur dan kami antar kembali ke hotel sebelum petang.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran hotel (area Sanur/Kuta/Denpasar)',
      'Tiket fast boat pulang-pergi',
      'Mobil + sopir di Nusa Penida',
      'Makan siang',
      'Tiket masuk objek wisata',
      'Air mineral & sewa alat snorkel',
    ],
    excludes: [
      'Penginapan',
      'Pengeluaran pribadi',
      'Tipping (opsional)',
      'Penjemputan di luar area yang ditentukan (bisa diatur, ada tambahan)',
    ],
    notes:
      'Jalanan di Nusa Penida cukup menantang, jadi pakai sopir lokal berpengalaman ya. Trip ini paling diburu — disarankan booking H-3 minimal.',
    relatedPackages: ['kintamani-sunrise', 'bali-adventure', 'seminyak-luxury'],
    relatedDestinations: ['nusa-penida', 'uluwatu'],
    seo: {
      title: 'Nusa Penida One Day Trip dari Bali | SaktiWisata',
      description:
        'Nusa Penida day trip dari Bali — Kelingking Beach, Angel’s Billabong, snorkeling Crystal Bay, fast boat PP & makan siang. Mulai Rp 550.000.',
      ogImage: '/images/paket/nusa-penida.jpg',
    },
  },
  {
    id: 'kintamani-sunrise',
    slug: 'kintamani-sunrise',
    name: 'Kintamani Sunrise & Ubud',
    tagline:
      'Mulai hari dari atas awan di Batur, tutup dengan sawah dan kopi luwak Ubud — semua dalam satu hari.',
    type: 'open_trip',
    category: 'day_trip',
    duration: '1 Hari',
    maxPax: 'Maks 14 orang',
    pricePerPerson: 480000,
    pricePer: 'orang',
    priceNote: 'Paket termurah — sempurna buat first-timer',
    image: '/images/paket/kintamani-sunrise.jpg',
    highlights: [
      'Sunrise di tepi kaldera Batur',
      'Ayunan & spot foto kahyangan',
      'Cicip kopi luwak asli',
      'Terasering Tegalalang',
    ],
    isFeatured: false,
    itinerary: [
      {
        label: '04.00',
        title: 'Berburu Fajar',
        description:
          'Dijemput dini hari menuju Kintamani, menyambut matahari terbit di tepi kaldera Gunung Batur dengan secangkir kopi hangat.',
      },
      {
        label: '08.00',
        title: 'Kebun Kopi & Ayunan',
        description:
          'Mampir kebun kopi tradisional, cicip kopi luwak dan aneka teh, lalu main ayunan dengan latar lembah.',
      },
      {
        label: '11.00',
        title: 'Tegalalang & Ubud',
        description:
          'Foto di terasering Tegalalang yang ikonik, makan siang menghadap sawah, lalu jalan santai di pusat Ubud.',
      },
      {
        label: '15.00',
        title: 'Kembali',
        description:
          'Perjalanan pulang dan kami antar kembali ke hotel sebelum sore.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran hotel (area Ubud/Kuta/Sanur)',
      'Mobil ber-AC + sopir',
      'Tiket masuk objek wisata',
      'Cicip kopi & teh',
      'Air mineral',
    ],
    excludes: [
      'Makan siang (opsional, bisa kami pesankan)',
      'Tiket ayunan/aktivitas tambahan',
      'Pengeluaran pribadi',
      'Tipping (opsional)',
    ],
    notes:
      'Paket day trip paling ramah kantong dan cocok buat keluarga. Bawa jaket tipis ya — pagi di Kintamani cukup sejuk.',
    relatedPackages: ['nusa-penida', 'ubud-retreat', 'bali-adventure'],
    relatedDestinations: ['kintamani', 'ubud'],
    seo: {
      title: 'Sunrise Kintamani & Ubud 1 Hari | SaktiWisata Bali',
      description:
        'Day trip sunrise Kintamani + Ubud — kaldera Batur, kopi luwak, ayunan, Tegalalang. Mulai Rp 480.000/orang. Cocok untuk keluarga.',
      ogImage: '/images/paket/kintamani-sunrise.jpg',
    },
  },
  {
    id: 'honeymoon-bali',
    slug: 'honeymoon-bali',
    name: 'Bali Honeymoon',
    tagline:
      'Tujuh hari berdua — villa romantis, floating breakfast, dan sunset Uluwatu yang jadi kenangan seumur hidup.',
    type: 'private_luxury',
    category: 'honeymoon',
    duration: '7 Hari 6 Malam',
    maxPax: '2 orang (pasangan)',
    pricePerPerson: 8200000,
    pricePer: 'pasangan',
    priceNote: 'Harga untuk berdua, sudah termasuk villa & dinner romantis',
    image: '/images/paket/honeymoon-bali.jpg',
    highlights: [
      'Floating breakfast di villa private pool',
      'Candle-light dinner tepi pantai',
      'Tari Kecak sunset di Uluwatu',
      'Dua suasana: Ubud asri & Seminyak pantai',
    ],
    isFeatured: false,
    itinerary: [
      {
        label: 'Hari 1–2',
        title: 'Ubud yang Romantis',
        description:
          'Check-in villa bambu di Ubud, floating breakfast berdua, spa couple, dan dinner di tepi sawah dengan lampu temaram.',
      },
      {
        label: 'Hari 3',
        title: 'Air Suci & Sawah',
        description:
          'Melukat berdua di Tirta Empul, foto di Tegalalang, dan sore santai di ayunan menghadap lembah.',
      },
      {
        label: 'Hari 4',
        title: 'Pindah ke Seminyak',
        description:
          'Transfer ke villa private pool Seminyak, sore menikmati beach club dan sunset dengan koktail.',
      },
      {
        label: 'Hari 5',
        title: 'Uluwatu & Tari Kecak',
        description:
          'Jelajah Pantai Padang-Padang, sunset di Pura Uluwatu ditemani tari Kecak, lalu seafood dinner di Jimbaran tepat di pasir.',
      },
      {
        label: 'Hari 6',
        title: 'Hari Bebas Berdua',
        description:
          'Hari fleksibel — mau bersantai di villa, belanja, atau kami atur day trip ke Nusa Penida, semua bisa.',
      },
      {
        label: 'Hari 7',
        title: 'Pamit dengan Senyum',
        description:
          'Sarapan santai, late check-out, lalu kami antar ke bandara membawa kenangan bulan madu yang sempurna.',
      },
    ],
    includes: [
      'Penjemputan & pengantaran bandara (mobil premium)',
      '6 malam villa private pool (3 Ubud + 3 Seminyak)',
      'Floating breakfast & sarapan harian',
      '2 candle-light dinner romantis',
      'Spa couple + dekorasi kamar honeymoon',
      'Sopir pribadi sepanjang trip',
      'Semua tiket objek di itinerary',
    ],
    excludes: [
      'Tiket pesawat ke/dari Bali',
      'Pengeluaran pribadi & belanja',
      'Makan di luar itinerary',
      'Tipping (opsional)',
    ],
    notes:
      'Kami bisa siapkan kejutan spesial — kue anniversary, bunga, atau sesi foto prewedding. Ceritakan rencanamu, biar momennya makin berkesan.',
    relatedPackages: ['seminyak-luxury', 'ubud-retreat', 'nusa-penida'],
    relatedDestinations: ['uluwatu', 'seminyak'],
    seo: {
      title: 'Paket Honeymoon Bali 7D6N | SaktiWisata',
      description:
        'Paket honeymoon Bali 7 hari — villa private pool, floating breakfast, dinner romantis, sunset Uluwatu. Mulai Rp 8.200.000/pasangan.',
      ogImage: '/images/paket/honeymoon-bali.jpg',
    },
  },
]
