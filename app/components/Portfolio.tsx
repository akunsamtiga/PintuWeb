'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Star,
  GaugeCircle,
  Eye,
  SearchCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Shield
} from 'lucide-react'

const categories = ['Landing Page', 'Portfolio', 'E-Commerce', 'Link In Bio']

const projects = [
  {
    title: 'Website Webinar Promosi',
    image: '/images/w1.jpg',
    category: 'Landing Page',
    url: 'https://webinar1-five.vercel.app/',
    scores: { performance: 100, accessibility: 97, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Webinar Edukasi',
    featured: true,
    image: '/images/w2.jpg',
    category: 'Landing Page',
    url: 'https://webinar2.vercel.app/',
    scores: { performance: 100, accessibility: 93, seo: 100 },
  },
  {
    title: 'Website Webinar Interaktif',
    image: '/images/w3.jpg',
    category: 'Landing Page',
    url: 'https://webinar3.vercel.app/',
    scores: { performance: 100, accessibility: 91, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Webinar Bisnis',
    image: '/images/w4.jpg',
    category: 'Landing Page',
    url: 'https://webinar4.vercel.app/',
    scores: { performance: 100, accessibility: 94, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Sales Produk',
    image: '/images/s1.jpg',
    category: 'Landing Page',
    url: 'https://salespage1.vercel.app/',
    scores: { performance: 100, accessibility: 96, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Sales Fashion',
    image: '/images/s2.jpg',
    category: 'Landing Page',
    url: 'https://sales-page2.vercel.app/',
    scores: { performance: 95, accessibility: 93, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Sales Playfull',
    image: '/images/s3.jpg',
    category: 'Landing Page',
    url: 'https://sales-page3.vercel.app/',
    scores: { performance: 100, accessibility: 98, seo: 100 },
    featured: false,
  },
  {
    title: 'Halaman Promo Makanan',
    image: '/images/l1.jpg',
    category: 'Landing Page',
    url: 'https://leadgeneration1.vercel.app/',
    scores: { performance: 100, accessibility: 98, seo: 100 },
    featured: false,
  },
  {
    title: 'Halaman Hidangan Makanan',
    image: '/images/l2.jpg',
    category: 'Landing Page',
    url: 'https://lead-generation2.vercel.app/',
    scores: { performance: 91, accessibility: 94, seo: 100 },
    featured: false,
  },
  {
    title: 'Halaman Promo Minuman',
    image: '/images/l3.jpg',
    category: 'Landing Page',
    url: 'https://lead-generation3.vercel.app/',
    scores: { performance: 100, accessibility: 94, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Pelayanan',
    image: '/images/p1.jpg',
    category: 'Landing Page',
    url: 'https://landing-page1-five-eta.vercel.app/',
    scores: { performance: 100, accessibility: 99, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Company Profile',
    image: '/images/c1.png',
    category: 'Landing Page',
    url: 'https://company-profile1.vercel.app/',
    scores: { performance: 100, accessibility: 93, seo: 100 },
    featured: false,
  },
  {
    title: 'Website Layanan Jasa',
    image: '/images/p2.jpg',
    category: 'Landing Page',
    url: 'https://productpage2.vercel.app/',
    scores: { performance: 100, accessibility: 95, seo: 100 },
    featured: false,
  },
  {
    title: 'Portfolio Desainer',
    featured: true,
    image: '/images/o1.png',
    category: 'Portfolio',
    url: 'https://portfolio1-vert-ten.vercel.app/',
    scores: { performance: 100, accessibility: 92, seo: 100 },
  },
  {
    title: 'Portfolio Pengusaha',
    image: '/images/o2.png',
    category: 'Portfolio',
    url: 'https://portfolio2-alpha-olive-15.vercel.app/',
    scores: { performance: 91, accessibility: 91, seo: 100 },
    featured: false,
  },
  {
    title: 'Portfolio Profesional',
    image: '/images/o3.png',
    category: 'Portfolio',
    url: 'https://portfolio3-eeps.vercel.app/',
    scores: { performance: 100, accessibility: 98, seo: 100 },
    featured: false,
  },
]

const ITEMS_PER_PAGE = 6

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const filteredProjects = projects.filter(
    (p) => p.category === activeCategory
  )

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveCategory(category)
      setCurrentPage(1)
      setIsTransitioning(false)
    }, 150)
  }

  const handlePageChange = (newPage: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--surface-primary)' }}>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 pattern-dots"></div>
      </div>

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        
        {/* Professional Header */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 card-base rounded-full">
            <Shield size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--primary-700)' }} />
            <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Portfolio Profesional</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 px-4" style={{ color: 'var(--text-primary)' }}>
            Projek <span style={{ color: 'var(--primary-700)' }}>Yang Telah Diselesaikan</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-7 md:mb-8 px-4" style={{ color: 'var(--text-tertiary)' }}>
            Berikut beberapa website yang telah kami selesaikan dari klien dari berbegai permintaan industri. 
            Setiap proyek dirancang dengan standar profesional dan dioptimalkan untuk performa terbaik.
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4">
            <div className="text-center relative group">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>15+</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>Projek Selesai</div>
              {/* Tooltip */}
              <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Total proyek yang berhasil diselesaikan dengan kepuasan klien
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>95+</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>Avg Performance</div>
              {/* Tooltip */}
              <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Skor rata-rata performa website berdasarkan Google Lighthouse
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>100%</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>Mobile Ready</div>
              {/* Tooltip */}
              <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Semua website responsif dan optimal di perangkat mobile
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
            <div className="text-center relative group">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>SEO</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>Optimized</div>
              {/* Tooltip */}
              <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 w-48 text-center">
                Dioptimalkan untuk mesin pencari dengan best practices SEO
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              disabled={isTransitioning}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium border rounded-lg transition-all duration-300 disabled:opacity-50 ${
                activeCategory === cat
                  ? 'shadow-md'
                  : 'hover:bg-[var(--primary-50)]'
              }`}
              style={{
                backgroundColor: activeCategory === cat ? 'var(--primary-700)' : 'white',
                color: activeCategory === cat ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                borderColor: activeCategory === cat ? 'var(--primary-700)' : 'var(--border-light)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--primary-700)'
                  e.currentTarget.style.color = 'var(--primary-700)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Professional Portfolio Grid with Animation */}
        {displayedProjects.length > 0 ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {displayedProjects.map((project, i) => (
              <div
                key={`${project.title}-${currentPage}`}
                className="group relative card-base rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 text-white text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full shadow-lg" style={{ backgroundColor: 'var(--primary-700)' }}>
                    <Star size={10} className="inline mr-1 sm:w-3 sm:h-3" />
                    Favorite
                  </div>
                )}

                {/* Professional Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot website ${project.title}`}
                    width={600}
                    height={400}
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src = '/images/fallback.jpg')
                    }
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={i === 0}
                  />
                  
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)' }}>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="text-center text-white space-y-3 sm:space-y-4">
                        
                        {/* Performance Metrics */}
                        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm">
                          <div className="flex flex-col items-center">
                            <span className="text-xs mb-1" style={{ color: 'var(--neutral-300)' }}>Performance</span>
                            <div className="flex items-center gap-1">
                              <GaugeCircle size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span className="font-semibold">{project.scores.performance}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-xs mb-1" style={{ color: 'var(--neutral-300)' }}>Accessibility</span>
                            <div className="flex items-center gap-1">
                              <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span className="font-semibold">{project.scores.accessibility}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-xs mb-1" style={{ color: 'var(--neutral-300)' }}>SEO</span>
                            <div className="flex items-center gap-1">
                              <SearchCheck size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span className="font-semibold">{project.scores.seo}</span>
                            </div>
                          </div>
                        </div>

                        {/* Visit Button */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'white', 
                            color: 'var(--text-primary)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--neutral-100)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white'
                          }}
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          Kunjungi Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <span className="inline-block text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full" style={{ 
                    color: 'var(--text-tertiary)', 
                    backgroundColor: 'var(--neutral-100)' 
                  }}>
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-tertiary)' }} className="mt-8 text-sm sm:text-base">Tidak ada proyek ditemukan untuk kategori ini.</p>
        )}

        {/* Professional Pagination with Animation */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isTransitioning}
              className="p-2 sm:p-3 rounded-lg border transition-all duration-300 disabled:opacity-40"
              style={{ 
                borderColor: 'var(--border-light)', 
                color: 'var(--text-tertiary)',
                backgroundColor: 'white'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'var(--surface-primary)'
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'white'
                }
              }}
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <span className="font-medium px-3 sm:px-4 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              {currentPage} dari {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages || isTransitioning}
              className="p-2 sm:p-3 rounded-lg border transition-all duration-300 disabled:opacity-40"
              style={{ 
                borderColor: 'var(--border-light)', 
                color: 'var(--text-tertiary)',
                backgroundColor: 'white'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'var(--surface-primary)'
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'white'
                }
              }}
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        )}        
      </div>
    </section>
  )
}