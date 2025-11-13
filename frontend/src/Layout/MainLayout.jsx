// src/layout/MainLayout.jsx
import React, { useEffect, useRef, useState } from "react";
import NavbarWrapper from "../Components/NavbarWrapper";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorPortal from "../Components/CursorPortal";

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

  // Smooth Scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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

  // Cursor Follower
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
    <div className="relative bg-[#FAF4EC] w-full">
      <NavbarWrapper />
      {children}

<CursorPortal>
  <div ref={followerRef} style={followerStyle}>
    {cursorMode === "text" && "See Magic!"}
  </div>
</CursorPortal>

    </div>
  );
}
