import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src = {appleImg} width={18} height={18}/>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {['Iphones','Macbooks','Ipads'].map((item,index) => (
            <div key={index} className='cursor-pointer px-5 text-sm md:text-lg text-gray hover:text-white transition-all'>
              {item}
            </div>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
        <img src = {searchImg} width={18} height={18}/>
        <img src = {bagImg} width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar