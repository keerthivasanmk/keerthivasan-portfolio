'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu, Sparkles } from 'lucide-react'
import { skillCategories } from '@/constants/constants'

export default function SkillsSection() {
  return (
    <section id='skills' className='py-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <Cpu className='w-3.5 h-3.5' />
          <span>Technical Capabilities</span>
        </div>
        <h2 className='section-title'>Skills &amp; Technologies</h2>
        <p className='section-subtitle'>
          Categorized technical stack proven across 5+ years of production software development.
        </p>
      </motion.div>

      {/* Categorized Skills Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {skillCategories.map((group, groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
            className='glass-card p-6 hover:border-white/25 transition-all duration-300'
          >
            {/* Header */}
            <div className='flex items-center justify-between pb-3 mb-4 border-b border-white/10'>
              <h3 className='font-black text-white text-base flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
                {group.category}
              </h3>
              <span className='text-[11px] font-bold text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10'>
                {group.skills.length} tools
              </span>
            </div>

            {/* Skills Pills */}
            <div className='grid grid-cols-2 gap-2.5'>
              {group.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className='flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-200 group'
                >
                  <div className='w-7 h-7 rounded-lg bg-black/40 p-1.5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform'>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                  <span className='text-xs font-semibold text-white/90 truncate'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
