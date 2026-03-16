import React from 'react'
import Button from './Button'

const CardExperience = ({role, company, period, description, technologies, link, className}) => {

  return (
    <div className={className}>
        <div className='p-4 md:p-10 grid md:grid-cols-[.4fr_1fr]'>
            <div className='mb-5 md:mb-0'>
                <h2 className='mb-1 font-Playfair font-bold text-black text-base md:text-xl'>
                    <a href={link}>{company}</a>
                </h2>
                <p className='text-xs text-zinc-400 font-rubik font-normal'>{period}</p>
            </div>
            <div>
                <h2 className='font-medium text-base font-rubik text-zinc-800 mb-3'>{role}</h2>
                <p className='text-sm text-zinc-900 font-normal font-rubik'>{description}</p>
                <div className='mt-3 md:mt-4 flex gap-2 flex-wrap'>
                    {
                        technologies.map((technologie, key) => (
                            <Button 
                                key={key}
                                label={technologie}
                                className='bg-[#f5f4f2] text-black text-xs font-rubik border border-zinc-200 px-3 py-1 font-normal rounded-full flex items-center justify-center'
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardExperience
