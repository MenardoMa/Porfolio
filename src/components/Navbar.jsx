import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { footerInfo } from './../constant/data';
import { Link } from 'react-scroll';

const Navbar = () => {

  const navRef = useRef(null)
  const linksRef = useRef([])

  const contactRef = useRef(null)

  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)

  const tl = useRef(null)
  const iconTl = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [showBurger, setShowBurger] = useState(true)

  useGSAP(() => {

  gsap.set(navRef.current, { xPercent: 100 })

  gsap.set([linksRef.current, contactRef.current], {
    autoAlpha: 0,
    x: -20,
  })

  tl.current = gsap.timeline({ paused: true })
    .to(navRef.current, {
      xPercent: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to([linksRef.current], {
      autoAlpha: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out"
    }, "<")
    .to(contactRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    }, "<+0.2")

    iconTl.current = gsap
      .timeline({paused: true})
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power1.inOut"
    }).to(bottomLineRef.current, {
        rotate: -45,
        y: -3.3,
        duration: 0.3,
        ease: "power1.inOut"
    }, "<")

}, [])

  useEffect(() => {

    let lastScrollY = window.scrollY

    const handleScroll = () => {
      
      const currentScrollY = window.scrollY
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10)
      lastScrollY = currentScrollY

    }

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    if(isOpen){
      tl.current.reverse()
      iconTl.current.reverse();
    }else{
      tl.current.play()
      iconTl.current.play()
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav ref={navRef} className='fixed z-50 flex flex-col justify-start xl:justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-10 lg:py-12 gap-y-5 m:w-1/2 md:left-1/2'>
        <div className='flex flex-col text-3xl md:text-4xl font-normal lg:gap-y-4 2xl:gap-y-6 gap-y-3 xl:text-5xl font-rubik'>
              {
                  [
                    "accueil",
                    "apropos",
                    "expérience",
                    "projets",
                    "témoignages",
                    "aide",
                    "contact"
                  ].map(
                    (section, index) => (
                      <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                          <Link 
                            to={`${section}`}
                            // smooth
                            offset={0}
                            // duration={900}
                            className='transition-all duration-300 cursor-pointer hover:text-white uppercase'
                            onClick={() => toggleMenu()}
                        >
                          {section}
                        </Link>
                      </div>
                    )
                  )
              }
        </div> 
        <div className='grid gap-2'>
          <div className='font-light'>
              <p className='font-rubik text-sm text-white/50 tracking-wide'>E-mail</p>
              <a href='' className='font-rubik text-xs uppercase hover:text-white/50'>Menardomadiumba@gmail.com</a>
          </div>
          <div className='font-light'>
              <p className='font-rubik text-sm text-white/50 tracking-wide'>RESEAU SOCIAUX</p>
              <div className='flex flex-col gap-x-2'>
                  {
                      footerInfo.socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className='font-rubik text-xs leading-loose tracking-widest uppercase font-normal hover:text-white/50 transition-all duration-300'
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
      <div 
          onClick={toggleMenu}
          style={showBurger ? {clipPath: "circle(50% at 50% 50%)"} : {clipPath: "circle(0% at 50% 50%)"}}
          className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-12 h-12 md:w-20 md:h-20 top-4 md:top-5 right-5 md:right-10'>
          <span ref={topLineRef} className='block bg-white rounded-full w-7 md:w-8 h-0.5 origin-center'></span>
          <span ref={bottomLineRef} className='block bg-white rounded-full w-7 md:w-8 h-0.5 origin-center'></span>
      </div>
    </>
  )
}

export default Navbar
