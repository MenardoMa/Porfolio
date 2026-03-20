import React from 'react'
import { workInfo } from '../constant/data'
import Button from './Button'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <section id='projets'>
        <div className='container'>
            <div className='mb-4'>
                <span className='uppercase text-sm text-zinc-500 font-normal font-rubik'>Travail codé à la main</span>
            </div>
            <h2 className='text-zinc-700 font-medium font-Playfair text-2xl md:text-3xl'>Projets</h2>
            <div className='w-full max-w-[750px] xl:max-w-[800px] my-2'>
                <p className='text-sm md:text-base text-zinc-500 font-normal font-rubik'>
                    Des projets réels que j’ai conçus et développés entièrement à partir de zéro, ligne par ligne.
                    Chaque application est construite avec des technologies web modernes, en mettant l’accent sur
                    la qualité du code, la performance et l’expérience utilisateur.
                </p>
            </div>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-2 mt-10'>
                {
                    workInfo.map((work, key) => (
                        <WorkCard
                            key={key}
                            image={work.image}
                            title={work.title}
                            tags={work.tags}
                            link={work.link}
                            className='relative p-4 rounded-xl border border-zinc-300/50 bg-zinc-100/50 hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5 transition-all duration-300 up-reveal'
                        />
                    ))
                }
            </div>
            <Button
                label='Voir la liste complète'
                path="http://localhost:5173/"
                className='bg-[#f5f4f2] cursor-pointer mx-auto mt-8 md:mt-10 text-black text-sm font-rubik border border-zinc-200 px-4 py-3 font-normal rounded-full flex items-center justify-center hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5'
            />
        </div>
    </section>
  )
}

export default Work
