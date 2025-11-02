'use client'

import Image from 'next/image'
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  MessageCircle
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 bg-gradient-neutral">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-start">
          
          {/* Left: CTA Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-white">
              Siap Membantu Bisnis Anda <br className="hidden sm:block" />
              untuk <span style={{ color: 'var(--warning-400)' }}>Go Public!</span>
            </h2>
            
            <a
              href="https://wa.me/6281339908765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              style={{ 
                backgroundColor: 'var(--warning-400)', 
                color: 'var(--text-primary)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--warning-500)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--warning-400)'
              }}
            >
              <MessageCircle size={20} />
              Mulai Sekarang  
            </a>
          </div>

          {/* Right: Contact Cards Grid - Improved Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <ContactCard
              icon={<PhoneCall size={18} className="sm:w-5 sm:h-5" />}
              title="Telepon / WhatsApp"
              value="+62 813 3990 8765"
              link="https://wa.me/6281339908765"
            />
            <ContactCard
              icon={<Mail size={18} className="sm:w-5 sm:h-5" />}
              title="Email"
              value="support@pintuweb.com"
              link="mailto:support@pintuweb.com"
            />
            <ContactCard
              icon={<MapPin size={18} className="sm:w-5 sm:h-5" />}
              title="Lokasi"
              value="Trenggalek, Jawa Timur"
              subtitle="Melayani seluruh Indonesia"
            />
            <ContactCard
              icon={<Clock size={18} className="sm:w-5 sm:h-5" />}
              title="Jam Operasional"
              value="Senin – Sabtu"
              subtitle="09.00 – 17.00 WIB"
            />
          </div>
        </div>

        {/* Bottom Section - Improved Responsive */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 pb-6 sm:pb-8" style={{ 
          borderTop: '1px solid var(--neutral-700)' 
        }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            
            {/* Logo & Copyright - Hidden logo on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Image 
                src="/images/logo.webp" 
                alt="PintuWeb Logo" 
                width={32}
                height={32}
                quality={100}
                priority
                unoptimized
                className="hidden sm:block h-7 sm:h-8 w-auto" 
              />
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-sm" style={{ color: 'var(--neutral-400)' }}>
                  © {currentYear} All rights reserved.
                </div>
              </div>
            </div>
            
            {/* Brand Name - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm" style={{ color: 'var(--neutral-400)' }}>
              <span>PintuWeb</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactCard({
  icon,
  title,
  value,
  subtitle,
  link,
}: {
  icon: React.ReactNode
  title: string
  value: string
  subtitle?: string
  link?: string
}) {
  const content = (
    <div 
      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl transition-all duration-300" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--neutral-700)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div 
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shrink-0" 
        style={{ 
          backgroundColor: 'rgba(251, 191, 36, 0.2)', 
          color: 'var(--warning-400)' 
        }}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-sm sm:text-base text-white mb-1">{title}</p>
        <div 
          className={`text-xs sm:text-sm ${link ? 'break-all' : ''}`}
          style={{
            color: link ? 'var(--warning-400)' : 'var(--neutral-300)'
          }}
        >
          {value}
        </div>
        {subtitle && (
          <p className="text-xs mt-1" style={{ color: 'var(--neutral-400)' }}>{subtitle}</p>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.02] transition-transform duration-300"
      >
        {content}
      </a>
    )
  }

  return content
}