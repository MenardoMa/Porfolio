import React from 'react'
import Button from './Button'

const WorkCard = ({image, title, category, tags, link, className}) => {
  return (
    <div className={className}>
        <figure className="img_box overflow-hidden aspect-square rounded-xs mb-4">
            <img alt="My work Perso" src={image} loading="lazy" />
        </figure>
        <h3 className='font-medium font-rubik'>{title} 
            <span className='font-rubik text-sm text-zinc-400 font-normal ml-3'>{category}</span>
        </h3>
        
        <div className='flex flex-wrap mt-3 gap-2'>
            {
                tags.map((tag, key) => (
                    <Button 
                        key={key}
                        label={tag}
                        className='bg-[#f5f4f2] text-black text-xs font-rubik border border-zinc-200 px-3 py-1 font-normal rounded-full flex items-center justify-center'
                    />
                ))
            }
        </div>
        <a href={link} target="_blank" className="absolute inset-0"></a>
    </div>
  )
}

export default WorkCard
