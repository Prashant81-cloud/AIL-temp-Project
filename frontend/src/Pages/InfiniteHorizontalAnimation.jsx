import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InfiniteMarquee({
  words = ["WE", "CREATE", "WHAT", "YOU", "LOVE", "THE", "MOST"],
  direction = "left",
  speed = 50,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const totalWidth = track.offsetWidth;

    gsap.set(track, {
      x: direction === "left" ? 0 : -totalWidth,
    });

    gsap.to(track, {
      x: direction === "left" ? -totalWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full py-4 bg-transparent"
    >
      <div
        ref={trackRef}
        className="inline-flex gap-8 font-bold text-3xl tracking-wide"
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="uppercase">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
