import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import PauseOnHover from './VerticalScroll'
import gsap from 'gsap';
import { useState } from 'react';
import CalypsoButton from './CalypsoButton';
import tfb from '../assets/tfb.png'

function Navbar() {







    return (
    <div className='flex justify-between items-center'>
    <div className='logo  flex' >

<div className='flex font-bold text-4xl items-center justify-center' >
<div className=''>
    AIL-india
</div>



</div>

<div className='font-bold text-lg mt-[12.5px]'>
<PauseOnHover/>
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