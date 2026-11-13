'use client'

import { motion } from 'framer-motion'
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import { personalInfo } from '@/constants/constants'
import HeroAvatar from '@/components/HeroAvatar'

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -25 })
    } else {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id='hero' className='scroll-mt-24 min-h-[85vh] flex items-center justify-between gap-8 lg:gap-12 flex-col-reverse lg:flex-row py-8 sm:py-14 overflow-hidden'>
      {/* Left Column: Headline, Bio & Action Controls */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className='flex-1 max-w-2xl w-full'
      >
        {/* Status & Experience Pill */}
        <div className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-semibold text-white/90 mb-6 shadow-sm'>
          <span className='flex h-2 w-2 relative'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-400'></span>
          </span>
          <span className='text-emerald-400 font-bold'>{personalInfo.experience} Experience</span>
          <span className='text-white/30'>•</span>
          <span className='text-white/80'>Full Stack &amp; Cloud</span>
        </div>

        {/* Name & Command Prompt Title */}
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-3'>
          Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300'>{personalInfo.name}</span>
        </h1>
        
        <div className='text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2'>
          <span className='text-emerald-400 font-mono font-black'>&gt;_</span>
          <span>{personalInfo.role}</span>
        </div>

        {/* Short Introduction Quote */}
        <p className='text-base sm:text-lg text-white/75 leading-relaxed mb-7 font-normal max-w-xl'>
          &ldquo;{personalInfo.shortIntro}&rdquo;
        </p>

        {/* Core Technologies Badges */}
        <div className='mb-8'>
          <p className='text-xs uppercase font-extrabold tracking-wider text-white/40 mb-3 flex items-center gap-1.5'>
            <Sparkles className='w-3.5 h-3.5 text-emerald-400' />
            Core Stack
          </p>
          <div className='flex flex-wrap gap-2'>
            {personalInfo.mainTechnologies.map((tech) => (
              <span
                key={tech}
                className='px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-200 cursor-default shadow-xs'
              >
                {tech}
              </span>
            ))}
            <span className='px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 shadow-xs'>
              AWS &amp; Docker
            </span>
          </div>
        </div>

        {/* Action Buttons: 3 Action Buttons on a Clean Row */}
        <div className='flex flex-wrap items-center gap-3'>
          <a
            href={personalInfo.resumeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-white/90 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/10'
          >
            <FileDown className='w-4 h-4' />
            View Resume
          </a>

          <button
            onClick={() => scrollTo('projects')}
            className='whitespace-nowrap px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2'
          >
            Explore Projects
            <ArrowRight className='w-4 h-4' />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className='whitespace-nowrap px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2'
          >
            <Mail className='w-4 h-4' />
            Contact Me
          </button>
        </div>

        {/* Social Profile Buttons */}
        <div className='flex items-center gap-3 mt-6 pt-2'>
          <a
            href='https://github.com/keerthivasanmk'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='p-2.5 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all duration-200 transform hover:scale-110 shadow-lg'
          >
            <GithubIcon className='w-4 h-4' />
          </a>
          <a
            href='https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='p-2.5 rounded-full bg-white/5 hover:bg-[#0077B5] text-white border border-white/10 transition-all duration-200 transform hover:scale-110 shadow-lg'
          >
            <LinkedinIcon className='w-4 h-4' />
          </a>
        </div>
      </motion.div>

      {/* Right Column: Hero Avatar with Rive, Glowing Orbit, Floating Tech & 5+ Years Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='flex-1 w-full flex items-center justify-center'
      >
        <HeroAvatar />
      </motion.div>
    </section>
  )
}
