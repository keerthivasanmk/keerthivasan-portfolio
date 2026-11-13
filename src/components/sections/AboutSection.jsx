'use client'

import { motion } from 'framer-motion'
import { 
  User, 
  Code2, 
  Cloud, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Layers 
} from 'lucide-react'
import { certifications, education } from '@/constants/constants'

export default function AboutSection() {
  const highlights = [
    {
      title: 'Full Stack Engineering',
      desc: 'Expertise across modern frontend (React, Next.js, TypeScript) and resilient backend services (Node.js, REST APIs).',
      icon: Code2
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Hands-on AWS deployments using ECR, EBS, S3, and containerized Docker environments.',
      icon: Cloud
    },
    {
      title: 'Enterprise Observability & Security',
      desc: 'Distributed tracing with OpenTelemetry, Grafana dashboards, and proactive Snyk vulnerability remediation.',
      icon: ShieldCheck
    },
    {
      title: 'Production Scale Applications',
      desc: 'Proven track record shipping high-availability applications for global platforms like Hootsuite and KwickMetrics.',
      icon: Layers
    }
  ]

  return (
    <section id='about' className='scroll-mt-24 pt-12 pb-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <User className='w-3.5 h-3.5' />
          <span>Profile &amp; Background</span>
        </div>
        <h2 className='section-title'>About Me</h2>
        <p className='section-subtitle'>
          Full Stack Developer with 5+ years of production experience engineering scalable web platforms and cloud-native services.
        </p>
      </motion.div>

      {/* Main Grid: Story + Highlights */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12'>
        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='lg:col-span-7 glass-card p-5 sm:p-8 flex flex-col justify-between'
        >
          <div>
            <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
              Engineering Philosophy &amp; Experience
            </h3>
            <div className='space-y-4 text-sm text-white/80 leading-relaxed font-normal'>
              <p>
                I am a <strong>Full Stack Developer</strong> with <strong>5+ years of professional development experience</strong> delivering high-performance, fault-tolerant web applications and enterprise services.
              </p>
              <p>
                My core strength lies in bridging modern frontend user experiences—crafted with <strong>React.js, Next.js, and TypeScript</strong>—with robust, production-grade <strong>Node.js backend architectures</strong> and secure REST APIs.
              </p>
              <p>
                Having deployed enterprise systems on <strong>AWS</strong> using <strong>Amazon ECR, EBS, and S3</strong> alongside <strong>Docker</strong> containerization, I specialize in streamlining developer workflows, securing codebases against vulnerabilities (via <strong>Snyk</strong>), and ensuring real-time application observability using <strong>OpenTelemetry and Grafana</strong>.
              </p>
            </div>
          </div>

          <div className='pt-6 mt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center'>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='text-2xl font-black text-emerald-400'>5+</div>
              <div className='text-[11px] text-white/60 font-medium mt-0.5'>Years Exp.</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='text-2xl font-black text-white'>100%</div>
              <div className='text-[11px] text-white/60 font-medium mt-0.5'>Production Code</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='text-2xl font-black text-cyan-400'>AWS</div>
              <div className='text-[11px] text-white/60 font-medium mt-0.5'>ECR / EBS / S3</div>
            </div>
            <div className='p-3 rounded-xl bg-white/5 border border-white/10'>
              <div className='text-2xl font-black text-teal-300'>Docker</div>
              <div className='text-[11px] text-white/60 font-medium mt-0.5'>Containers</div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Pillars Bento */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className='glass-card p-5 hover:border-emerald-400/40 transition-colors duration-200'
              >
                <div className='flex items-start gap-3.5'>
                  <div className='p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0'>
                    <Icon className='w-4 h-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-bold text-white mb-1'>{item.title}</h4>
                    <p className='text-xs text-white/70 leading-relaxed'>{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Certifications & Education Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'
      >
        {/* Certifications */}
        <div className='glass-card p-6'>
          <div className='flex items-center gap-2 mb-4 pb-3 border-b border-white/10'>
            <Award className='w-4 h-4 text-emerald-400' />
            <h3 className='text-base font-bold text-white'>Certifications</h3>
          </div>
          <div className='space-y-4'>
            {certifications.map((cert, idx) => (
              <div key={idx} className='p-4 rounded-xl bg-white/5 border border-white/10'>
                <div className='flex items-center justify-between mb-1.5'>
                  <span className='text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'>
                    {cert.badge}
                  </span>
                  <span className='text-[11px] text-white/50'>{cert.issuer}</span>
                </div>
                <h4 className='text-sm font-bold text-white'>{cert.title}</h4>
                <p className='text-xs text-white/70 mt-1 leading-relaxed'>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className='glass-card p-6'>
          <div className='flex items-center gap-2 mb-4 pb-3 border-b border-white/10'>
            <GraduationCap className='w-4 h-4 text-emerald-400' />
            <h3 className='text-base font-bold text-white'>Education</h3>
          </div>
          <div className='space-y-4'>
            {education.map((edu, idx) => (
              <div key={idx} className='p-4 rounded-xl bg-white/5 border border-white/10'>
                <div className='flex items-center justify-between mb-1'>
                  <h4 className='text-sm font-bold text-white'>{edu.degree}</h4>
                  <span className='text-xs text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20'>
                    {edu.period}
                  </span>
                </div>
                <div className='text-xs font-semibold text-white/80 mb-2'>{edu.institution}</div>
                <p className='text-xs text-white/70 leading-relaxed'>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
