import Image from 'next/image'
import { techStack, tools } from '../constants/constants'

export default function TechStack() {
    return (
        <>
            <h2 className='title text-center mb-5'>Tech <span className='text-black'>Stack</span></h2>
            <div className='flex flex-wrap gap-y-10 font-medium items-center tablet:gap-6'>
                {
                    techStack?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 items-center w-[calc(100%/7)] tablet:h-[100px]'>
                            <Image
                                src={item?.image}
                                alt={item?.name}
                                className='bg-white rounded p-2 h-20 w-20 tablet:w-10 tablet:h-10'
                            />
                            <p className='text-sm font-bold tablet:text-xs'>{item?.name}</p>
                        </div>
                    ))
                }
            </div>
            <h2 className='title text-center mb-5 mt-10'>Familiar <span className='text-black'>Tools</span></h2>
            <div className='flex flex-wrap gap-y-10 font-medium items-center tablet:gap-6'>
                {
                    tools?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 items-center w-[calc(100%/7)] tablet:h-[100px]'>
                            <Image
                                src={item?.image}
                                alt={item?.name}
                                className='bg-white rounded p-2 h-20 w-20 tablet:w-10 tablet:h-10'
                            />
                            <p className='text-sm font-bold tablet:text-xs'>{item?.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}