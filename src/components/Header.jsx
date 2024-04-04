'use client'
// Dependencies
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const router = usePathname();

    return (
        <div className='text-white p-5 flex justify-between	sticky top-0 font-black	bg-primary-sky-blue z-10 shadow-3xl'>
            <Link href='/'>KEERTHIVASAN</Link>
            <div className='flex gap-4 font-medium'>
                <Link href="/" className={`pb-1 ${router === '/' ? 'border-b-2 border-solid' : ''}`}>Home</Link>
                <Link href="/about" className={`pb-1 ${router === '/about' ? 'border-b-2 border-solid' : ''}`}>About</Link>
                <Link href="/contact" className={`pb-1 ${router === '/contact' ? 'border-b-2 border-solid' : ''}`}>Contact</Link>
                <Link href="/experience" className={`pb-1 ${router === '/experience' ? 'border-b-2 border-solid' : ''}`}>Experience</Link>
            </div>
        </div>
    )
}