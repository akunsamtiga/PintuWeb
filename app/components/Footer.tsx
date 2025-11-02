'use client'

import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  MessageCircle,
  Heart
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-20 px-6 bg-gradient-neutral">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        
        {/* Left: CTA Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
            Siap Membantu Bisnis Anda <br />
            untuk <span style={{ color: 'var(--warning-400)' }}>Go Public!</span>
          </h2>
          <a
            href="https://wa.me/6281339908765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
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

        {/* Right: Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <ContactCard
            icon={<PhoneCall size={20} />}
            title="Telepon / WhatsApp"
            value="+62 813 3990 8765"
            link="https://wa.me/6281339908765"
          />
          <ContactCard
            icon={<Mail size={20} />}
            title="Email"
            value="support@pintuweb.com"
            link="mailto:support@pintuweb.com"
          />
          <ContactCard
            icon={<MapPin size={20} />}
            title="Lokasi"
            value="Trenggalek, Jawa Timur"
            subtitle="Melayani seluruh Indonesia"
          />
          <ContactCard
            icon={<Clock size={20} />}
            title="Jam Operasional"
            value="Senin — Sabtu"
            subtitle="09.00 — 17.00 WIB"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 p-6" style={{ 
        borderTop: '1px solid var(--neutral-700)' 
      }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.webp" 
              alt="PintuWeb Logo" 
              className="h-8 w-auto" 
            />
            <div>
              <div className="text-sm" style={{ color: 'var(--neutral-400)' }}>
                © {currentYear} All rights reserved.
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--neutral-400)' }}>
            <span>PintuWeb</span>
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
    <div className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300" 
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      backdropFilter: 'blur(8px)',
      border: '1px solid var(--neutral-700)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
    }}>
      <div className="w-10 h-10 flex items-center justify-center rounded-full shrink-0" 
      style={{ 
        backgroundColor: 'rgba(251, 191, 36, 0.2)', 
        color: 'var(--warning-400)' 
      }}>
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <div className={`text-sm ${link ? '' : ''}`}
        style={{
          color: link ? 'var(--warning-400)' : 'var(--neutral-300)'
        }}>
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
        className="block hover:scale-105 transition-transform duration-300"
        onMouseEnter={(e) => {
          const valueElement = e.currentTarget.querySelector('.text-sm') as HTMLElement
          if (valueElement) {
            valueElement.style.color = 'var(--warning-300)'
          }
        }}
        onMouseLeave={(e) => {
          const valueElement = e.currentTarget.querySelector('.text-sm') as HTMLElement
          if (valueElement) {
            valueElement.style.color = 'var(--warning-400)'
          }
        }}
      >
        {content}
      </a>
    )
  }

  return content
}