import React from 'react'
import { aboutInfo } from '../constant/data'
import Button from './Button'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='mb-4'>
                <span className='uppercase text-sm text-zinc-500 font-normal font-rubik'>Qui je suis</span>
            </div>
            <div>
                {
                    aboutInfo.map((info, keys) => (
                        <div key={keys}>
                            <div className='mt-4 sm:mt-6 md:mt-8'>
                                <p className='text-sm leading-normal md:text-base xl:text-lg xl:leading-relaxed text-zinc-600 font-normal font-rubik'>{info.aboutMe.bio}</p>
                            </div>
                            <div className='my-4 md:my-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3'>
                                {
                                    info.aboutMe.technologies.map((tech, keys) => (
                                        <Button label={tech} key={keys} className="text-sm px-2 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 font-normal font-rubik cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:shadow-md" />
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
