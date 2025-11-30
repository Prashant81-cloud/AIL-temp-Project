import React, { useState } from "react";
import AILLOGO from "../assets/AIL BRONZE.png";
import PauseOnHover from "./VerticalScroll";
import tfb from '../assets/Screenshot_2025-11-19_at_9.44.00_PM-removebg-preview.png';
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 flex flex-col relative z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        {/* Company Logo */}
        <Link
        to='/'
          className="logo relative flex h-[130px] items-center justify-center bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${AILLOGO})`,
            backgroundSize: "100px",
            backgroundPosition: "-2% 59%",
          }}
        >
          <div className="flex font-bold text-xl items-center justify-center flex-col text-[#c99a5b] z-10">
            <h1 style={{ fontFamily: "Alata, sans-serif" }}>ADVAITA</h1>
            <h2 className="text-[8px]">INNOVATION LABS.</h2>
          </div>

          <div className="font-bold text-[12px] mb-[3px] ml-0.5 text-[#c99a5b] z-10">
            <PauseOnHover />
          </div>
        </Link>

        {/* Hamburger / Close Icon */}
<button
  onClick={() => setOpen(!open)}
  className={`
    p-3 rounded-lg fixed top-6 right-6 z-[100] transition-all duration-300
    ${open ? "bg-white" : "bg-[#FCB8FA]"} 
  `}
>
  <div className="space-y-1">
    <span
      className={`block h-0.5 w-6 transition-all duration-300 ${
        open ? "bg-black rotate-45 translate-y-2" : "bg-black"
      }`}
    ></span>

    <span
      className={`block h-0.5 w-6 transition-all duration-300 ${
        open ? "opacity-0" : "bg-black"
      }`}
    ></span>

    <span
      className={`block h-0.5 w-6 transition-all duration-300 ${
        open ? "bg-black -rotate-45 -translate-y-2" : "bg-black"
      }`}
    ></span>
  </div>
</button>

      </div>



      {/* FULL SCREEN MENU */}
      {open && (
        <div
          className="
            fixed inset-0 
            bg-[#fcb8fa] 
            flex flex-col items-center justify-center 
            gap-3 text-2xl font-semibold 
            border-[#FAF4EC] border-[1rem]
            rounded-lg 
            z-[90]
            p-10
            overflow-hidden
          "
        >


<Link
  to="/content-intellegence"
  onClick={() => setOpen(false)}
  className="text-black bg-white p-3 rounded-lg"
>
  Content Intelligence
</Link>

<Link
  to="/#solutions"
  onClick={() => setOpen(false)}
  className="text-black bg-white p-3 rounded-lg"
>
  Solutions
</Link>

<Link
  to="/about-us"
  onClick={() => setOpen(false)}
  className="text-black bg-white p-3 rounded-lg"
>
  About Us
</Link>

<Link
  to="/faqs"
  onClick={() => setOpen(false)}
  className="text-black bg-white p-3 rounded-lg"
>
  FAQs
</Link>


<a
href='https://www.youtube.com/@AIL-India'
          target="_blank" 
          rel="noopener noreferrer"
  onClick={() => setOpen(false)}
>

      <div className="bg-black  p-[10px] rounded-lg mt-30">
        <div
        className="block font-bold h-full w-full text-[15px] rounded-lg flex items-center justify-center gap-2">
          <p className='text-white'>Watch AIL</p>
<div className='h-8 w-8 '><img className='object-contain rounded-lg bg-white ' src={tfb} alt="" /></div>
        </div>
      </div>

</a>

        </div>
      )}

    </nav>
  );
}
