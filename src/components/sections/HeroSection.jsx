'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Terminal, 
  Sparkles 
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

import authourImage from '@/images/authour.jpg'
import { personalInfo } from '@/constants/constants'

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -70 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='hero' className='min-h-[85vh] flex items-center justify-between gap-12 flex-col-reverse lg:flex-row py-12'>
      {/* Left Column: Headline & Intro */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className='flex-1 max-w-2xl'
      >
        {/* Status & Experience Pill */}
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white/90 mb-6 shadow-sm'>
          <span className='flex h-2 w-2 relative'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-400'></span>
          </span>
          <span className='text-emerald-400 font-bold'>{personalInfo.experience} Experience</span>
          <span className='text-white/30'>•</span>
          <span>Full Stack &amp; Cloud</span>
        </div>

        {/* Name & Title */}
        <h1 className='text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-4'>
          Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300'>{personalInfo.name}</span>
        </h1>
        <div className='text-xl sm:text-2xl font-bold text-white/80 mb-6 flex items-center gap-2'>
          <Terminal className='w-5 h-5 text-emerald-400' />
          <span>{personalInfo.role}</span>
        </div>

        {/* Short Introduction */}
        <p className='text-base sm:text-lg text-white/80 leading-relaxed mb-8 font-normal'>
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
                className='px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-200 cursor-default'
              >
                {tech}
              </span>
            ))}
            <span className='px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300'>
              AWS &amp; Docker
            </span>
          </div>
        </div>

        {/* Action Buttons & Socials */}
        <div className='flex flex-wrap items-center gap-4'>
          <a
            href={personalInfo.resumeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary'
          >
            <FileDown className='w-4 h-4' />
            View Resume
          </a>

          <button
            onClick={() => scrollTo('projects')}
            className='btn-secondary'
          >
            Explore Projects
            <ArrowRight className='w-4 h-4' />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className='btn-secondary'
          >
            <Mail className='w-4 h-4' />
            Contact Me
          </button>

          {/* Social Profiles */}
          <div className='flex items-center gap-2.5 sm:ml-2 pt-2 sm:pt-0'>
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
        </div>
      </motion.div>

      {/* Right Column: Visual Avatar with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='flex flex-col items-center justify-center relative'
      >
        <div className='relative w-64 h-64 sm:w-72 sm:h-72'>
          {/* Animated Ambient Glow */}
          <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 blur-2xl animate-pulse'></div>
          
          {/* Image Frame */}
          <div className='relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl'>
            <Image
              src={authourImage}
              alt='Keerthivasan'
              fill
              priority
              sizes='(max-width: 640px) 256px, 288px'
              className='rounded-full object-cover p-1'
            />
          </div>
        </div>

        {/* Floating Quick Stat Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-6 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl text-center'
        >
          <div className='text-sm font-black text-white'>5+ Years Professional Exp.</div>
          <div className='text-xs text-white/60 font-semibold'>React • Node.js • AWS • Docker</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
