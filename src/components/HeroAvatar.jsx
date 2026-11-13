'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

// Separate SVGs for the technologies
import reactIcon from '@/images/react-icon.svg'
import nextjsIcon from '@/images/nextjs-icon.svg'
import nodejsIcon from '@/images/nodejs-icon.svg'
import javascriptIcon from '@/images/javascript-icon.svg'
import typescriptIcon from '@/images/typescript-icon.svg'
import awsIcon from '@/images/aws-icon.svg'
import dockerIcon from '@/images/docker-icon.svg'

// 7 Technology icons positioned precisely along the 390px circular orbit
const TECH_ICONS = [
  {
    id: 'docker',
    name: 'Docker',
    icon: dockerIcon,
    style: { left: '168px', top: '-27px', animationDelay: '0s' }
  },
  {
    id: 'react',
    name: 'React.js',
    icon: reactIcon,
    style: { left: '19px', top: '43px', animationDelay: '0.4s' }
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: nextjsIcon,
    style: { right: '19px', top: '43px', animationDelay: '0.8s' }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: nodejsIcon,
    style: { left: '-24px', top: '168px', animationDelay: '1.2s' }
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: awsIcon,
    style: { right: '-24px', top: '168px', animationDelay: '1.6s' }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: javascriptIcon,
    style: { left: '19px', bottom: '43px', animationDelay: '2.0s' }
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: typescriptIcon,
    style: { right: '19px', bottom: '43px', animationDelay: '2.4s' }
  }
]

// 8 Glowing dots positioned at 45-degree intervals along the 390px circular orbit (r=195px)
const GLOW_DOTS = [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
  const rad = (angle * Math.PI) / 180
  const r = 195
  const cx = 195
  const cy = 195
  const x = cx + r * Math.cos(rad)
  const y = cy + r * Math.sin(rad)
  return { angle, x, y }
})

export default function HeroAvatar() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-[460px] mx-auto select-none overflow-visible'>
      {/* Outer Glow / Ambient Lighting Atmosphere */}
      <div className='absolute inset-0 bg-radial from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl -z-10 pointer-events-none transform scale-125'></div>

      {/* Main Orbit & Avatar Stage (390px x 390px matching circular orbit CSS, responsive scale for mobile) */}
      <div className='relative w-[390px] h-[390px] flex items-center justify-center origin-center transform scale-[0.80] sm:scale-100 my-[-20px] sm:my-0 transition-transform'>
        
        {/* Circular Orbit with Slow Rotation (CSS animated 25s) */}
        <div className='orbit inset-0 m-auto'>
          {/* Glowing Dots around the rotating orbit */}
          {GLOW_DOTS.map((dot) => (
            <span
              key={dot.angle}
              className='orbit-dot'
              style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
            />
          ))}
        </div>

        {/* 7 Technology Icons floating independently around the orbit */}
        {TECH_ICONS.map((item) => (
          <div
            key={item.id}
            className='tech-icon group'
            style={item.style}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={30}
              height={30}
              className='w-7 h-7 object-contain filter drop-shadow'
            />

            {/* Hover Tooltip */}
            <div className='absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-md bg-black/90 border border-white/20 text-[10px] font-bold text-white shadow-lg z-30'>
              {item.name}
            </div>
          </div>
        ))}

        {/* Center: Avatar & Glowing Base as Single Image */}
        <div className='relative w-[260px] h-[300px] sm:w-[290px] sm:h-[335px] flex items-center justify-center z-10 pointer-events-none'>
          <Image
            src='/hero-avatar.png'
            alt='Keerthivasan - Full Stack Developer'
            fill
            priority
            sizes='(max-width: 640px) 260px, 290px'
            className='object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]'
          />
        </div>
      </div>

      {/* 5+ Years Experience Badge directly centered beneath the base */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mt-2 sm:mt-3 z-20 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-[#08151c]/90 backdrop-blur-xl border border-white/15 shadow-2xl text-center flex items-center gap-3.5 hover:border-emerald-400/40 transition-colors max-w-[92vw]'
      >
        <div className='w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-inner'>
          <Briefcase className='w-4 h-4 text-emerald-400' />
        </div>
        <div className='text-left'>
          <div className='text-xs sm:text-sm font-extrabold text-white tracking-wide flex items-center gap-1.5 whitespace-nowrap'>
            <span>5+ Years Professional Exp.</span>
          </div>
          <div className='text-[10px] sm:text-[11px] text-white/60 font-semibold mt-0.5 whitespace-nowrap'>
            React • Node.js • AWS • Docker
          </div>
        </div>
      </motion.div>
    </div>
  )
}
