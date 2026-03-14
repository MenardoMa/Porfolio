import React from 'react';
import { heroInfo } from '../constant/data';
import Button from './Button';

const Hero = () => {
  return (
    <section>
      <div className='container'>
        {heroInfo.map((info, index) => (
          <div key={index}>
            <div className='mb-4 text-sm font-medium leading-relaxed  flex items-center gap-2'>
                <span className='w-2.5 h-2.5 block rounded-full bg-emerald-400'></span>
                <span className='uppercase text-sm text-zinc-500  font-sora'>{info.tag}</span>
            </div>
            <div className='grid gap-3 md:gap-6 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold leading-auto font-Playfair'>{info.role}</h1>
                <p className='text-base sm:text-lg sm:leading-normal font-rubik'>{info.bio}</p>
                <div className='grid gap-4 md:flex mt-5 md:mt-0'>
                    <Button label='Contactez-moi' path="#" className="border border-zinc-300 px-5 py-3 rounded-full cursor-pointer font-rubik text-base bg-black text-white" />
                    <Button label='Qui je suis' path="#" className="border border-zinc-300 px-5 py-3 rounded-full cursor-pointer font-rubik text-base" />
                </div>
                <div className='my-5 grid gap-4 md:flex md:items-center md:gap-6'>
                    {info.stats.map((stat, keys) => (
                        <div key={keys}>
                            <h3 className='text-zinc-700 text-lg font-Playfair font-bold'>{stat.title}</h3>
                            <p className='text-sm text-zinc-400 font-normal font-rubik'>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;