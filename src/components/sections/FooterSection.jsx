'use client'

import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import { personalInfo } from '@/constants/constants'

export default function FooterSection() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className='pt-12 pb-8 border-t border-white/10 mt-12 text-xs text-white/60'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <span className='font-black text-white tracking-widest text-sm'>
            KEERTHI<span className='text-emerald-400'>.</span>
          </span>
          <span className='text-white/30'>•</span>
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/keerthivasanmk'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
              aria-label='GitHub'
            >
              <GithubIcon className='w-4 h-4' />
            </a>
            <a
              href='https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
              aria-label='LinkedIn'
            >
              <LinkedinIcon className='w-4 h-4' />
            </a>
          </div>

          <span className='text-white/20'>|</span>

          <button
            onClick={scrollToTop}
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-emerald-300 hover:border-emerald-400/40 transition-colors'
          >
            <span>Back to top</span>
            <ArrowUp className='w-3 h-3' />
          </button>
        </div>
      </div>
    </footer>
  )
}
