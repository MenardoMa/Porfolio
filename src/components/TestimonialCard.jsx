import React from 'react'

const TestimonialCard = ({ content, name, imgSrc, company, link, className }) => {
  return (
    <div  className={className}>
        <p className='text-2xl sm:text-3xl mb-0 leading-5 lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent'>"</p>
        <p className="text-zinc-700 text-sm font-rubik mb-8 relative">
            {content}
        </p>
        <div className="flex items-center gap-4 mt-auto">
            <figure className="img-box overflow-hidden rounded-full w-10 h-10 border border-zinc-300/50">
                <img
                    src={imgSrc}
                    alt={name}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="img-cover w-full object-cover"
                />
            </figure>
            <div>
                <p className='font-rubik'>{name}</p>
                <p className="text-[13px] text-zinc-500 tracking-wider font-rubik">{company}</p>
                <p className='text-sm font-rubik'>
                    <a 
                        href={link} 
                        target='_blank'
                        className='font-medium text-[#9966ff] hover:text-[#ad91e6] active:text-[#ad91e6] focus:text-[#ad91e6] transition-colors duration-300'>LinkedIn ↗</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
