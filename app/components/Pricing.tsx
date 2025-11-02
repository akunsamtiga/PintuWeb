'use client'
import { Check, Star, Award, Shield, Zap, ArrowRight, Sparkles, Clock, Users } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Pricing() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const waNumber = '6281339908765'
  const generateWaLink = (pkgTitle: string) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(
      `Halo, saya tertarik dengan Paket ${pkgTitle}. Boleh minta info lebih lanjut?`
    )}`

  const packages = [
    {
      title: 'Starter',
      subtitle: 'Sempurna untuk Landing Page',
      price: 'Rp200.000',
      originalPrice: 'Rp350.000',
      duration: 'one-time',
      badge: 'Hemat 43%',
      features: [
        '1 Halaman Website Premium',
        'Desain Modern & Mobile Responsive',
        'Performance Score 95+ (Google)',
        'SEO Optimized untuk Ranking',
        'Integrasi WhatsApp & Social Media',
        'Loading Speed <3 detik',
        'Proses Super Cepat: 1–2 hari',
      ],
      highlights: ['Cocok UMKM', 'Portfolio Personal', 'Landing Page Produk'],
      recommended: false,
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: 'Business Pro',
      subtitle: 'Pilihan Terpopuler untuk Bisnis',
      price: 'Rp1.500.000',
      originalPrice: 'Rp2.500.000',
      duration: 'includes hosting 1 year',
      badge: 'Most Popular',
      features: [
        '5+ Halaman Website Profesional',
        'Custom Design Sesuai Brand Identity',
        'Advanced SEO & Google Analytics',
        'Multi-platform Integration',
        'Contact Forms & Google Maps',
        'SSL Certificate & Security',
        'FREE Domain + Hosting 1 Tahun',
        'Content Management Training',
        '30 Hari Garansi & Support',
      ],
      highlights: ['Company Profile', 'E-Commerce Basic', 'Service Business'],
      recommended: true,
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: 'Enterprise',
      subtitle: 'Solusi Lengkap untuk Bisnis Besar',
      price: 'Rp3.500.000',
      originalPrice: 'Rp5.000.000',
      duration: 'full package',
      badge: 'Premium',
      features: [
        'Website Custom Unlimited Pages',
        'Advanced Features & Integrations',
        'E-Commerce dengan Payment Gateway',
        'Admin Dashboard & CMS',
        'API Integration & Third-party Tools',
        'Advanced Analytics & Reporting',
        'Priority Support 24/7',
        'Server Management & Maintenance',
        'Team Collaboration Tools',
        '90 Hari Garansi Penuh',
      ],
      highlights: ['Startup Scale-up', 'Corporate Website', 'Complex Systems'],
      recommended: false,
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full border border-gray-200">
            <Shield size={14} className="sm:w-4 sm:h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">Paket Terjangkau & Transparan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Pilih Paket Yang Tepat
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Semua paket sudah termasuk desain profesional dan performa optimal
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16 text-xs sm:text-sm text-gray-600 px-4">
          <div className="flex items-center gap-2 relative group">
            <Users size={14} className="sm:w-4 sm:h-4 text-green-600" />
            <span><strong className="text-gray-900">15+</strong> Klien Puas</span>
            <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
              Total klien yang puas dengan layanan kami
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative group">
            <Clock size={14} className="sm:w-4 sm:h-4 text-blue-600" />
            <span><strong className="text-gray-900">1x24 Jam</strong> Support</span>
            <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
              Customer support responsif dalam 24 jam
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative group">
            <Star size={14} className="sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
            <span><strong className="text-gray-900">4.9/5</strong> Rating</span>
            <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
              Rating rata-rata dari testimoni klien
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative group">
            <Shield size={14} className="sm:w-4 sm:h-4 text-purple-600" />
            <span><strong className="text-gray-900">100%</strong> Garansi</span>
            <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
              Jaminan uang kembali jika tidak puas
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Minimalist Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative ${pkg.recommended ? 'md:-mt-4' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-2.5 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                  pkg.recommended 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {pkg.badge}
                </div>
              )}

              {/* Card */}
              <div className={`h-full flex flex-col p-5 sm:p-6 md:p-8 bg-white rounded-2xl transition-all duration-300 ${
                pkg.recommended 
                  ? 'border-2 border-blue-600 shadow-xl' 
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
              }`}>
                
                {/* Icon */}
                <div className={`inline-flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-xl mb-3 sm:mb-4 ${
                  pkg.recommended ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {pkg.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{pkg.subtitle}</p>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {pkg.price}
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-base sm:text-lg text-gray-400 line-through">
                      {pkg.originalPrice}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{pkg.duration}</p>
                </div>

                {/* Highlights */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Cocok untuk:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs px-2 sm:px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-700">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px] ${pkg.recommended ? 'text-blue-600' : 'text-gray-400'}`} strokeWidth={2.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={generateWaLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 ${
                    pkg.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Pilih Paket
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </a>

                <p className="text-center text-xs text-gray-500 mt-3">
                  Konsultasi gratis • Respon cepat
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Guarantee Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          
          {/* Money Back */}
          <div className="p-4 sm:p-5 md:p-6 bg-white rounded-xl border border-gray-200">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Jaminan 100% Uang Kembali</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Tidak puas dengan hasil? Kami kembalikan 100% uang Anda. Garansi berlaku hingga 7 hari setelah website selesai.
                </p>
              </div>
            </div>
          </div>

          {/* Lifetime Support */}
          <div className="p-4 sm:p-5 md:p-6 bg-white rounded-xl border border-gray-200">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Support Seumur Hidup</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Tim kami siap membantu maintenance, update konten, dan troubleshooting kapan saja. Hubungi via WhatsApp 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}