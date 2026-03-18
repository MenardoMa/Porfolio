import React, { useRef } from 'react'
import { footerInfo } from '../constant/data'

const Navbar = () => {

  const navRef = useRef(null)

  return (
    <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 m:w-1/2 md:left-1/2'>
      <div className='flex flex-col text-3xl md:text-4xl lg:text-5xl lg:gap-y-6 gap-y-4 font-rubik'>
            {
                footerInfo.siteLinks.map(({label, href}, key) => (
                    <div key={key}>
                        <a href={href}>{label}</a>
                    </div>
                ))
            }
      </div>
    </nav>
  )
}

export default Navbar
