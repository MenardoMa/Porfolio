import React from 'react'
import PredictionCard from './PredictionCard'
import { predirectionInfo } from '../constant/data'

const Predirection = () => {
  return (
    <section>
        <div className='container'>
            <div className='w-full max-w-3xl mx-auto'>
                <h2 className='text-zinc-700 font-medium font-Playfair text-2xl md:text-3xl'>Comment puis-je t'aider ?</h2>
                <div className='w-full max-w-[750px] xl:max-w-[800px] my-2'>
                    <p className='text-sm md:text-base text-zinc-500 font-normal font-rubik'>
                        Je suis embauché pour concevoir, réparer ou faire évoluer des produits, applications web.
                    </p>
                </div>
                <div className='mt-5 md:mt-7 grid gap-4'>
                    {
                        predirectionInfo.map(({imgSrc, title, desc, tags}, key) => (
                            <PredictionCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                desc={desc}
                                tags={tags}
                                className='w-full relative rounded-xl border border-zinc-300/50 bg-zinc-100/50 hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5 transition-colors up-reveal flex flex-col'
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Predirection
