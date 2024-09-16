'use client'
// Dependencies
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

// Images
import menuIcon from '@/images/menu-icon.svg';

export default function Header() {
    const router = usePathname();
    const [showNavbarMenus, setShowNavbarMenus] = useState(false);

    return (
        <div className='text-white p-5 flex justify-between	sticky top-0 font-black	bg-primary-sky-blue z-10 shadow-3xl'>
            <Link href='/'>KEERTHIVASAN</Link>
            <div className={`flex gap-4 font-medium tablet:gap-2 tablet:flex-col tablet:absolute right-5 top-12 tablet:bg-black tablet:p-3 rounded-lg ${!showNavbarMenus ? 'tablet:hidden' : ''}`}>
                <Link href="/" className={`pb-1 ${router === '/' ? 'border-b-2 border-solid' : ''}`}>Home</Link>
                <Link href="/about" className={`pb-1 ${router === '/about' ? 'border-b-2 border-solid' : ''}`}>About</Link>
                <Link href="/contact" className={`pb-1 ${router === '/contact' ? 'border-b-2 border-solid' : ''}`}>Contact</Link>
                <Link href="/experience" className={`pb-1 ${router === '/experience' ? 'border-b-2 border-solid' : ''}`}>Experience</Link>
            </div>
            <div className='hidden tablet:block cursor-pointer' onClick={() => setShowNavbarMenus(!showNavbarMenus)}>
                <Image src={menuIcon} alt={'Menu icon'} width={22} />
            </div>
        </div>
    )
}