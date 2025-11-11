import React, { useState } from "react";
import CalypsoButton from "./CalypsoButton";
import tfb from "../assets/tfb.png";
import AILLOGO from "../assets/AIL BRONZE.png";
import PauseOnHover from './VerticalScroll'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-[#FAF4EC] px-6  flex flex-col relative z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
<div
  className="logo relative flex  h-[130px] items-center justify-center bg-center bg-no-repeat bg-contain"
  style={{
    backgroundImage: `url(${AILLOGO})`,
    backgroundSize: '100px', // adjust logo size
    backgroundPosition: '-2% 59%',
     // makes logo faint
  }}
>
  {/* Inner content (text + hover component) */}
  <div className="flex font-bold text-xl items-center justify-center flex-col text-[#c99a5b] z-10">
    <h1 style={{ fontFamily: 'Alata, sans-serif' }}>ADVAITA</h1>
    <h2 className="text-[8px]">INNOVATION LABS.</h2>
  </div>

  <div className="font-bold text-[12px]  mb-[3px] ml-0.5 text-[#c99a5b] z-10">
    <PauseOnHover />
  </div>
</div>

        {/* Hamburger Icon */}
        <button onClick={() => setOpen(!open)} className="p-2 text-[#c99a5b] bg-[#FCB8FA] p-3 rounded-lg">
          <div className="space-y-1 bg-">
            <span
              className={`block h-0.5 w-6 bg-black  transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="flex flex-col items-center mt-4 bg-white rounded-xl shadow-md p-4 animate-fadeIn">
          <CalypsoButton />
          <div className="mt-4 flex items-center justify-center bg-[#fcb8fa] rounded-lg p-2 shadow">
            <p className="font-semibold text-[14px]">Theory of Branding</p>
            <img src={tfb} alt="TFB" className="h-8 w-8 ml-2" />
          </div>
        </div>
      )}
    </nav>
  );
}
