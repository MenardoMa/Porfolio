import React from 'react'
import { aboutInfo } from '../constant/data'
import Button from './Button'
import Card from './Card'

const About = () => {
  return (
    <section id='apropos'>
        <div className='container'>
            <div className='mb-4'>
                <span className='uppercase text-sm text-zinc-500 font-normal font-rubik reveal-up'>Qui je suis</span>
            </div>
            <div>
                {
                    aboutInfo.map((info, keys) => (
                        <div key={keys}>
                            <div className='relative reveal-up'>
                                <div className='mt-4 sm:mt-6 md:mt-8'>
                                    <p className='text-sm leading-normal md:text-base xl:text-lg xl:leading-relaxed text-zinc-600 font-normal font-rubik'>{info.aboutMe.bio}</p>
                                </div>
                                <div className='my-4 md:my-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3'>
                                    {
                                        info.aboutMe.technologies.map((tech, keys) => (
                                            <Button label={tech} key={keys} className="text-sm px-2 py-2 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 font-normal font-rubik cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:shadow-md" />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='grid gap-6 my-10 md:grid-cols-2'>
                                {
                                    info.highlights.map((highlight, highlightKeys) => (
                                        <Card 
                                            key={highlightKeys}
                                            icon={highlight.icon} 
                                            title={highlight.title} 
                                            description={highlight.description}
                                            className='border border-zinc-300 bg-white rounded-xl hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5 transition-colors duration-300 reveal-up'
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </section>
  )
}

export default About
