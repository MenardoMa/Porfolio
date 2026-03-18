import React from 'react'
import Button from './Button'
import { footerInfo } from '../constant/data'

const Footer = () => {
  return (
    <section>
        <div className='container mt-10'>
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold leading-tight lg:text-[50px] lg:leading-[1.15] mb-8 lg:max-w-[13ch] up-reveal font-Playfair">Démarrons votre projet ensemble</h2>
                    <Button
                        label="Démarrer un project"
                        className="font-rubik bg-[#f5f4f2] cursor-pointer text-black text-sm border border-zinc-200 px-4 py-3 font-normal rounded-full flex items-center justify-center hover:bg-zinc-200/50 active:bg-zinc-200/50 ring-1 ring-inset ring-zinc-50/5 up-reveal"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div className='relative'>
                        <p className="mb-2 up-reveal font-rubik text-zinc-800">Liens</p>
                        <ul>
                            {
                                footerInfo.siteLinks.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href}
                                            className='font-rubik block text-sm text-zinc-500 py-1 transition-colors hover:text-zinc-400 up-reveal up-reveal'
                                        >{label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='relative'>
                        <p className="mb-2 up-reveal font-rubik text-zinc-800">Social</p>
                        <ul>
                            {
                                footerInfo.socials.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href}
                                            className='font-rubik block text-sm text-zinc-500 py-1 transition-colors hover:text-zinc-400 up-reveal up-reveal'
                                        >{label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pt-10">
                <p className="text-zinc-400 text-sm font-rubik up-reveal">
                    &copy; 2026{" "}
                    <span className="up-reveal">Menardo Madiumba</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer
