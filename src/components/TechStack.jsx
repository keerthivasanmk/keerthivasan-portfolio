import Image from 'next/image';
import { skillCategories } from '../constants/constants';

export default function TechStack() {
    return (
        <section className='w-full'>
            <div className='text-center mb-8'>
                <h2 className='title text-center'>
                    Technical <span className='text-black'>Skills</span>
                </h2>
                <p className='text-white/80 text-sm mt-1'>
                    Categorized technology stack honed across 5+ years of full-stack engineering
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skillCategories.map((group, groupIdx) => (
                    <div 
                        key={groupIdx} 
                        className='bg-white/95 rounded-2xl p-5 shadow-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
                    >
                        {/* Category Header */}
                        <div className='flex items-center justify-between border-b border-gray-100 pb-3 mb-4'>
                            <h3 className='font-black text-black text-base flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-[#3a98af]'></span>
                                {group.category}
                            </h3>
                            <span className='text-[11px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full'>
                                {group.skills.length} skills
                            </span>
                        </div>

                        {/* Skills List in Category */}
                        <div className='grid grid-cols-2 gap-3'>
                            {group.skills.map((skill, skillIdx) => (
                                <div 
                                    key={skillIdx} 
                                    className='flex items-center gap-2.5 p-2 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#3a98af]/40 hover:shadow-sm transition-all duration-200'
                                >
                                    <div className='w-8 h-8 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-xs flex-shrink-0 border border-gray-100'>
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={24}
                                            height={24}
                                            className='w-5 h-5 object-contain'
                                        />
                                    </div>
                                    <span className='text-xs font-bold text-gray-800 truncate'>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
