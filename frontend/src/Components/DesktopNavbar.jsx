import React, { useRef } from 'react'
import PauseOnHover from './VerticalScroll'
import CalypsoButton from './CalypsoButton';
import tfb from '../assets/Screenshot_2025-11-19_at_9.44.00_PM-removebg-preview.png'
import AILLOGO from '../assets/AIL BRONZE.png';
import { Link } from 'react-router-dom';

function Navbar() {







    return (
    <div className='flex justify-between items-center mx-15 my-5 '>
<Link to='/'
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
</Link>
<div className='navMenu flex gap-1 font-semibold text-[15px] bg-white py-2 px-4 rounded-xl '>
<CalypsoButton/>
</div>
<a
href='https://www.youtube.com/@AIL-India'
          target="_blank" 
          rel="noopener noreferrer"
>
    <div className="group relative transition-all duration-500 ease-in-out [transform-style:preserve-3d] bg-[length:60px_60px] shadow-[0_30px_30px_-10px_rgba(142,142,142,0.3)] hover:[transform:rotate3d(0.5,1,0,18deg)] rounded-lg cursor-pointer">
      <div className="bg-[#FCB8FA] transition-all duration-500 ease-in-out p-[10px] [transform-style:preserve-3d] rounded-lg ">
        <div
        className="block font-bold h-full w-full text-[15px] transition-all duration-500 ease-in-out [transform:translate3d(0px,0px,50px)] group-hover:[transform:translate3d(0px,0px,60px)] rounded-lg flex items-center justify-center gap-2">
          <p className=''>Watch Videos</p>
<div className='h-8 w-8 '><img className='object-contain rounded-lg bg-white ' src={tfb} alt="" /></div>
        </div>
      </div>
    </div>
</a>
    </div>
  )
}

export default Navbar