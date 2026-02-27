// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    card: 'summary_large_image',
    title: 'Pintu Web – Jasa Pembuatan Website Profesional',
    description: 'Bikin website cepat, modern, dan terpercaya untuk UMKM, startup, dan bisnis lokal. Tampil lebih profesional secara online.',
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/images/favicon-32x32.png' },
      { rel: 'icon', url: '/images/favicon-16x16.png' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  themeColor: '#1d4ed8',
  alternates: {
    canonical: 'https://pintuweb.com',
    languages: { 'id-ID': 'https://pintuweb.com' },
  },
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
        {children}
      </body>
    </html>
  )
}