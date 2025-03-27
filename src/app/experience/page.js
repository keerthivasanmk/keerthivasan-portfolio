// Images
import mailIcon from '@/images/mail.png';
import locationIcon from '@/images/location.png';
import phoneIcon from '@/images/phone.png';

// Components
import TechStack from '@/components/TechStack';

export default function Projects() {
    const contact = [
        { type: 'mail', icon: mailIcon, text: 'keerthikrishna66@gmail.com' },
        { type: 'location', icon: locationIcon, text: 'Rasipuram' },
        { type: 'phone', icon: phoneIcon, text: '+91 8344803585' }
    ];
    
    return (
        <div className='flex flex-col child-container gap-5'>
            <h2 className='title text-center'>Experience</h2>
            <div className="w-full h-full mb-5">
                <h2 className='title-2 mb-5 underline tablet:text-lg'>Mallow Technologies</h2>
                <h3 className='title-3 mb-2 tablet:text-base'>Developer <span className='text-white'>|</span> Apr 2021 to Feb 2024</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                    <li>Developed high-performance, scalable, responsive applications using Next.js and React.</li>
                    <li>Optimizing web applications for performance, reducing load times, and improving Core Web Vitals.</li>
                    <li>Optimized frontend performance, achieving faster load times and improved UX.</li>
                    <li>Mentoring interns and conducting code reviews to maintain high-quality standards.</li>
                </ul>
                <h2 className='title-2 mb-5 underline tablet:text-lg'>AOT Technologies</h2>
                <h3 className='title-3 mb-2 tablet:text-base'>Software Engineer III <span className='text-white'>|</span> Apr 2024 to Present</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                <li>Developing full-stack applications with Vue.js, React.js, Node.js, and Next.js.</li>
                <li>Implementing user analytics & event tracking using PostHog.</li>
                    <li>Optimizing frontend performance for faster load times and enhanced user experience.</li>
                </ul>
            </div>
            <TechStack/>
        </div>
    )
}