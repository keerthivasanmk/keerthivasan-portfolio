'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code2, 
  Rocket, 
  UtensilsCrossed, 
  Store, 
  Bike,
  CheckCircle2
} from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects, foodDeliveryEcosystem } from '@/constants/constants'

export default function ProjectsSection() {
  const [activeAppId, setActiveAppId] = useState('customer-app')
  const activeApp = foodDeliveryEcosystem.find((app) => app.id === activeAppId) || foodDeliveryEcosystem[0]

  const tabIcons = {
    'customer-app': UtensilsCrossed,
    'restaurant-portal': Store,
    'delivery-partner-app': Bike
  }

  return (
    <section id='projects' className='scroll-mt-24 pt-12 pb-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <FolderGit2 className='w-3.5 h-3.5' />
          <span>Featured Work</span>
        </div>
        <h2 className='section-title'>Featured Projects</h2>
        <p className='section-subtitle'>
          Full-stack architectures and production applications engineered for speed, reliability, and scale.
        </p>
      </motion.div>

      {/* Main Ecosystem Showcase */}
      <div className='max-w-5xl mx-auto space-y-10'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='glass-card p-5 sm:p-8 hover:border-white/20 transition-all duration-300'
          >
            {/* Header info */}
            <div className='flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10'>
              <div>
                <div className='flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1'>
                  <Sparkles className='w-3.5 h-3.5' />
                  {project.subtitle}
                </div>
                <h3 className='text-2xl sm:text-3xl font-black text-white'>
                  {project.title}
                </h3>
              </div>
              <span className='px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300'>
                {project.type}
              </span>
            </div>

            {/* Architecture Overview */}
            <div className='py-6 border-b border-white/10 text-sm text-white/80 leading-relaxed'>
              <p>
                {project.overview}
              </p>
              <div className='flex flex-wrap gap-2 mt-4'>
                <span className='text-xs font-semibold text-white/50 mr-1 self-center'>Core Technologies:</span>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='text-xs font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sub-Apps Showcase Tabs */}
            <div className='pt-6'>
              <h4 className='text-xs uppercase font-extrabold tracking-wider text-white/40 mb-3 flex items-center gap-1.5'>
                <Layers className='w-3.5 h-3.5 text-emerald-400' />
                Explore the 3 Sub-Applications (Live Links &amp; GitHub Repositories)
              </h4>

              {/* Tab Selector Buttons */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6'>
                {foodDeliveryEcosystem.map((app) => {
                  const Icon = tabIcons[app.id] || Layers
                  const isActive = activeAppId === app.id
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveAppId(app.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? 'bg-emerald-500/15 border-emerald-500/50 shadow-lg text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-emerald-400 text-black' : 'bg-black/40 text-emerald-400'}`}>
                        <Icon className='w-4 h-4' />
                      </div>
                      <div>
                        <div className='text-xs font-bold leading-tight'>{app.title}</div>
                        <div className='text-[10px] text-white/50 mt-0.5'>{app.badge}</div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Card Content */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeApp.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className='p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/15'
                >
                  <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                    <div>
                      <span className='inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white/10 text-emerald-300 border border-white/10 mb-2'>
                        {activeApp.badge}
                      </span>
                      <h4 className='text-xl font-bold text-white'>{activeApp.title}</h4>
                      <p className='text-xs font-semibold text-emerald-400 mt-0.5'>{activeApp.role}</p>
                    </div>

                    {/* Action Links */}
                    <div className='flex items-center gap-3'>
                      <a
                        href={activeApp.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-secondary text-xs px-4 py-2'
                      >
                        <GithubIcon className='w-4 h-4' />
                        GitHub Repository
                      </a>
                      <a
                        href={activeApp.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-primary text-xs px-4 py-2'
                      >
                        <ExternalLink className='w-4 h-4' />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <p className='text-sm text-white/80 leading-relaxed mb-4'>
                    {activeApp.overview}
                  </p>

                  {/* Highlights Grid */}
                  <div className='pt-4 border-t border-white/10'>
                    <span className='text-xs font-bold text-white/50 block mb-2 uppercase tracking-wider'>
                      Feature Highlights:
                    </span>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80'>
                      {activeApp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className='flex items-center gap-2'>
                          <CheckCircle2 className='w-3.5 h-3.5 text-emerald-400 flex-shrink-0' />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className='pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center gap-2'>
                    <span className='text-xs font-semibold text-white/40 mr-1'>Stack:</span>
                    {activeApp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className='text-xs font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/90'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        {/* Collaboration Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='glass-card p-6 sm:p-8 border-dashed border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6'
        >
          <div className='text-left'>
            <div className='flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1'>
              <Rocket className='w-4 h-4' />
              <span>Full Stack Engineering &amp; Client Projects</span>
            </div>
            <h4 className='text-lg font-bold text-white'>
              Looking to build high-scale web platforms or reliable backend services?
            </h4>
            <p className='text-xs text-white/60 mt-1 max-w-xl'>
              I specialize in end-to-end product architecture, microservices, Next.js performance, and cloud deployment.
            </p>
          </div>

          <a
            href='#contact'
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('contact')
              if (el && window.__lenis) {
                window.__lenis.scrollTo(el, { offset: -25 })
              } else if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className='btn-primary text-xs whitespace-nowrap flex-shrink-0'
          >
            Start a Conversation &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
