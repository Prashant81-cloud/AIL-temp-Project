import React from 'react'

function AboutUs3() {
  return (
    <div className='h-[40vw] w-screen flex flex-col'>
      
      <div className='flex justify-between items-center px-15 border border-black py-5'>
        <h1 className='text-4xl font-semibold'>OUR MISSION</h1>
        <p className='w-160 text-xl'>
          To take Indian creativity, branded content, and storytelling innovation to the world — powered by Gen AI, premium media networks, and storytelling that feels real.
        </p>
        <img className='h-45 w-50' 
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtYnVzLTAwMS5qcGc.jpg" 
          alt="" 
        />
      </div>

      <div className='flex justify-between items-center px-15 border-b border-black py-5 mt-5'>
        <h1 className='text-4xl font-semibold'>OUR PROMISE</h1>
        <p className='w-160 text-xl'>
          We help brands do more than advertise. We help them be believed — everywhere their audience is.
        </p>
        <img className='h-45 w-50'  
          src="https://images-cdn.ubuy.co.in/648da17529b1e553c0001483-pastel-sunset-poster-beach-aesthetic.jpg" 
          alt="" 
        />
      </div>

    </div>
  )
}

export default AboutUs3
