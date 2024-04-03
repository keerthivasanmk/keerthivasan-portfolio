import Image from 'next/image'
import { socialPlatforms } from '../constants/constants'

export default function SocialMedia() {
    return (
        <div className='flex gap-4 font-medium'>
            {
                socialPlatforms?.map((item, index) => (
                    <a href={item?.url} target='_blank' key={index}>
                        <Image
                            src={item?.icon}
                            alt={item?.type}
                            width={22}
                        />
                    </a>
                ))
            }
        </div>
    )
}