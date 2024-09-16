import SocialMedia from './SocialMedia'

export default function Footer () {
  return (
    <div className='text-white mx-5 p-5 flex justify-between border-t-2 tablet:flex-col tablet:gap-2 tablet:text-sm	'>
      Built with Next.js, Tailwind and Vercel
      <SocialMedia />
    </div>
  )
}
