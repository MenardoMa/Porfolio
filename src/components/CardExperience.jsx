import React from 'react'
import Button from './Button'

const CardExperience = ({role, description, technologies, className}) => {
  return (
    <div className={className}>
        <div className='p-4 md:p-5'>
            <h2 className='font-medium text-base font-rubik text-zinc-800 mb-2'>{role}</h2>
            <p className='text-sm text-zinc-400 font-normal font-rubik'>{description}</p>
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
  )
}

export default CardExperience
