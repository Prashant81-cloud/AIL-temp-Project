import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import PauseOnHover from './VerticalScroll'
import gsap from 'gsap';
import { useState } from 'react';
import CalypsoButton from './CalypsoButton';
import tfb from '../assets/tfb.png'
import AILLOGO from '../assets/AIL BRONZE.png';

function Navbar() {







    return (
    <div className='flex justify-between items-center mx-15 my-5'>
<div
  className="logo relative flex w-[] h-[130px] items-center justify-center bg-center bg-no-repeat bg-contain"
  style={{
    backgroundImage: `url(${AILLOGO})`,
    backgroundSize: '170px', // adjust logo size
    backgroundPosition: 'left 40%',
     // makes logo faint
  }}
>
  {/* Inner content (text + hover component) */}
  <div className="flex font-bold text-4xl items-center justify-center flex-col text-[#c99a5b] z-10">
    <h1 style={{ fontFamily: 'Alata, sans-serif' }}>ADVAITA</h1>
    <h2 className="text-[15px]">INNOVATION LABS.</h2>
  </div>

  <div className="font-bold text-xl mt-[px] ml-0.5 text-[#c99a5b] z-10">
    <PauseOnHover />
  </div>
</div>
<div className='navMenu flex gap-1 font-semibold text-[15px] bg-white py-2 px-4 rounded-xl '>
<CalypsoButton/>
</div>
<div>
    <div className="group relative transition-all duration-500 ease-in-out [transform-style:preserve-3d] bg-[length:60px_60px] shadow-[0_30px_30px_-10px_rgba(142,142,142,0.3)] hover:[transform:rotate3d(0.5,1,0,30deg)] rounded-lg cursor-pointer">
      <div className="bg-[#fcb8fa] transition-all duration-500 ease-in-out p-[15px] [transform-style:preserve-3d] rounded-lg ">
        <span className="block font-bold text-[15px] transition-all duration-500 ease-in-out [transform:translate3d(0px,0px,50px)] group-hover:[transform:translate3d(0px,0px,60px)] rounded-lg flex items-center justify-center gap-2">
          <p className=''>Theory of Branding</p>
<div className='h-10 w-10 '><img className='object-contain rounded-lg ' src={tfb} alt="" /></div>
        </span>
      </div>
    </div>
</div>
    </div>
  )
}

export default Navbar