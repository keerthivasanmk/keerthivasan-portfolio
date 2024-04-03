import Link from 'next/link'

export default function Header() {
    return (
        <div className='text-white p-5 flex justify-between	sticky top-0 font-black	bg-primary-sky-blue z-10 shadow-3xl'>
            <Link href='/'>KEERTHIVASAN</Link>
            <div className='flex gap-4 font-medium'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/experience">Experience</Link>
            </div>
        </div>
    )
}