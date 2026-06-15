import type { Destination } from '../types'

// 5 destinasi (PRD §5.3). Fokus local insight, bukan info generik.
export const destinations: Destination[] = [
  {
    id: 'ubud',
    slug: 'ubud',
    name: 'Ubud',
    subtitle: 'Jantung budaya & spiritual Bali',
    tags: ['Spiritual', 'Sawah', 'Seni', 'Yoga'],
    image: '/images/destinasi/ubud.jpg',
    heroGradientClass: 'from-deep/90 via-deep/45 to-transparent',
    intro:
      'Ubud itu Bali yang melambat. Di sela sawah hijau dan pura tua, kamu bisa melukat di mata air suci pagi hari, ikut kelas yoga, lalu menutup hari dengan kopi sambil menatap lembah. Bukan tempat buat buru-buru — di sinilah kamu mengisi ulang tenaga.',
    bestTime: 'April–Oktober (musim kemarau)',
    idealDuration: '2–4 hari',
    distanceFromKuta: '±1,5 jam (37 km)',
    attractions: [
      {
        icon: 'temple',
        name: 'Pura Tirta Empul',
        description:
          'Mata air suci tempat ritual melukat (pemurnian). Datang pagi sebelum ramai, sewa kain di lokasi.',
      },
      {
        icon: 'leaf',
        name: 'Terasering Tegalalang',
        description:
          'Sawah berundak paling ikonik di Bali. Cantik saat pagi berkabut, lengkap dengan ayunan berlatar lembah.',
      },
      {
        icon: 'compass',
        name: 'Sacred Monkey Forest',
        description:
          'Hutan suci dengan ratusan kera ekor panjang dan pura berlumut. Simpan kacamata & barang kecil baik-baik.',
      },
      {
        icon: 'sunrise',
        name: 'Campuhan Ridge Walk',
        description:
          'Jalur trekking ringan di punggung bukit. Paling nyaman sebelum jam 8 pagi, gratis, dan sangat fotogenik.',
      },
      {
        icon: 'sparkles',
        name: 'Pasar Seni Ubud',
        description:
          'Pusat kerajinan, kain, dan oleh-oleh. Menawar itu wajar — mulai dari setengah harga dengan senyum.',
      },
      {
        icon: 'camera',
        name: 'Goa Gajah',
        description:
          'Situs arkeologi abad ke-11 dengan mulut goa berukir. Tenang, sejuk, dan jarang sepadat objek lain.',
      },
    ],
    travelTips: [
      {
        icon: 'calendar',
        title: 'Datang pagi-pagi',
        content:
          'Tegalalang dan Monkey Forest mulai padat setelah jam 10. Mulai harimu jam 7 supaya foto bersih dan udara masih sejuk.',
      },
      {
        icon: 'heart',
        title: 'Hormati adat pura',
        content:
          'Pakai kain/sarung saat masuk pura dan jangan masuk area sembahyang. Bawa sendiri atau sewa di pintu masuk.',
      },
      {
        icon: 'coffee',
        title: 'Cicip kopi, tanya harga dulu',
        content:
          'Kebun kopi menawarkan tasting gratis, tapi kopi luwak berbayar. Tanyakan harga sebelum pesan supaya tak kaget.',
      },
    ],
    relatedPackages: ['ubud-retreat', 'kintamani-sunrise', 'honeymoon-bali'],
    seo: {
      title: 'Wisata Ubud Bali — Panduan Lengkap | SaktiWisata',
      description:
        'Panduan wisata Ubud: Tirta Empul, Tegalalang, Monkey Forest, Campuhan Ridge. Tips waktu terbaik & rekomendasi paket dari SaktiWisata.',
      ogImage: '/images/destinasi/ubud.jpg',
    },
  },
  {
    id: 'seminyak',
    slug: 'seminyak',
    name: 'Seminyak',
    subtitle: 'Pantai sunset, beach club & gaya hidup',
    tags: ['Pantai', 'Sunset', 'Beach Club', 'Belanja'],
    image: '/images/destinasi/seminyak.jpg',
    heroGradientClass: 'from-deep/85 via-rust/35 to-transparent',
    intro:
      'Seminyak adalah sisi Bali yang stylish. Pantainya luas dengan sunset oranye, beach club-nya legendaris, dan butik-butiknya bikin dompet waspada. Cocok buat kamu yang mau santai tapi tetap kekinian — kaki di pasir, koktail di tangan.',
    bestTime: 'Sepanjang tahun, terbaik Mei–September',
    idealDuration: '2–3 hari',
    distanceFromKuta: '±20 menit (10 km)',
    attractions: [
      {
        icon: 'waves',
        name: 'Pantai Seminyak',
        description:
          'Pantai lebar berpasir keemasan, paling hidup saat sunset. Banyak beanbag dan bar tepi pantai.',
      },
      {
        icon: 'sun',
        name: 'Double Six Beach',
        description:
          'Spot sunset favorit dengan deretan kursi pantai. Datang sore untuk dapat tempat terbaik.',
      },
      {
        icon: 'utensils',
        name: 'Beach Club Ikonik',
        description:
          'Potato Head & Ku De Ta — tempat nongkrong sambil menatap laut. Reservasi untuk weekend dan sunset.',
      },
      {
        icon: 'sparkles',
        name: 'Jalan Kayu Aya (Eat Street)',
        description:
          'Surga kuliner dan butik desainer lokal. Cocok untuk dinner dan belanja oleh-oleh berkelas.',
      },
      {
        icon: 'temple',
        name: 'Pura Petitenget',
        description:
          'Pura tepi pantai yang tenang, indah saat senja. Pengingat bahwa budaya tetap hidup di tengah hingar-bingar.',
      },
      {
        icon: 'shoppingBag',
        name: 'Seminyak Village',
        description:
          'Mal butik untuk fesyen dan kerajinan kurasi. Ber-AC dan nyaman saat siang terik.',
      },
    ],
    travelTips: [
      {
        icon: 'sun',
        title: 'Kunci jam sunset',
        content:
          'Matahari terbenam sekitar pukul 18.00–18.30. Datang 45 menit lebih awal agar sempat dapat spot dan koktail.',
      },
      {
        icon: 'calendar',
        title: 'Reservasi beach club',
        content:
          'Weekend dan musim ramai cepat penuh. Booking online beberapa hari sebelumnya, terutama untuk daybed.',
      },
      {
        icon: 'info',
        title: 'Waspada arus',
        content:
          'Ombak Seminyak bisa kuat. Berenang di area berbendera dan ikuti arahan penjaga pantai (lifeguard).',
      },
    ],
    relatedPackages: ['seminyak-luxury', 'honeymoon-bali', 'nusa-penida'],
    seo: {
      title: 'Wisata Seminyak Bali — Pantai & Sunset | SaktiWisata',
      description:
        'Panduan wisata Seminyak: pantai sunset, beach club ikonik, Eat Street, dan belanja butik. Tips & paket luxury dari SaktiWisata.',
      ogImage: '/images/destinasi/seminyak.jpg',
    },
  },
  {
    id: 'uluwatu',
    slug: 'uluwatu',
    name: 'Uluwatu',
    subtitle: 'Tebing dramatis, pura & ombak kelas dunia',
    tags: ['Tebing', 'Pura', 'Surf', 'Sunset'],
    image: '/images/destinasi/uluwatu.jpg',
    heroGradientClass: 'from-deep/90 via-rust/30 to-transparent',
    intro:
      'Uluwatu adalah drama alam Bali. Tebing kapur menjulang di atas samudra, pura kuno bertengger di ujungnya, dan ombaknya jadi incaran peselancar dunia. Saat senja, tari Kecak menggema dengan latar matahari yang tenggelam — sebuah momen yang sulit dilupakan.',
    bestTime: 'Mei–September (ombak & cuaca terbaik)',
    idealDuration: '1–2 hari',
    distanceFromKuta: '±1 jam (28 km)',
    attractions: [
      {
        icon: 'temple',
        name: 'Pura Luhur Uluwatu',
        description:
          'Pura di tepi tebing setinggi 70 meter di atas laut. Salah satu pura terpenting Bali, memukau saat sunset.',
      },
      {
        icon: 'sparkles',
        name: 'Tari Kecak Sunset',
        description:
          'Pertunjukan api dan paduan suara puluhan pria dengan latar samudra senja. Datang lebih awal untuk kursi depan.',
      },
      {
        icon: 'waves',
        name: 'Pantai Padang-Padang',
        description:
          'Pantai mungil di balik celah batu, sempat jadi lokasi film. Airnya jernih, cocok berenang santai.',
      },
      {
        icon: 'camera',
        name: 'Suluban / Blue Point',
        description:
          'Pantai tersembunyi di bawah tebing dengan goa dan bar-bar bertingkat. Spot foto dan nonton surfer kelas dunia.',
      },
      {
        icon: 'utensils',
        name: 'Seafood Jimbaran',
        description:
          'Dinner ikan bakar tepat di atas pasir saat matahari terbenam. Klasik Bali yang wajib dicoba.',
      },
      {
        icon: 'compass',
        name: 'Single Fin (Surf)',
        description:
          'Tebing legendaris untuk menonton ombak dan sunset session. Ramai dan seru saat Minggu sore.',
      },
    ],
    travelTips: [
      {
        icon: 'sun',
        title: 'Datang sebelum sunset',
        content:
          'Untuk tari Kecak, datang minimal 1 jam sebelum mulai (sekitar 18.00) agar dapat tiket dan kursi menghadap laut.',
      },
      {
        icon: 'info',
        title: 'Jaga barang dari monyet',
        content:
          'Monyet di area pura suka mengambil kacamata, topi, dan ponsel. Simpan rapat dan jangan dipancing.',
      },
      {
        icon: 'heart',
        title: 'Pakai kain di pura',
        content:
          'Sarung dan selendang disediakan di pintu masuk. Berpakaian sopan adalah bentuk hormat pada tempat suci.',
      },
    ],
    relatedPackages: ['honeymoon-bali', 'seminyak-luxury', 'nusa-penida'],
    seo: {
      title: 'Wisata Uluwatu Bali — Pura & Tari Kecak | SaktiWisata',
      description:
        'Panduan wisata Uluwatu: Pura Luhur di tebing, tari Kecak sunset, Pantai Padang-Padang, seafood Jimbaran. Tips & paket dari SaktiWisata.',
      ogImage: '/images/destinasi/uluwatu.jpg',
    },
  },
  {
    id: 'kintamani',
    slug: 'kintamani',
    name: 'Kintamani',
    subtitle: 'Gunung Batur, kaldera & udara sejuk',
    tags: ['Gunung', 'Sunrise', 'Danau', 'Kopi'],
    image: '/images/destinasi/kintamani.jpg',
    heroGradientClass: 'from-deep/90 via-sage/35 to-transparent',
    intro:
      'Kintamani adalah Bali yang sejuk dan megah. Gunung Batur yang masih aktif berdiri di tengah kaldera raksasa, dengan danau biru di kakinya. Trekking dini hari ke puncaknya disambut sunrise di atas awan — salah satu pengalaman paling memorable di pulau ini.',
    bestTime: 'April–Oktober, datang pagi untuk sunrise',
    idealDuration: '1 hari',
    distanceFromKuta: '±2 jam (64 km)',
    attractions: [
      {
        icon: 'mountain',
        name: 'Trekking Gunung Batur',
        description:
          'Pendakian 2 jam dari dini hari menuju puncak 1.717 mdpl untuk menyambut matahari terbit di atas awan.',
      },
      {
        icon: 'waves',
        name: 'Danau Batur',
        description:
          'Danau kawah terbesar di Bali. Pemandangannya menenangkan, terutama dari warung-warung tepi kaldera.',
      },
      {
        icon: 'temple',
        name: 'Pura Ulun Danu Batur',
        description:
          'Pura agung untuk Dewi Danu, penjaga air dan kesuburan. Arsitekturnya megah dengan latar gunung.',
      },
      {
        icon: 'coffee',
        name: 'Kebun Kopi',
        description:
          'Cicip aneka kopi dan teh Bali sambil belajar proses kopi luwak. Pemandangan kebunnya menawan.',
      },
      {
        icon: 'droplet',
        name: 'Pemandian Air Panas',
        description:
          'Rendam di kolam air panas alami Toya Devasya menghadap danau — sempurna setelah trekking pagi.',
      },
      {
        icon: 'compass',
        name: 'Desa Trunyan',
        description:
          'Desa Bali Aga kuno dengan tradisi unik di tepi danau. Dicapai dengan perahu, untuk yang ingin pengalaman beda.',
      },
    ],
    travelTips: [
      {
        icon: 'info',
        title: 'Bawa jaket',
        content:
          'Suhu Kintamani bisa di bawah 15°C saat subuh. Pakai lapisan hangat dan sepatu yang nyaman untuk trekking.',
      },
      {
        icon: 'sunrise',
        title: 'Mulai dini hari',
        content:
          'Untuk sunrise Batur, penjemputan biasanya pukul 02.00–03.00. Tidur cukup malam sebelumnya, ya.',
      },
      {
        icon: 'mountain',
        title: 'Pakai pemandu resmi',
        content:
          'Jalur trekking wajib ditemani pemandu lokal bersertifikat — lebih aman dan mendukung warga setempat.',
      },
    ],
    relatedPackages: ['kintamani-sunrise', 'bali-adventure', 'ubud-retreat'],
    seo: {
      title: 'Wisata Kintamani Bali — Gunung Batur | SaktiWisata',
      description:
        'Panduan wisata Kintamani: trekking sunrise Gunung Batur, Danau Batur, kebun kopi, air panas. Tips & paket day trip dari SaktiWisata.',
      ogImage: '/images/destinasi/kintamani.jpg',
    },
  },
  {
    id: 'nusa-penida',
    slug: 'nusa-penida',
    name: 'Nusa Penida',
    subtitle: 'Tebing ikonik & laut sebening kaca',
    tags: ['Pulau', 'Tebing', 'Snorkeling', 'Foto'],
    image: '/images/destinasi/nusa-penida.jpg',
    heroGradientClass: 'from-deep/85 via-deep/40 to-transparent',
    intro:
      'Nusa Penida adalah pulau yang bikin rahang jatuh. Tebing Kelingking yang berbentuk T-Rex, laut sebening kaca, dan pantai tersembunyi di balik anak tangga curam. Jalannya menantang, tapi setiap titiknya adalah lukisan — pulau ini lahir untuk dikagumi.',
    bestTime: 'April–Oktober (laut tenang)',
    idealDuration: '1–2 hari',
    distanceFromKuta: '±45 menit fast boat dari Sanur',
    attractions: [
      {
        icon: 'camera',
        name: 'Kelingking Beach',
        description:
          'Tebing ikonik berbentuk dinosaurus dengan pantai pasir putih di bawahnya. Spot foto paling terkenal di Bali.',
      },
      {
        icon: 'droplet',
        name: 'Angel’s Billabong',
        description:
          'Kolam alami di tepi tebing dengan air sebening kaca. Hanya aman saat air surut — cek jadwal pasang.',
      },
      {
        icon: 'waves',
        name: 'Broken Beach',
        description:
          'Teluk melingkar dengan lubang lengkung batu alami. Pemandangan dramatis yang unik di dunia.',
      },
      {
        icon: 'fish',
        name: 'Crystal Bay',
        description:
          'Teluk jernih untuk berenang dan snorkeling. Saat musimnya, kamu bisa berjumpa ikan mola-mola.',
      },
      {
        icon: 'sun',
        name: 'Diamond Beach',
        description:
          'Pantai pasir putih di Penida timur dengan tangga batu berukir. Air toska dan tebing yang memesona.',
      },
      {
        icon: 'compass',
        name: 'Manta Point',
        description:
          'Titik snorkeling/diving untuk berenang bersama pari manta raksasa. Pengalaman sekali seumur hidup.',
      },
    ],
    travelTips: [
      {
        icon: 'info',
        title: 'Sewa sopir lokal',
        content:
          'Jalan di Penida terjal dan berlubang. Hindari nyetir sendiri — pakai mobil dengan sopir lokal berpengalaman.',
      },
      {
        icon: 'calendar',
        title: 'Booking fast boat awal',
        content:
          'Tiket fast boat dari Sanur cepat habis di musim ramai. Pesan jauh hari dan ambil keberangkatan pagi.',
      },
      {
        icon: 'sunrise',
        title: 'Mulai pagi',
        content:
          'Datang pagi supaya laut tenang, spot belum ramai, dan kamu punya waktu cukup keliling pulau dalam sehari.',
      },
    ],
    relatedPackages: ['nusa-penida', 'bali-adventure', 'kintamani-sunrise'],
    seo: {
      title: 'Wisata Nusa Penida — Kelingking & Snorkeling | SaktiWisata',
      description:
        'Panduan wisata Nusa Penida: Kelingking Beach, Angel’s Billabong, Broken Beach, Crystal Bay, Manta Point. Tips & day trip dari SaktiWisata.',
      ogImage: '/images/destinasi/nusa-penida.jpg',
    },
  },
]
