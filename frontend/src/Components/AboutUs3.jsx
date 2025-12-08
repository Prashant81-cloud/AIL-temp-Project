import React from 'react'
import VisionVid from '@/assets/AboutUs/our promise.mp4'
import MissionVid from '@/assets/AboutUs/our mission.mp4'
import { useInView } from "react-intersection-observer";

function AboutUs3() {

  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: promiseRef, inView: promiseInView } = useInView({ triggerOnce: true });

  return (
    <>
    {/* For screens greater then "sm" */}
    <div className='h-auto w-screen sm:flex sm:flex-col hidden'>
      <div className='flex justify-between items-center px-15 border-t-1 border-black py-5 gap-15'>
        <h1 className='xl:text-4xl lg:text-3xl font-semibold md:text-2xl sm:text-xl'>OUR MISSION</h1>
        <p className='w-160 xl:text-xl lg:text-lg'>
          To take Indian creativity, branded content, and storytelling innovation to the world — powered by Gen AI, premium media networks, and storytelling that feels real.
        </p>
        <video 
        preload="none"
        ref={missionRef}
        autoPlay 
        loop 
        muted 
        playsInline
        src={missionInView ? MissionVid : undefined}
        className='xl:h-45 xl:w-50 lg:h-35 lg:w-40 md:h-35  md:w-40 sm:h-30 sm:w-50 h-30 w-50 ' 
        />
      </div>

      <div className='flex justify-between items-center px-15  py-5 mt-5 border-t-1 border-black gap-15'>
        <h1 className='xl:text-4xl lg:text-3xl font-semibold md:text-2xl sm:text-xl'>OUR PROMISE</h1>
        <p className='w-160 xl:text-xl lg:text-lg'>
          We help brands do more than advertise. We help them be believed — everywhere their audience is.
        </p>
        <video 
        preload="none"
        ref={promiseRef}
        autoPlay 
        loop 
        muted 
        playsInline
        src={promiseInView ? VisionVid : undefined}
        className='xl:h-45 xl:w-50 lg:h-35 lg:w-40 md:h-35  md:w-40 sm:h-30 sm:w-50 h-30 w-50 ' 
        />
      </div>
    </div>


    {/* For screens smaller then "sm" */}
    <div className='h-auto w-screen flex flex-col sm:hidden'>
      <div className='flex flex-col justify-center items-center px-15 border-t-1 border-black py-5 '>
        <div className='flex items-center justify-between w-full'>
        <h1 className='xl:text-4xl lg:text-3xl font-semibold md:text-2xl sm:text-xl'>OUR MISSION</h1>
                <video 
          autoPlay 
          loop 
          muted 
          playsInline
          src={MissionVid}
          className='xl:h-45 xl:w-50 lg:h-35 lg:w-40 md:h-35  md:w-40 sm:h-30 sm:w-50 h-20 w-30  ' 
        />
        </div>
        <p className=' xl:text-xl lg:text-lg text-sm mt-7'>
          To take Indian creativity, branded content, and storytelling innovation to the world — powered by Gen AI, premium media networks, and storytelling that feels real.
        </p>

      </div>

      <div className='flex flex-col justify-center items-center px-15  py-5 mt-5 border-t-1 border-black '>
        <div className='flex items-center justify-between w-full'>
        <h1 className='xl:text-4xl lg:text-3xl font-semibold md:text-2xl sm:text-xl'>OUR PROMISE</h1>
        <video 
        autoPlay 
        loop 
        muted 
        playsInline
        src={VisionVid}
        className='xl:h-45 xl:w-50 lg:h-35 lg:w-40 md:h-35  md:w-40 sm:h-30 sm:w-50 h-20 w-30 '  
        />
        </div>

        <p className=' xl:text-xl lg:text-lg text-sm mt-7'>
          We help brands do more than advertise. We help them be believed — everywhere their audience is.
        </p>

      </div>
    </div>

    </>
  )
}

export default AboutUs3
