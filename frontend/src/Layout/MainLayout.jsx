import React, { lazy, useEffect, useRef, useState } from "react";
import NavbarWrapper from "../Components/NavbarWrapper";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorPortal from "../Components/CursorPortal";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF
} from "https://esm.sh/react-icons/fa";
import AILLOGO from "../assets/AIL BRONZE.png";
import Random from "@/Pages/Random";
import { Link } from "react-router-dom";
import useIsMobile from "@/Pages/useIsMobile";
const Career = lazy(() => import("../Pages/Career"));


gsap.registerPlugin(ScrollTrigger);

export default function MainLayout({ children }) {
  const SMOOTHING = 0.15;
  const SIZE = 12;
  const OFFSET = { x: SIZE / -2, y: SIZE / -2 };
  const followerRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [cursorMode, setCursorMode] = useState("image");
  const isMobile = useIsMobile(768);
  const [cursorColor, setCursorColor] = useState("black");


          const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Cursor follower
  useEffect(() => {

    //disable cursor on mobile.
      if (isMobile) return;



  if (isSafari) {
    document.body.classList.add("use-default-cursor");
    return; // ❗ Stop running custom cursor logic
  }

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const tick = () => {
      const t = targetRef.current;
      const p = posRef.current;

      p.x += (t.x - p.x) * SMOOTHING;
      p.y += (t.y - p.y) * SMOOTHING;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${p.x + OFFSET.x}px, ${
          p.y + OFFSET.y
        }px, 0)`;
        followerRef.current.style.opacity = visible ? 1 : 0;
      }

      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  useEffect(() => {
  const showText = () => setCursorMode("text");
  const showImage = () => setCursorMode("image");

  window.addEventListener("cursor-text", showText);
  window.addEventListener("cursor-image", showImage);

  return () => {
    window.removeEventListener("cursor-text", showText);
    window.removeEventListener("cursor-image", showImage);
  };
}, []);

  const followerStyle = {
    position: "fixed",
    width: cursorMode === "image" ? `${SIZE}px` : "120px",
    height: cursorMode === "image" ? `${SIZE}px` : "40px",
    left: 0,
    top: 0,
    borderRadius: cursorMode === "image" ? "50%" : "9999px",
    backgroundColor: "black",
    color: cursorMode === "text" ? "white" : "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    zIndex: 9999,
    willChange: "transform, opacity",
    transition: "opacity 150ms ease",
  };

  return (
    <div className="relative  bg-[#FAF4EC] ">
      {/* MAIN CONTENT ABOVE, with bottom padding so footer can be revealed  */}
      <div className="relative z-10 bg-[#FAF4EC] rounded-b-[70px]">
        <NavbarWrapper />
        <main className="">{children}</main>
        <Random/>
      </div>

      {/* UNDERLAY FOOTER – fixed at bottom, behind content [clamp(450px,30vw,800px)] */}
      <footer
        className="
          absolute
          sticky bottom-0 
          z-0
          md:h-150
          sm:h-170
          h-[clamp(30rem,125vw,33rem)]
          w-screen
        "
      >
      <footer className="absolute bottom-0 left-0 w-full  bg-black text-[#faf4ec] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans w-full">
        <div className="w-full mx-auto">
          <div
            className="relative flex flex-col items-center justify-center w-full h-[60vw] sm:h-[60vh] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${AILLOGO})` }}
          >
            <div className="relative z-1 text-center">
              <h1 style={{ fontFamily: "Alata, sans-serif" }} className="text-[15vw] tracking-[0.1em] sm:text-[12vw]  sm:tracking-[0.2em] leading-none">
                ADVAITA
              </h1>
              <h2 className="text-[5vw] tracking-[4px] sm:text-[3vw]  sm:tracking-[15px]">INNOVATION LABS</h2>
            </div>
          </div>

          <div className="w-full border-t border-gray-700 mb-8"></div>

          <div className="flex md:flex-row md:gap-0 gap-5 flex-col  justify-between items-center w-full ">

<div className="text-sm nunito-sans flex items-center md:space-x-10  space-x-4 justify-center hidden md:flex"> 
<div className="flex md:flex-col lg:flex-row md:space-x-5 space-x-4 md:gap-3">
  <Link to="/privacy-policy" className=" ">Privacy </Link>
  <Link to="/terms-conditions" className=" ">Terms & Conditions</Link>
</div>
<div className="flex md:flex-col lg:flex-row md:space-x-5 space-x-4 md:gap-3">
    <a href="mailto:corporate@ail-india.com">  <button>Contact Us</button>   </a>
  <Link to="/about" className=" ">About Us</Link>
</div>
<div className="flex md:flex-col lg:flex-row md:space-x-5 space-x-4 md:gap-3">
    <Link to="/hiring" className=" ">We're Hiring!</Link>
    <Link to="/upcoming-series" className=" ">Upcoming Series</Link>
</div>
</div>

<div className="text-sm nunito-sans flex md:flex-row  gap-5  items-center  justify-center md:hidden"> 
<div className=" flex lg:flex-row md:flex-col md:gap-2 lg:gap-5  gap-3 flex-col ">
  <Link to="/privacy-policy" className=" ">Privacy </Link>

      <Link to="/hiring" className=" ">We're Hiring!</Link>

</div>
<div className=" flex lg:flex-row md:flex-col md:gap-2 lg:gap-5 gap-3  flex-col ">


    <a href="mailto:corporate@ail-india.com">  <button>Contact Us</button>   </a>
    <Link to="/upcoming-series" className=" ">Upcoming Series</Link>
</div>
<div className=" flex lg:flex-row md:flex-col md:gap-2 lg:gap-5 gap-3  flex-col ">
  <Link to="/terms-conditions" className=" ">Terms </Link>
  <Link to="/about" className=" ">About Us</Link>


</div>
</div>

            <div className="flex space-x-4 lg:text-2xl">
              <a href='https://www.linkedin.com/company/advaita-innovation-labs/?viewAsMember=true'  target="_blank"   rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaLinkedinIn /></a>
              <a href='https://www.instagram.com/advaitainnovationlabs.official/'  target="_blank"   rel="noopener noreferrer"  className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaInstagram /></a>
              <a href='https://www.youtube.com/@AIL-India'  target="_blank"   rel="noopener noreferrer"  className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaYoutube /></a>
              <a href='https://www.facebook.com/AdvaitaInnovationLabs'  target="_blank"   rel="noopener noreferrer"  className="p-2 border border-gray-700 rounded-full hover:bg-gray-800"><FaFacebookF /></a>
            </div>

<div className="text-sm nunito-sans flex flex-col items-start  justify-start ">
  <p>Made in India.</p>
  <p>Made for the World. </p>
  <p> All Rights Reserved. </p>
  <p>©️ AIL 2026</p>
</div>



          </div>



        </div>
      </footer>
      </footer>

    

      {/* CUSTOM CURSOR */}
{!isMobile && !isSafari && (
  <CursorPortal>
    <div ref={followerRef} style={followerStyle}>
      {cursorMode === "text" && "See Magic!!"}
    </div>
  </CursorPortal>
)}
    </div>
  );
}
