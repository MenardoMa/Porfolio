import React from 'react'

const PredictionCard = ({imgSrc, title, desc, tags, className}) => {
  return (
    <div className={className}>
        <div className='p-5 md:p-6'>
            <figure className="mb-2 md:mb-4 overflow-hidden border-zinc-100 bg-zinc-200/50 relative h-12 w-12 flex items-center justify-center text-center rounded-md">
                <img
                    src={imgSrc}
                    alt="Predirection"
                    width={38}
                    height={38}
                    loading="lazy"
                    className=""
                />
            </figure>
            <h3 className='text-sm font-rubik font-medium mb-2'>{title}</h3>
            <p className='text-zinc-500 leading-relaxed text-sm font-rubik mb-3 relative'>
                {desc}
            </p>
            {
                tags != "" ? (
                    <p className="bg-violet-200 inline-block text-sm font-rubik px-2 py-0.5 rounded-md">{tags}</p>
                ) : ( "" )
            }
        </div>
    </div>
  )
}

export default PredictionCard
