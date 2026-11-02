'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Cpu, 
  Mail, 
  FileDown, 
  Menu, 
  X 
} from 'lucide-react'
import { personalInfo } from '@/constants/constants'

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position for header elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sectionElements = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i]
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (!element) return

    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -70 })
    } else {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className='fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 max-w-6xl mx-auto pointer-events-none'>
        {/* Brand / Logo with status dot */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-xl text-white'
        >
          <button
            onClick={() => scrollToSection('hero')}
            className='font-black text-sm tracking-widest hover:text-emerald-400 transition-colors'
          >
            KEERTHI<span className='text-emerald-400'>.</span>
          </button>
          
          <div className='hidden sm:flex items-center gap-1.5 pl-2 border-l border-white/20 text-[11px] font-semibold text-white/90'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
            </span>
            <span>Available for Hire</span>
          </div>
        </motion.div>

        {/* Center Floating Dock / Pill Navbar (Desktop) */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='pointer-events-auto hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl'
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            const Icon = item.icon

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId='activePill'
                    className='absolute inset-0 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-sm'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className='w-3.5 h-3.5 relative z-10' />
                <span className='relative z-10'>{item.label}</span>
              </button>
            )
          })}
        </motion.nav>

        {/* Right CTA: Resume & Mobile Hamburger */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='pointer-events-auto flex items-center gap-2'
        >
          <a
            href={personalInfo.resumeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white border border-white transition-all shadow-xl duration-200'
          >
            <FileDown className='w-3.5 h-3.5' />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
            className='md:hidden p-2 rounded-full bg-black/70 backdrop-blur-xl text-white border border-white/15 shadow-xl'
          >
            {mobileMenuOpen ? <X className='w-4 h-4' /> : <Menu className='w-4 h-4' />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed top-20 left-4 right-4 z-40 p-4 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl md:hidden'
          >
            <div className='flex flex-col gap-2'>
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/20'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className='w-4 h-4' />
                    {item.label}
                  </button>
                )
              })}

              <div className='pt-2 mt-2 border-t border-white/15 flex items-center justify-between'>
                <span className='text-xs text-white/70'>5+ Years Experience</span>
                <a
                  href={personalInfo.resumeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-white text-black'
                >
                  <FileDown className='w-3.5 h-3.5' />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
