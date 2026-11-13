'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react'
import { workExperience } from '@/constants/constants'

export default function ExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState({ 0: true, 1: true })

  const toggleExpand = (index) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id='experience' className='scroll-mt-24 pt-12 pb-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <Briefcase className='w-3.5 h-3.5' />
          <span>Career Journey</span>
        </div>
        <h2 className='section-title'>Work Experience</h2>
        <p className='section-subtitle'>
          5+ Years of delivering scalable, production-grade applications in reverse chronological order.
        </p>
      </motion.div>

      {/* Vertical Glowing Timeline */}
      <div className='relative max-w-4xl mx-auto'>
        {/* Timeline Central Spine Line */}
        <div className='absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-500 to-white/10'></div>

        <div className='space-y-8 pl-12 sm:pl-16'>
          {workExperience.map((exp, index) => {
            const isExpanded = expandedIndices[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className='relative'
              >
                {/* Timeline Node Indicator */}
                <div className='absolute -left-[45px] sm:-left-[53px] top-6 flex items-center justify-center'>
                  <div className={`w-6 h-6 rounded-full border-2 ${exp.isCurrent ? 'border-emerald-400 bg-black' : 'border-white/30 bg-black'} flex items-center justify-center shadow-lg`}>
                    {exp.isCurrent ? (
                      <span className='w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
                    ) : (
                      <span className='w-2 h-2 rounded-full bg-white/60'></span>
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className='glass-card p-5 sm:p-7 hover:border-white/20 transition-all duration-300'>
                  {/* Top Bar: Company, Client, Period */}
                  <div className='flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/10'>
                    <div>
                      <div className='flex items-center gap-2.5 flex-wrap'>
                        <h3 className='text-xl sm:text-2xl font-black text-white'>
                          {exp.company}
                        </h3>
                        {exp.client && (
                          <span className='text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'>
                            Client / Product: {exp.client}
                          </span>
                        )}
                      </div>
                      <div className='text-base font-bold text-emerald-400 mt-1 flex items-center gap-1.5'>
                        <Building2 className='w-4 h-4' />
                        {exp.role}
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                        exp.isCurrent 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-white/10 text-white/80 border border-white/10'
                      }`}>
                        <Calendar className='w-3 h-3' />
                        {exp.period}
                      </span>

                      <button
                        onClick={() => toggleExpand(index)}
                        className='p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors'
                        aria-label='Toggle details'
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className='text-sm text-white/80 mt-4 leading-relaxed font-normal'>
                    {exp.description}
                  </p>

                  {/* Expandable Achievements */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <div className='pt-5 mt-4 border-t border-white/10 space-y-4'>
                          <h4 className='text-xs font-extrabold uppercase tracking-wider text-white/40 flex items-center gap-1.5'>
                            <Sparkles className='w-3.5 h-3.5 text-emerald-400' />
                            Key Engineering Achievements
                          </h4>
                          <ul className='space-y-2.5'>
                            {exp.achievements.map((item, itemIdx) => (
                              <li key={itemIdx} className='flex items-start gap-3 text-sm text-white/85 leading-relaxed'>
                                <CheckCircle2 className='w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0' />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Pills */}
                          <div className='pt-4 border-t border-white/10'>
                            <span className='text-xs font-semibold text-white/50 block mb-2'>
                              Technologies &amp; Frameworks:
                            </span>
                            <div className='flex flex-wrap gap-2'>
                              {exp.technologies.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className='text-xs font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90 hover:border-emerald-400/40 transition-colors'
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
