'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code2, 
  Rocket 
} from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects } from '@/constants/constants'

export default function ProjectsSection() {
  return (
    <section id='projects' className='py-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <FolderGit2 className='w-3.5 h-3.5' />
          <span>Featured Work</span>
        </div>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>
          Full-stack architectures and production applications engineered for speed, reliability, and scale.
        </p>
      </motion.div>

      {/* Projects Showcase Grid */}
      <div className='space-y-12 max-w-5xl mx-auto'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='glass-card p-6 sm:p-8 hover:border-white/20 transition-all duration-300'
          >
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
              {/* Left / Visual Preview */}
              <div className='lg:col-span-6'>
                <div className='relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 bg-black/40 group'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes='(max-width: 1024px) 100vw, 50vw'
                      className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
                      unoptimized
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900/30 to-cyan-900/30'>
                      <Code2 className='w-16 h-16 text-emerald-400/50' />
                    </div>
                  )}

                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300'></div>

                  <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
                    <span className='px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-emerald-500/30'>
                      {project.type}
                    </span>
                    <span className='text-xs text-white/70 font-semibold'>
                      Next.js • Firebase • Vercel
                    </span>
                  </div>
                </div>
              </div>

              {/* Right / Case Study Details */}
              <div className='lg:col-span-6 flex flex-col justify-between space-y-5'>
                <div>
                  <div className='flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1'>
                    <Sparkles className='w-3.5 h-3.5' />
                    {project.subtitle}
                  </div>
                  <h3 className='text-2xl sm:text-3xl font-black text-white'>
                    {project.title}
                  </h3>
                </div>

                {/* Overview */}
                <div>
                  <h4 className='text-xs uppercase font-extrabold tracking-wider text-white/40 mb-1.5'>
                    Architecture &amp; Overview
                  </h4>
                  <p className='text-sm text-white/80 leading-relaxed font-normal'>
                    {project.overview}
                  </p>
                </div>

                {/* Role & Contributions */}
                <div>
                  <h4 className='text-xs uppercase font-extrabold tracking-wider text-white/40 mb-1.5'>
                    Key Contributions
                  </h4>
                  <p className='text-sm text-white/80 leading-relaxed font-normal'>
                    {project.roleAndContributions}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className='text-xs uppercase font-extrabold tracking-wider text-white/40 mb-2'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-2'>
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

                {/* Links */}
                <div className='pt-4 border-t border-white/10 flex items-center gap-4'>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-secondary text-xs'
                    >
                      <GithubIcon className='w-4 h-4' />
                      Source Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-primary text-xs'
                    >
                      <ExternalLink className='w-4 h-4' />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Future / Custom Engineering Collaboration Slot */}
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
                window.__lenis.scrollTo(el, { offset: -70 })
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
