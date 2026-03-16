import React from 'react'

const Card = ({title, description, icon, className}) => {
    
  return (
    <div className={className}>
       <div className='p-4 md:p-6'>
            <div className='mb-5 text-xl'>
                {icon}
            </div>
            <h4 className='text-base text-zinc-900 font-medium mb-2 font-rubik'>{title}</h4>
            <p className='text-sm text-zinc-400 font-normal font-rubik'>{description}</p>
       </div>
    </div>
  )
}

export default Card
