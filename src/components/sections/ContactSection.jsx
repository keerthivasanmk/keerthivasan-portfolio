'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'
import { personalInfo } from '@/constants/constants'

export default function ContactSection() {
  const [loader, setLoader] = useState(false)
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false)
  const formRef = useRef()

  const contactDetails = [
    { type: 'email', icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { type: 'location', icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { type: 'phone', icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, '')}` }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        }
      )
      .then(
        () => {
          setLoader(false)
          setIsShowSuccessMessage(true)
          formRef.current.reset()
          setTimeout(() => {
            setIsShowSuccessMessage(false)
          }, 5000)
        },
        (error) => {
          setLoader(false)
          console.error('EmailJS error:', error)
        }
      )
  }

  return (
    <section id='contact' className='py-20 border-t border-white/10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400 mb-3'>
          <MessageSquare className='w-3.5 h-3.5' />
          <span>Get In Touch</span>
        </div>
        <h2 className='section-title'>Let&apos;s Connect</h2>
        <p className='section-subtitle'>
          Whether you have an upcoming project, engineering role, or question—my inbox is always open.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto'>
        {/* Left Column: Direct Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='lg:col-span-5 glass-card p-6 sm:p-8 flex flex-col justify-between'
        >
          <div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Engineering Collaboration
            </h3>
            <p className='text-xs text-white/70 leading-relaxed mb-6'>
              Available for full stack engineering positions, technical consulting, and scalable web application development.
            </p>

            <div className='space-y-3.5'>
              {contactDetails.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className='flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10'
                  >
                    <div className='w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0'>
                      <Icon className='w-4 h-4' />
                    </div>
                    <div>
                      <div className='text-[11px] font-bold text-white/40 uppercase tracking-wider'>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className='text-xs font-semibold text-white hover:text-emerald-300 transition-colors'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className='text-xs font-semibold text-white'>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Social Profiles */}
          <div className='pt-6 mt-6 border-t border-white/10'>
            <span className='text-xs font-bold text-white/50 block mb-3 uppercase tracking-wider'>
              Connect Online
            </span>
            <div className='flex items-center gap-3'>
              <a
                href='https://github.com/keerthivasanmk'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all duration-200 transform hover:scale-105'
                aria-label='GitHub'
              >
                <GithubIcon className='w-4 h-4' />
              </a>
              <a
                href='https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-xl bg-white/5 hover:bg-[#0077B5] text-white border border-white/10 transition-all duration-200 transform hover:scale-105'
                aria-label='LinkedIn'
              >
                <LinkedinIcon className='w-4 h-4' />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='lg:col-span-7 glass-card p-6 sm:p-8 relative'
        >
          <h3 className='text-xl font-bold text-white mb-1'>Send a Message</h3>
          <p className='text-xs text-white/60 mb-6'>
            Fill in the form and I will respond within 24 business hours.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-xs font-bold text-white/70 mb-1.5'>
                Your Name
              </label>
              <input
                type='text'
                name='name'
                required
                placeholder='e.g. Alex Smith'
                className='w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-emerald-400 focus:bg-white/10 transition duration-200'
              />
            </div>

            <div>
              <label className='block text-xs font-bold text-white/70 mb-1.5'>
                Your Email
              </label>
              <input
                type='email'
                name='email'
                required
                placeholder='alex@example.com'
                className='w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-emerald-400 focus:bg-white/10 transition duration-200'
              />
            </div>

            <div>
              <label className='block text-xs font-bold text-white/70 mb-1.5'>
                Message
              </label>
              <textarea
                name='message'
                required
                rows={4}
                placeholder='Discuss a project, architecture, or full stack opportunity...'
                className='w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-emerald-400 focus:bg-white/10 transition duration-200 resize-none'
              ></textarea>
            </div>

            <button
              type='submit'
              disabled={loader}
              className='btn-primary w-full'
            >
              {loader ? (
                <div className='loader'></div>
              ) : (
                <>
                  <Send className='w-4 h-4' />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Success Notification */}
          {isShowSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2'
            >
              <CheckCircle2 className='w-4 h-4 text-emerald-400' />
              <span>Message sent successfully! I will get back to you soon.</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
