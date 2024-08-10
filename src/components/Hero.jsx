import React, { useEffect } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'
import { heroVideo,smallHeroVideo } from '../utils'
const Hero = () => {
  const [videoSrc,setVideoSrc] = useState(window.innerWidth < 700 ? smallHeroVideo : heroVideo)
  const selectVideoSrc = () => {
    if(window.innerWidth < 700)setVideoSrc(smallHeroVideo)
    else setVideoSrc(heroVideo)
  }
  useEffect(() => {
    window.addEventListener('resize',selectVideoSrc)
    return () => {
      window.removeEventListener('resize',selectVideoSrc)
    }
  },[])
  useGSAP(() => {
    gsap.to('#hero',{
      opacity:1,
      delay:2
    })
    gsap.to('#cta',{
      opacity:1,
      delay:2,
      y:-5
    })
  })
  return (
    <section className='w-full nav-height relative'>
      <div className='h-5/6 flex-center flex-col'>
      <p id='hero' className='hero-title'>iPhone 15 Pro</p>
      <div className='w-9/12 md:w-10/12'> 
        <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0'>
      <a className='bg-titanium text-gray-900 font-bold rounded-full px-5 py-1 my-1 cursor-pointer hover:text-white transition-all'>Buy</a>
      <p className='font-normal text-xl text-gray-100'>Starting from $49/month or $700</p>
      </div>
    </section>
  )
}

export default Hero