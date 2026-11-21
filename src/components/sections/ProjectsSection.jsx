'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Laptop, 
  Store, 
  Bike,
  Bot,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects } from '@/constants/constants'

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All')

  // Dynamically extract unique categories from projects for future-proof scalability
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))]

  // Calculate project count per category
  const getCategoryCount = (category) => {
    if (category === 'All') return projects.length
    return projects.filter((p) => p.category === category).length
  }

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeTab)

  const subAppIcons = {
    'customer-app': Laptop,
    'restaurant-portal': Store,
    'delivery-partner-app': Bike
  }

  const openAiChat = () => {
    window.dispatchEvent(new CustomEvent('open-ai-chat'))
  }

  return (
    <section id='projects' className='pt-20 sm:pt-24 pb-20 border-t border-white/10'>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-8'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <FolderGit2 className='w-3.5 h-3.5' />
          <span>Featured Work</span>
        </div>
        <h2 className='section-title'>Featured Projects</h2>
      </motion.div>

      {/* Dynamic Future-Proof Category Filter Tabs */}
      <div className='flex items-center justify-center gap-2 mb-10 flex-wrap max-w-2xl mx-auto px-4'>
        {categories.map((category) => {
          const isActive = activeTab === category
          const count = getCategoryCount(category)

          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId='activeProjectTab'
                  className='absolute inset-0 rounded-full bg-emerald-500/20 border border-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]'
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className='relative z-10 flex items-center gap-1.5'>
                {category === 'All' && <Layers className='w-3.5 h-3.5 text-emerald-400' />}
                {category === 'Full Stack' && <Laptop className='w-3.5 h-3.5 text-emerald-400' />}
                {category === 'AI & LLM' && <Bot className='w-3.5 h-3.5 text-emerald-400' />}
                {category !== 'All' && category !== 'Full Stack' && category !== 'AI & LLM' && (
                  <Cpu className='w-3.5 h-3.5 text-emerald-400' />
                )}
                {category === 'All' ? 'All Projects' : category}
              </span>
              <span
                className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-emerald-400 text-black' : 'bg-white/10 text-white/60'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Projects Showcase Container */}
      <div className='max-w-6xl mx-auto space-y-10'>
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className='glass-card p-6 sm:p-8 lg:p-10 border border-white/15 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group shadow-2xl'
            >
              {/* Subtle Ambient Radial Glow */}
              <div className='absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500'></div>

              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10'>
                {/* Left Column: Title, Badges, Overview, Core Tech */}
                <div className='lg:col-span-7 flex flex-col justify-between'>
                  <div>
                    {/* Top Role Badge */}
                    <div className='inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4 shadow-xs'>
                      <Sparkles className='w-3 h-3 text-emerald-400' />
                      <span>{project.subtitle}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3'>
                      {project.title}
                    </h3>

                    {/* Project Category Tag */}
                    <div className='inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold mb-5 shadow-xs'>
                      {project.type}
                    </div>

                    {/* Overview Description */}
                    <p className='text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-6'>
                      {project.overview}
                    </p>
                  </div>

                  {/* Core Technologies Row */}
                  <div className='pt-2'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <span className='text-xs font-bold text-white/50 mr-1'>Core Technologies:</span>
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className='text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90 hover:border-emerald-400/40 transition-colors'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Dynamic Renderer for Multi-App Ecosystem or Standalone App */}
                <div className='lg:col-span-5 flex flex-col gap-3.5'>
                  {/* Case 1: Ecosystem with Sub-Applications (e.g. Food Delivery) */}
                  {project.apps && project.apps.length > 0 && (
                    <>
                      {project.apps.map((app) => {
                        const IconComponent = subAppIcons[app.id] || Laptop

                        return (
                          <div
                            key={app.id}
                            className='p-4 rounded-2xl bg-[#091820]/90 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-[#0c222c] hover:shadow-[0_0_24px_rgba(52,211,153,0.18)] transition-all duration-300 flex items-center justify-between gap-3 group/sub'
                          >
                            {/* App Icon & Text */}
                            <div className='flex items-center gap-3.5 min-w-0'>
                              <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover/sub:scale-105 group-hover/sub:bg-emerald-500/25 transition-transform duration-200'>
                                <IconComponent className='w-5 h-5' />
                              </div>
                              <div className='min-w-0'>
                                <h4 className='text-sm sm:text-base font-bold text-white group-hover/sub:text-emerald-300 transition-colors truncate'>
                                  {app.title}
                                </h4>
                                <p className='text-xs text-white/50 font-medium mt-0.5 truncate'>
                                  {app.badge}
                                </p>
                              </div>
                            </div>

                            {/* Action Links: GitHub & Live Demo */}
                            <div className='flex items-center gap-2 flex-shrink-0'>
                              {app.githubUrl && (
                                <a
                                  href={app.githubUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  title={`View ${app.title} GitHub Source`}
                                  aria-label={`View ${app.title} GitHub Source`}
                                  className='p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-200 shadow-sm'
                                >
                                  <GithubIcon className='w-4 h-4' />
                                </a>
                              )}
                              {app.liveUrl && (
                                <a
                                  href={app.liveUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  title={`Launch ${app.title} Live Demo`}
                                  aria-label={`Launch ${app.title} Live Demo`}
                                  className='p-2 sm:p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-400 text-emerald-300 hover:text-black border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 shadow-sm'
                                >
                                  <ExternalLink className='w-4 h-4' />
                                </a>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </>
                  )}

                  {/* Case 2: Standalone Full-Stack / AI Web App (e.g. AI Chatbot Assistant) */}
                  {!project.apps && (
                    <div className='p-6 rounded-2xl bg-[#091820]/90 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-[#0c222c] hover:shadow-[0_0_24px_rgba(52,211,153,0.18)] transition-all duration-300 flex flex-col justify-between gap-5'>
                      <div>
                        <div className='flex items-center gap-3 mb-4'>
                          <div className='w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner'>
                            <Bot className='w-5 h-5' />
                          </div>
                          <div>
                            <span className='text-xs uppercase font-extrabold tracking-wider text-emerald-400'>
                              Key Architectural Capabilities
                            </span>
                            <h4 className='text-base font-bold text-white'>Production Highlights</h4>
                          </div>
                        </div>

                        {/* Highlights checklist */}
                        {project.highlights && (
                          <div className='space-y-2.5'>
                            {project.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className='flex items-start gap-2.5 text-xs text-white/80'>
                                <CheckCircle2 className='w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5' />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className='flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 text-xs font-bold transition-all duration-200 shadow-sm'
                          >
                            <GithubIcon className='w-4 h-4' />
                            <span>GitHub</span>
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-400 text-emerald-300 hover:text-black border border-emerald-500/30 hover:border-emerald-400 text-xs font-bold transition-all duration-200 shadow-sm'
                          >
                            <ExternalLink className='w-4 h-4' />
                            <span>Live App</span>
                          </a>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
