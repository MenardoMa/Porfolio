import React, { useRef } from 'react'
import { footerInfo } from '../constant/data'

const Navbar = () => {

  const navRef = useRef(null)
  const linksRef = useRef([])
  const contactRef = useRef(null)

  return (
    <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 m:w-1/2 md:left-1/2'>
      <div className='flex flex-col text-3xl md:text-4xl lg:gap-y-4 gap-y-3 font-rubik'>
            {
                footerInfo.siteLinks.map(({label, href, index}, key) => (
                    <div key={key}>
                        <a 
                          ref={(el) => (linksRef.current[index] = el)}
                          href={href}
                          className='transition-all duration-300 cursor-pointer hover:text-white'
                        >{label}</a>
                    </div>
                ))
            }
      </div> 
      <div className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
        <div className='font-light'>
            <p className='font-rubik text-white/50 tracking-wide'>E-mail</p>
            <p className='font-rubik lowercase'>Menardomadiumba@gmail.com</p>
        </div>
         <div className='font-light'>
            <p className='font-rubik text-white/50 tracking-wide'>RESEAU SOCIAUX</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
                {
                    footerInfo.socials.map((social, index) => (
                       <a
                        key={index}
                        href={social.href}
                        className='font-rubik text-sm leading-loose tracking-widest uppercase font-normal hover:text-white/50 transition-all duration-300'
                       >
                          {'{ '}
                          {social.label}
                          {' }'}
                       </a>
                    ))
                }
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
