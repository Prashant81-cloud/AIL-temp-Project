import ButtonHover from '@/Components/ButtonHover'
import React from 'react'
import { SiMinutemailer } from "react-icons/si";

function Random() {
  return (
    <>
    <div className='h-[200px] w-full  flex items-center justify-between px-[80px]  rounded-b-[70px] border-black border-t-1'>
        <div><ButtonHover label="Contact Us" /></div>
        <div><ButtonHover label="Work with Us" /></div>
        <div><ButtonHover label="Privacy & Policy" /></div>
    </div>

    </>
  )
}

export default Random