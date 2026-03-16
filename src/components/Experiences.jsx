import React from 'react'
import CardExperience from './CardExperience'
import { experienceInfo } from '../constant/data'

const Experiences = () => {
  return (
    <section>
        <div className='container'>
            <div className='mb-4'>
                <span className='uppercase text-sm text-zinc-500 font-normal font-rubik'>Où j’ai travaillé</span>
            </div>
            <h2 className='text-zinc-700 font-medium font-Playfair text-2xl md:text-3xl'>Expérience Professionnelle</h2>
            <div className='w-full max-w-[750px] xl:max-w-[800px] my-2'>
                <p className='text-sm md:text-base text-zinc-500 font-normal font-rubik'>
                    Au cours de mon parcours, j’ai travaillé avec plusieurs entreprises et équipes technologiques pour
                    concevoir des solutions innovantes, développer des produits performants et accompagner leur adoption
                    par les utilisateurs et les développeurs.
                </p>
            </div>
            <div className='grid gap-4 md:gap-6 mt-10 md:mt-14'>
                {
                    experienceInfo.map((experience, key) => (
                        <CardExperience 
                            key={key}
                            role={experience.role}
                            company={experience.company}
                            period={experience.period}
                            description={experience.description}
                            technologies={experience.technologies}
                            link={experience.link}
                            location={experience.location}
                            className='bg-white border border-zinc-300 bg-white rounded-xl hover:shadow-sm transition-all duration-300' 
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Experiences
