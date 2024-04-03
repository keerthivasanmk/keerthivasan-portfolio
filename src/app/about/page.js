// Dependencies
import Image from 'next/image'

// Images
import authourImage from '../images/authour.jpg'

// Components
import SocialMedia from '../../components/SocialMedia';

export default function About() {
    return (
        <div className='flex flex-col child-container items-center gap-5'>
            <h2 className='title'>About <span className='text-black'>Me!</span></h2>
            <div className="flex w-full h-full items-center">
                <div className="p-5 w-1/2 flex flex-col items-center gap-5">
                    <Image
                        src={authourImage}
                        alt="Keerthivasan"
                        width={200}
                        height={100}
                        className='rounded-full h-[200px]'
                    />
                    <SocialMedia />
                </div>
                <div className='w-[2px] bg-[#496e6d] h-[80%]'></div>
                <div className='w-1/2 p-5 text-white about-main-content max-w-[600px] m-auto'>
                    <p>I&apos;m Keerthivasan, Skilled Frontend Developer with nearly 3 years of experience in delivering the output with quality code in a stipulated time.</p>
                    <p>I excel in app development with <strong className='text-black'>React js, Redux, Next js and Wordpress CMS</strong> ensuring efficient and dynamic web experiences.</p>
                    <a href='/Keerthivasan_resume.pdf' className='button mt-5' download>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}