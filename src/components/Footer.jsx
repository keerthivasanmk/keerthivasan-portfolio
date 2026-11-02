import SocialMedia from './SocialMedia'

export default function Footer () {
  return (
    <footer className='text-white/90 mx-5 py-6 px-4 flex justify-between items-center border-t border-white/20 tablet:flex-col tablet:gap-4 tablet:text-center text-xs font-semibold'>
      <div>
        <span>© {new Date().getFullYear()} Keerthivasan. All rights reserved.</span>
        <span className='mx-2 text-white/40'>|</span>
        <span>Built with Next.js, Tailwind CSS &amp; Vercel</span>
      </div>
      <SocialMedia />
    </footer>
  )
}
