import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "https://esm.sh/react-icons/fa";
import AILLOGO from "../assets/AIL BRONZE.png";

function Footer() {
  return (
    <div>
              <footer className="absolute bottom-0 left-0 w-full bg-black text-[#faf4ec] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
                <div className="max-w-7xl mx-auto">
                  <div
                    className="relative flex flex-col items-center justify-center w-full h-[60vh] bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${AILLOGO})` }}
                  >
                    <div className="relative z-1 text-center">
                      <h1 style={{ fontFamily: "Alata, sans-serif" }} className="text-[12vw] tracking-[0.2em] leading-none">
                        ADVAITA
                      </h1>
                      <h2 className="text-[3vw] tracking-[15px]">INNOVATION LABS.</h2>
                    </div>
                  </div>
        
                  <div className="w-full border-t border-gray-700 mb-8"></div>
        
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-4 mb-6 md:mb-0">
                      <a className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaLinkedinIn /></a>
                      <a className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaInstagram /></a>
                      <a className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaYoutube /></a>
                      <a className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaFacebookF /></a>
                    </div>
        
                    <nav className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
                      <a className="hover:text-gray-400">Solutions</a>
                      <a className="hover:text-gray-400">Upcoming Series</a>
                      <a className="hover:text-gray-400">About Us</a>
                      <a className="hover:text-gray-400">Projects</a>
                    </nav>
        
                    <div className="text-right text-gray-400">
                      <p className="mb-1">Proudly created in India.</p>
                      <p>All Right Reserved, All Wrong Reversed.</p>
                    </div>
                  </div>
                </div>
              </footer>
    </div>
  )
}

export default Footer