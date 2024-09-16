'use client'
// Dependencies
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

// Images
import mailIcon from '@/images/mail.png'
import locationIcon from '@/images/location.png'
import phoneIcon from '@/images/phone.png'
import SocialMedia from '@/components/SocialMedia'

export default function ContactUs () {
  const [loader, setloader] = useState(false)
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false)
  const formRef = useRef()

  const contact = [
    { type: 'mail', icon: mailIcon, text: 'keerthikrishna66@gmail.com' },
    { type: 'location', icon: locationIcon, text: 'Rasipuram' },
    { type: 'phone', icon: phoneIcon, text: '+91 8344803585' }
  ]

  const handleSubmit = e => {
    e.preventDefault()
    setloader(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setloader(false)
          setIsShowSuccessMessage(true)
          formRef.current.reset()
          setTimeout(() => {
            setIsShowSuccessMessage(false)
          }, 5000)
        },
        error => {
          console.log('FAILED...', error)
        }
      )
  }

  return (
    <div className='flex flex-col child-container items-center gap-5'>
      <h2 className='title'>
        Coffee <span className='text-black'>with</span> Me!
      </h2>
      <p className='tablet:text-sm'>
        I am always excited to work on any awesome projects. Message me and
        let&lsquo;s discuss over coffee.
      </p>
      <div className='flex w-full h-full items-center  tablet:flex-col-reverse'>
        <div className='p-5 w-1/2 flex flex-col items-center gap-7'>
          <div className='flex flex-col gap-5 font-bold tablet:text-sm'>
            {contact?.map((item, index) => (
              <div className='flex gap-3 items-center' key={index}>
                <Image src={item?.icon} alt={item?.type} width={22} />
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
          <SocialMedia />
        </div>
        <div className='w-1/2 p-5 about-main-content tablet:w-full tablet:p-0'>
          <div className='mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-4 flex items-center flex-col gap-5 relative'>
            <h2 className='text-xl font-bold text-black'>
              Send me a Message 🚀
            </h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type='text'
                className='min-h-[auto] w-full border-b-2 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-black mb-6'
                placeholder='Name'
                name='name'
                required
              />

              <input
                type='email'
                className='min-h-[auto] w-full border-b-2 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-black mb-6'
                placeholder='Email'
                name='email'
                required
              />
              <textarea
                className='min-h-[auto] w-full border-b-2 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-black mb-6'
                placeholder='Message'
                name='message'
                required
              ></textarea>
              <button
                type='submit'
                className='button w-full rounded flex justify-center gap-3 items-center'
                disabled={loader}
              >
                {loader ? <div className='loader'></div> : 'Send'}
              </button>
            </form>
            {isShowSuccessMessage && (
              <div className='bg-[#5cb85c] text-white font-bold text-base px-2 py-1 rounded absolute duration-1000 snackbar top-[35px]'>
                Email Sent Successfully
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
