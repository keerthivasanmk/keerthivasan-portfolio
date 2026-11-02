import Image from 'next/image';
import { socialPlatforms } from '../constants/constants';

export default function SocialMedia({ className = '' }) {
    return (
        <div className={`flex gap-4 items-center ${className}`}>
            {socialPlatforms?.map((item, index) => (
                <a 
                    href={item?.url} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    key={index}
                    aria-label={item?.label || item?.type}
                    className='p-2.5 rounded-full bg-white/20 hover:bg-white text-black transition-all duration-200 transform hover:scale-110 shadow-sm border border-white/20 flex items-center justify-center'
                >
                    <Image
                        src={item?.icon}
                        alt={item?.label || item?.type}
                        width={20}
                        height={20}
                        className='w-5 h-5 object-contain'
                    />
                </a>
            ))}
        </div>
    );
}
