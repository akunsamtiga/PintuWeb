'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Phone, Menu, X, Shield, Award } from 'lucide-react'

const sectionIds = ['hero', 'services', 'portfolio', 'pricing', 'contact', 'faq']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  // Enhanced scroll visibility and background change
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          setVisible(currentY < 50 || currentY < lastScrollY.current)
          setScrolled(currentY > 20)
          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy logic
  useEffect(() => {
    const handleScrollSpy = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()

    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  // Close mobile menu when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const navLinkClass = (id: string) =>
    `relative py-2 px-1 transition-all duration-300 font-medium text-sm ${
      activeSection === id
        ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:rounded-full'
        : ''
    }`

  const getNavLinkStyles = (id: string) => ({
    color: activeSection === id ? 'var(--primary-700)' : 'var(--text-secondary)',
    '--tw-content': activeSection === id ? '""' : 'none',
    '--tw-bg-opacity': '1',
    '&::after': {
      backgroundColor: activeSection === id ? 'var(--primary-700)' : 'transparent'
    }
  })

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        backgroundColor: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        boxShadow: scrolled ? 'var(--card-shadow)' : 'none'
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* Professional Logo Section */}
          <Link href="/" prefetch={false} className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/images/logo.webp" 
                alt="Pintuweb - Jasa Website Profesional" 
                width={36}
                height={36}
                quality={100}        // ← Tambahkan ini (kualitas maksimal)
                priority             // ← Tambahkan ini (load priority tinggi)
                unoptimized          // ← Tambahkan ini (disable optimisasi Next.js)

                className="h-9 w-auto transition-all duration-300 group-hover:scale-105" 
              />
              {/* Trust badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: 'var(--success-500)' }}></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Professional</div>
              <div className="text-xs -mt-1" style={{ color: 'var(--text-muted)' }}>Web Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center space-x-8"
          >
            <a 
              href="#services" 
              className={navLinkClass('services')}
              style={getNavLinkStyles('services')}
              onMouseEnter={(e) => {
                if (activeSection !== 'services') {
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'services') {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              Layanan
            </a>
            <a 
              href="#portfolio" 
              className={navLinkClass('portfolio')}
              style={getNavLinkStyles('portfolio')}
              onMouseEnter={(e) => {
                if (activeSection !== 'portfolio') {
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'portfolio') {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              Portfolio
            </a>
            <a 
              href="/paket" 
              className={navLinkClass('pricing')}
              style={getNavLinkStyles('pricing')}
              onMouseEnter={(e) => {
                if (activeSection !== 'pricing') {
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'pricing') {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              Harga
            </a>
            <a 
              href="#faq" 
              className={navLinkClass('faq')}
              style={getNavLinkStyles('faq')}
              onMouseEnter={(e) => {
                if (activeSection !== 'faq') {
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'faq') {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className={navLinkClass('contact')}
              style={getNavLinkStyles('contact')}
              onMouseEnter={(e) => {
                if (activeSection !== 'contact') {
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'contact') {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              Kontak
            </a>
          </nav>

          {/* Professional CTA & Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>
              <div className="flex items-center gap-1">
                <Shield size={14} style={{ color: 'var(--success-600)' }} />
                <span className="font-medium">Terpercaya</span>
              </div>
              <div className="w-px h-4" style={{ backgroundColor: 'var(--border-medium)' }}></div>
              <div className="flex items-center gap-1">
                <Award size={14} style={{ color: 'var(--primary-600)' }} />
                <span className="font-medium">15+ Proyek</span>
              </div>
            </div>

            <div className="w-px h-8" style={{ backgroundColor: 'var(--border-medium)' }}></div>

            {/* Professional CTA */}
            <a
              href="https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pembuatan%20website%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-primary"
            >
              <Phone size={16} />
              <span>Konsultasi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
            style={{
              color: 'var(--text-secondary)'
            }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-700)'
              e.currentTarget.style.backgroundColor = 'var(--neutral-100)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Professional Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } border-t shadow-lg`}
        style={{
          backgroundColor: 'white',
          borderColor: 'var(--border-light)'
        }}
      >
        <div className="px-6 py-6 space-y-6">
          
          {/* Mobile Trust Indicators */}
          <div className="flex items-center justify-center space-x-4 py-3 px-4 rounded-lg" style={{ backgroundColor: 'var(--surface-primary)' }}>
            <div className="flex items-center gap-2 text-sm">
              <Shield size={16} style={{ color: 'var(--success-600)' }} />
              <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>Terpercaya</span>
            </div>
            <div className="w-px h-5" style={{ backgroundColor: 'var(--border-medium)' }}></div>
            <div className="flex items-center gap-2 text-sm">
              <Award size={16} style={{ color: 'var(--primary-600)' }} />
              <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>15+ Proyek</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            <a 
              href="#services" 
              onClick={closeMenu} 
              className="block py-3 px-4 rounded-lg font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-700)'
                e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Layanan Kami
            </a>
            <a 
              href="#portfolio" 
              onClick={closeMenu} 
              className="block py-3 px-4 rounded-lg font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-700)'
                e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Portfolio
            </a>
            <a 
              href="/paket" 
              onClick={closeMenu} 
              className="block py-3 px-4 rounded-lg font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-700)'
                e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Paket & Harga
            </a>
            <a 
              href="#faq" 
              onClick={closeMenu} 
              className="block py-3 px-4 rounded-lg font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-700)'
                e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu} 
              className="block py-3 px-4 rounded-lg font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-700)'
                e.currentTarget.style.backgroundColor = 'var(--primary-50)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Kontak
            </a>
          </nav>

          {/* Mobile CTA */}
          <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
            <a
              href="https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pembuatan%20website%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:shadow-xl focus:scale-105"
              onClick={closeMenu}
            >
              <Phone size={18} />
              <span>Konsultasi Gratis</span>
            </a>
            
            {/* Contact Info */}
            <div className="mt-4 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <p>Respon cepat dalam 1 jam</p>
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>+62 813 3990 8765</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}