import SocialMedia from './SocialMedia';

export default function Footer() {
    return (
        <div className='text-white mx-5 p-5 flex justify-between border-t-2'>
            Built with Next.js, Tailwind and Vercel
            <SocialMedia/>
        </div>
    )
}