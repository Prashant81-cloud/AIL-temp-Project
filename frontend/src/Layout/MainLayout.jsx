import React, { useEffect, useRef, useState } from "react";
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

  // Cursor follower
  useEffect(() => {
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
      {/* MAIN CONTENT ABOVE, with bottom padding so footer can be revealed */}
      <div className="relative z-10 bg-[#FAF4EC] rounded-b-[70px]">
        <NavbarWrapper />
        <main className="">{children}</main>
        <Random/>
      </div>

      {/* UNDERLAY FOOTER – fixed at bottom, behind content */}
      <footer
        className="
          absolute
          sticky bottom-0 
          z-0
          h-140
        "
      >
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
      </footer>

    

      {/* CUSTOM CURSOR */}
      <CursorPortal>
        <div ref={followerRef} style={followerStyle}>
          {cursorMode === "text" && "See Magic!"}
        </div>
      </CursorPortal>
    </div>
  );
}
