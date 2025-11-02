// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import images from 'next/image'

// Lazy load Header dan Footer untuk performa
const Header = dynamic(() => import('./components/Header'), { ssr: true })
const Footer = dynamic(() => import('./components/Footer'), { ssr: true })

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Pintuweb.com – Jasa Pembuatan Website Profesional',
  description:
    'Pintuweb.com membantu UMKM dan startup membangun website profesional dengan desain premium, cepat, dan mobile-friendly. Tingkatkan citra bisnismu hari ini.',
  metadataBase: new URL('https://pintuweb.com'),
  openGraph: {
    title: 'PintuWeb.com – Jasa Pembuatan Website Profesional & Modern',
    description: 'Bantu bisnis Anda tampil profesional dengan website modern, cepat, dan mobile-friendly. PintuWeb siap menangani website UMKM, startup, hingga personal brand.',
    url: 'https://pintuweb.com',
    siteName: 'Pintuweb.com',
    images: [
      {
        url: '/images/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Tampilan Website oleh PintuWeb',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Menentukan jenis tampilan kartu saat dibagikan di Twitter (gambar besar).
    title: 'Pintu Web – Jasa Pembuatan Website Profesional', // Judul yang muncul di preview Twitter Card.
    description: 'Bikin website cepat, modern, dan terpercaya untuk UMKM, startup, dan bisnis lokal. Tampil lebih profesional secara online.', // Deskripsi ringkas yang muncul di preview.
    // site: '@pintuweb', // (Opsional) Username Twitter perusahaan/brand. Aktifkan jika sudah punya akun.
    // creator: '@pintuweb', // (Opsional) Username pembuat konten. Bisa sama dengan `site` jika hanya ada satu akun.
  },
  icons: {
    icon: '/images/favicon.ico', // Ikon utama (favicon) yang muncul di tab browser
    shortcut: '/images/favicon.ico', // Ikon cepat/alternatif, biasanya sama dengan favicon
    apple: '/images/apple-touch-icon.png', // Untuk perangkat Apple (iPhone/iPad), ukuran ideal: 180x180px
    other: [
      {
        rel: 'icon',
        url: '/images/favicon-32x32.png', // Versi 32x32 (biasa untuk desktop)
      },
      {
        rel: 'icon',
        url: '/images/favicon-16x16.png', // Versi 16x16 (untuk skenario kecil atau lama)
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest', // (Opsional) Jika kamu punya Progressive Web App manifest
      },
    ],
  },
  themeColor: '#1d4ed8', // address bar (mobile browser)
  alternates: {
    canonical: 'https://pintuweb.com',
    languages: {
      'id-ID': 'https://pintuweb.com', // Versi Bahasa Indonesia
      // 'en-US': 'https://pintuweb.com/en', // Aktifkan jika nanti punya versi Bahasa Inggris
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable}`} suppressHydrationWarning>
      <head />
      <body className="bg-white text-gray-900 antialiased font-sans dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
