import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('.section-heading',{
    opacity:1,
    y:0
    })
    gsap.to('.link', {
      opacity:1,
      y:0,
      duration:1,
      stagger:0.1,
      ease:"power1.inOut"
    })
  },[])
  return (
    <section id='highlights' className='w-screen h-full common-padding overflow-hidden bg-zinc'>
    <div className='screen-max-width'>
      <div className='w-full mb-12 md:flex justify-between items-end'>
        <h1 id='title' className='section-heading'>Get the highlights.</h1>
        <div className='flex flex-wrap gap-5 items-end'>
          <p className='link'>Watch the film
          <img src={watchImg} alt='watch' className='ml-2' />
          </p>
          <p className='link'>Watch the event
          <img src={rightImg} alt='watch' className='ml-2' />
          </p>
        </div>
      </div>
      <VideoCarousel />
    </div>
    </section>
  )
}

export default Highlights