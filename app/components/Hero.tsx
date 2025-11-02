'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, MapPin, Shield, Users, Award, Star, Zap } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative overflow-hidden pt-16 md:pt-8 lg:pt-0 bg-gradient-to-b from-[var(--surface-primary)] to-white min-h-screen flex items-center"
      role="region"
      aria-label="Hero Section"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 pattern-dots"></div>
      </div>

      {/* Modified Grid for Tablet - More space for text */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-2 gap-8 md:gap-8 lg:gap-20 items-center relative z-10">
        
        {/* Content Section - Takes ~67% width on tablet */}
        <div className={`order-1 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 card-base rounded-full">
            <Shield size={16} style={{ color: 'var(--primary-700)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Terpercaya Sejak 2023</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} style={{ color: 'var(--warning-400)' }} className="fill-current" />
              ))}
            </div>
          </div>

          {/* Enhanced Headline for Tablet */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            <span className="block">Jasa Pembuatan Website</span>
            <span className="block" style={{ color: 'var(--primary-700)' }}>Profesional.</span>
          </h1>

          {/* Enhanced Description for Tablet */}
          <p className="text-lg sm:text-xl md:text-xl max-w-2xl md:max-w-none lg:max-w-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            Kami menyediakan jasa pembuatan website berkualitas tinggi, responsif, dan optimal di mesin pencari Google.
          </p>

          {/* Professional CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/paket"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 btn-primary px-8 py-4 rounded-lg shadow-md hover:shadow-lg font-semibold text-base"
            >
              <ArrowRight size={20} />
              Harga & Paket
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 border-2 px-8 py-4 rounded-lg hover:bg-[var(--surface-primary)] transition-all duration-300 font-semibold text-base group"
              style={{ 
                borderColor: 'var(--border-medium)', 
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-700)'
                e.currentTarget.style.color = 'var(--primary-700)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              Lihat Website
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Professional Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center relative group">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>15+</div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Proyek Selesai</div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Total proyek yang berhasil diselesaikan dengan kepuasan klien
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>100%</div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Kepuasan Client</div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Semua klien puas dengan hasil website yang telah kami buat
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>1-3</div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Hari Kerja</div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Waktu pengerjaan rata-rata untuk menyelesaikan website Anda
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>24/7</div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Support</div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Layanan customer support tersedia kapan saja untuk membantu Anda
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>

          {/* Professional Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} style={{ color: 'var(--success-600)' }} className="shrink-0" />
              <span style={{ color: 'var(--text-secondary)' }}>Website responsif dan mobile-friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} style={{ color: 'var(--success-600)' }} className="shrink-0" />
              <span style={{ color: 'var(--text-secondary)' }}>SEO optimized untuk ranking Google</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} style={{ color: 'var(--success-600)' }} className="shrink-0" />
              <span style={{ color: 'var(--text-secondary)' }}>Loading speed optimal & secure</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} style={{ color: 'var(--success-600)' }} className="shrink-0" />
              <span style={{ color: 'var(--text-secondary)' }}>Garansi & maintenance support</span>
            </div>
          </div>

          {/* Location & Availability */}
          <div className="flex items-center gap-3 p-4 rounded-lg border" style={{ backgroundColor: 'var(--surface-primary)', borderColor: 'var(--border-light)' }}>
            <MapPin size={18} style={{ color: 'var(--primary-700)' }} className="shrink-0" />
            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Trenggalek, Jawa Timur</span> • Melayani Seluruh Indonesia
            </span>
          </div>
        </div>

        {/* Image Section - Takes ~33% width on tablet */}
        <div className={`order-2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          
          <div className="relative group">
            {/* Main Image Container - Enhanced */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-2 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]" 
            style={{ backgroundColor: 'white', borderColor: 'var(--border-light)' }}>
              
              <Image
                src="/images/bg2.webp"
                alt="Tim profesional sedang mengembangkan website untuk klien"
                width={700}
                height={500}
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-900)] via-transparent to-[var(--neutral-900)] opacity-5"></div>
            </div>

            {/* Floating Badge - Success Rate */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 card-base rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success-500)' }}></div>
                <div>
                  <div className="text-xs md:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Success Rate</div>
                  <div className="text-xl md:text-2xl font-bold" style={{ color: 'var(--success-600)' }}>100%</div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Performance */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 card-base rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center" 
                style={{ backgroundColor: 'var(--primary-100)' }}>
                  <Award size={16} className="md:w-5 md:h-5" style={{ color: 'var(--primary-700)' }} />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Performance</div>
                  <div className="text-xl md:text-2xl font-bold" style={{ color: 'var(--primary-700)' }}>95+</div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Fast Response */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: 'var(--border-light)' }}>
              <div className="flex items-center gap-2">
                <Zap size={12} className="md:w-4 md:h-4" style={{ color: 'var(--primary-700)' }} />
                <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Fast Response
                </span>
              </div>
            </div>

            {/* Floating Badge - Client Trust */}
            <div className="absolute top-1/2 -left-4 md:-left-6 card-base rounded-xl p-2 md:p-3 transform -translate-y-1/2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <Users size={20} className="md:w-6 md:h-6" style={{ color: 'var(--primary-700)' }} />
                <div className="text-xs font-medium mt-1" style={{ color: 'var(--text-tertiary)' }}>Trusted by</div>
                <div className="text-base md:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>15+</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Clients</div>
              </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-200)] to-[var(--secondary-200)] rounded-3xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator - Enhanced & Responsive */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce" style={{ color: 'var(--text-muted)' }}>
          <span className="text-xs font-medium">Scroll untuk melihat layanan</span>
          <div className="w-px h-6 md:h-8 bg-gradient-to-b from-current to-transparent"></div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}