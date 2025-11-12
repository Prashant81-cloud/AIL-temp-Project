import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/DesktopNavbar";
// import AILIMG from "./assets/AIL BRONZE.png"; // No longer needed
import SplitText from "./Pages/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Video from "./Pages/Video";
import InfiniteHorizontalAnimation from "./Pages/InfiniteHorizontalAnimation";
import FlipPages from "./Pages/FlipPages";
import SchbangFooter from "./Pages/DefineUs";
import PageTransitionFooter from "./Pages/PageTransitionFooter";
import Solutions from "./Pages/Solutions";
import NavbarWrapper from "./Components/NavbarWrapper";
import Random from "./Pages/Random";
import Marquee from "./Pages/Marquee";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Cursor follower config
  // const IMAGE_URL = AILIMG; // No longer needed
  const SMOOTHING = 0.15;
  const SIZE = 12; // <-- CHANGED: Dot size (was 150)
  const OFFSET = { x: SIZE / -2, y: SIZE / -2 };

  const followerRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const posRef = useRef({ x: targetRef.current.x, y: targetRef.current.y });
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const [cursorMode, setCursorMode] = useState("image");
  // "image" = AIL image cursor
  // "text"  = "See Magic!" cursor

  // 💫 Smooth Scroll Setup (Lenis + GSAP)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 💡 Cursor Follower Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const tick = () => {
      const t = targetRef.current;
      const p = posRef.current;

      // Smooth follow logic
      p.x += (t.x - p.x) * SMOOTHING;
      p.y += (t.y - p.y) * SMOOTHING;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${p.x + OFFSET.x}px, ${
          p.y + OFFSET.y
        }px, 0)`;
        followerRef.current.style.opacity = visible ? 1 : 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const followerStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: cursorMode === "image" ? `${SIZE}px` : "120px",
    height: cursorMode === "image" ? `${SIZE}px` : "40px",
    pointerEvents: "none",
    willChange: "transform, opacity",
    transition: "opacity 150ms ease",
    opacity: visible ? 1 : 0,
    zIndex: 9999,
    borderRadius: cursorMode === "image" ? "50%" : "9999px", // <-- CHANGED: Made it circular
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cursorMode === "text" ? "black" : "black", // <-- CHANGED: Made dot black
    color: cursorMode === "text" ? "white" : "transparent",
    fontSize: cursorMode === "text" ? "14px" : "0px",
    fontFamily: "sans-serif",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full  bg-[#FAF4EC] ">
      {/* Navbar — disable cursor completely here */}
      <div className="navbar  ">
<NavbarWrapper />
      </div>

      {/* Split text */}
      <div  className="sm:mt-5">
        <SplitText />
      </div>
<div>
  <Marquee/>
</div>
      {/* Video Section — show “See Magic!” cursor here */}
      <div
        className=" video  w-full "
        onMouseEnter={() => setCursorMode("text")}
        onMouseLeave={() => setCursorMode("image")}
      >
        <Video />
      </div>

      <div>
        <FlipPages />
      </div>
<div>

</div>
      <div>
        <InfiniteHorizontalAnimation />
      </div>

      <div>
        <SchbangFooter />
      </div>

      <div>
        <Solutions/>
      </div>

      <div>
        <PageTransitionFooter />
      </div>

      {/* Cursor follower */}
      <div ref={followerRef} style={followerStyle} aria-hidden>
        {/* <-- REMOVED: The <img> tag was here --> */}
        {cursorMode === "text" && <p>See Magic!</p>}
      </div>
    </div>
  );
}