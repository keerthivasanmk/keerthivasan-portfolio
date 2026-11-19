'use client'

import { motion } from 'framer-motion'
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Laptop, 
  Store, 
  Bike,
  Bot
} from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects, foodDeliveryEcosystem, moreProjects } from '@/constants/constants'

export default function ProjectsSection() {
  const featured = projects[0]

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
        className='text-center mb-12'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <FolderGit2 className='w-3.5 h-3.5' />
          <span>Featured Work</span>
        </div>
        <h2 className='section-title'>Featured Projects</h2>
      </motion.div>

      <div className='max-w-6xl mx-auto'>
        {/* Featured Main Project Card: Food Delivery Platform Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                  <span>{featured.subtitle}</span>
                </div>

                {/* Ecosystem Title */}
                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3'>
                  {featured.title}
                </h3>

                {/* Project Category Tag */}
                <div className='inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold mb-5 shadow-xs'>
                  {featured.type}
                </div>

                {/* Overview Description */}
                <p className='text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-6'>
                  {featured.overview}
                </p>
              </div>

              {/* Core Technologies Row */}
              <div className='pt-2'>
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='text-xs font-bold text-white/50 mr-1'>Core Technologies:</span>
                  {featured.technologies.map((tech, idx) => (
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

            {/* Right Column: 3 Sub-Applications Showcase Cards */}
            <div className='lg:col-span-5 flex flex-col gap-3.5'>
              {foodDeliveryEcosystem.map((app) => {
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
            </div>
          </div>
        </motion.div>

        {/* MORE PROJECTS Header & Grid */}
        <div className='mt-14'>
          <h3 className='text-xs sm:text-sm font-black uppercase tracking-wider text-white/40 flex items-center gap-2 mb-6'>
            <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
            More Projects
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {moreProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='glass-card p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.12)] transition-all duration-300 flex flex-col justify-between group'
              >
                <div>
                  {/* Icon */}
                  <div className='w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform duration-200 shadow-inner'>
                    <Bot className='w-5 h-5' />
                  </div>

                  {/* Title & Description */}
                  <h4 className='text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors'>
                    {project.title}
                  </h4>
                  <p className='text-xs sm:text-sm text-white/70 leading-relaxed mb-5 font-normal'>
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className='flex flex-wrap gap-1.5 mb-6'>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className='grid grid-cols-2 gap-3 pt-3 border-t border-white/10'>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 text-xs font-bold transition-all duration-200 shadow-sm'
                  >
                    <GithubIcon className='w-3.5 h-3.5' />
                    <span>Github</span>
                  </a>

                  <button
                    onClick={openAiChat}
                    className='inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-400 text-emerald-300 hover:text-black border border-emerald-500/30 hover:border-emerald-400 text-xs font-bold transition-all duration-200 shadow-sm'
                  >
                    <Sparkles className='w-3.5 h-3.5' />
                    <span>Live Demo</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
