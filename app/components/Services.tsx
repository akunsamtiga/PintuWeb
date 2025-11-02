'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  Globe,
  Smartphone,
  Brush,
  CheckCircle,
  Shield,
  Zap
} from 'lucide-react'

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const services = [
    {
      icon: <Globe size={28} style={{ color: 'var(--primary-700)' }} aria-hidden="true" />,
      title: 'Website Bisnis & Korporat',
      desc: 'Company profile, landing page, dan website korporat yang mencerminkan profesionalitas dan kredibilitas bisnis Anda.',
      features: ['Company Profile', 'Landing Page', 'Corporate Website'],
      hoverImage: '/images/sv1.jpg'
    },
    {
      icon: <Smartphone size={28} style={{ color: 'var(--primary-700)' }} aria-hidden="true" />,
      title: 'Responsif & Mobile Ready',
      desc: 'Website yang sempurna di semua perangkat dengan user experience optimal, dari smartphone hingga desktop.',
      features: ['Mobile Optimized', 'Cross Browser', 'Fast Loading'],
      hoverImage: '/images/sv2.jpg'
    },
    {
      icon: <Brush size={28} style={{ color: 'var(--primary-700)' }} aria-hidden="true" />,
      title: 'UI/UX Design Profesional',
      desc: 'Desain antarmuka yang clean, modern, dan user-friendly yang meningkatkan konversi dan kepercayaan pelanggan.',
      features: ['Modern Design', 'User Friendly', 'Conversion Focused'],
      hoverImage: '/images/sv3.jpg'
    },
  ]

  const benefits = [
    'Kualitas terjamin dengan standar profesional',
    'Pengerjaan sangat cepat dan tepat waktu',
    'Support berkelanjutan dan maintenance berkala',
    'Harga transparan tanpa biaya tersembunyi'
  ]

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 pattern-dots"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 card-base rounded-full">
            <Shield size={16} style={{ color: 'var(--primary-700)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Layanan Profesional</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Solusi <span style={{ color: 'var(--primary-700)' }}>Digital Terpadu</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            Layanan pengembangan website end-to-end dengan teknologi terdepan untuk mengembangkan bisnis Anda secara digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative card-base rounded-2xl hover:shadow-xl transition-all duration-300 p-6 md:p-8 border hover:border-[var(--primary-200)] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{ borderColor: 'var(--border-light)' }}
            >
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <Image
                  src={service.hoverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Icon Container */}
              <div className="relative mb-6 z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" 
                style={{ backgroundColor: 'var(--primary-50)' }}>
                  {service.icon}
                </div>
                
                {/* Subtle background effect */}
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                style={{ backgroundColor: 'var(--primary-300)' }}></div>
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                
                <p className="leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-tertiary)' }}>
                  {service.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full border" 
                    style={{ 
                      backgroundColor: 'var(--surface-primary)', 
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border-light)'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary-50)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="rounded-2xl border p-6 md:p-8 lg:p-10" 
        style={{ backgroundColor: 'var(--surface-primary)', borderColor: 'var(--border-light)' }}>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap size={20} style={{ color: 'var(--primary-700)' }} />
              <span className="font-semibold text-lg md:text-xl" style={{ color: 'var(--text-primary)' }}>
                Mengapa Memilih Kami? Apa Bedanya Dengan Jasa Penyedia Lainnya?
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-white transition-colors duration-200">
                <CheckCircle size={20} style={{ color: 'var(--success-600)' }} className="shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </section>
  )
}