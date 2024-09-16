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
                <h3 className='title-3 mb-2 tablet:text-base'>Developer <span className='text-white'>|</span> Apr 2023 to Feb 2024</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                    <li>As a valuable contributor to the KwickMetrics team, I successfully developed and implemented various features, including Feedback automator and Product revamp UI.</li>
                    <li>I leverage my expertise in UI design and logic to improve the overall UI and UX.</li>
                    <li>https://demo.kwickmetrics.com.</li>
                </ul>
                <h3 className='title-3 mb-1 tablet:text-base'>Junior Developer <span className='text-white'>|</span> Apr 2022 to Mar 2023</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                    <li>Developed and launched the landing page for the Kwickmetrics app</li>
                    <li>Took complete ownership of the project</li>
                    <li>Collaborated seamlessly with the design team</li>
                    <li>Implemented server side rendering (SSR) techniques</li>
                    <li>Ensured responsiveness and browser compatability</li>
                    <li>Visit the live project at www.kwickmetrics.com</li>
                </ul>
                <h3 className='title-3 mb-1 tablet:text-base'>Developer Trainee <span className='text-white'>|</span> Oct 2021 to Mar 2022</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                    <li>Developed a comprehensive documentation site</li>
                    <li>Collaborated with content and design teams to extract valuable insights and content</li>
                    <li>Ensured seamless user experience and accessibility</li>
                </ul>
                <h3 className='title-3 mb-1 tablet:text-base'>Developer Intern <span className='text-white'>|</span> Apr 2021 to Sept 2022</h3>
                <ul className='list-disc list-inside text-white mb-5 tablet:text-sm'>
                    <li>Developed a comprehensive documentation site</li>
                    <li>Collaborated with content and design teams to extract valuable insights and content</li>
                    <li>Ensured seamless user experience and accessibility</li>
                </ul>
            </div>
            <TechStack/>
        </div>
    )
}