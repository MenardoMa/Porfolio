import React from 'react'
import { testimonialInfo } from '../constant/data'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section id='témoignages'>
        <div className='container'>
            <h2 className='text-zinc-700 font-medium font-Playfair text-2xl md:text-3xl'>Temoignages de clients</h2>
            <div className='w-full max-w-[750px] xl:max-w-[800px] my-2'>
                <p className='text-sm md:text-base text-zinc-500 font-normal font-rubik'>
                   Voici ce que les personnes avec lesquelles je me suis associé disent de notre collaboration.
                </p>
            </div>
            <div className="scrub-slide flex items-stretch gap-4 w-fit mt-6 md:mt-8">
                {
                    testimonialInfo.map(({ content, name, imgSrc, company, link }, key) => (
                        <TestimonialCard
                            key={key}
                            content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            link={link}
                            className='relative p-5 md:p-6 rounded-xl border border-zinc-300/50 bg-zinc-100/50 hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5 transition-colors up-reveal min-w-[320px] lg:min-w-[400px] flex flex-col'
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials
