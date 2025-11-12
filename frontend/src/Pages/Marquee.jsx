// src/Pages/MarqueeAnimation.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MarqueeAnimation() {
  const pinkTrack = useRef(null);
  const greenTrack = useRef(null);

  useEffect(() => {
    // --- PINK: right direction ---
    gsap.set(pinkTrack.current, { xPercent: -50 });
    gsap.to(pinkTrack.current, {
      xPercent: 0,
      duration: 10,
      ease: "none",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-50, 0),
      },
    });

    // --- GREEN: left direction (flawless loop) ---
    gsap.set(greenTrack.current, { xPercent: 0 });
    gsap.to(greenTrack.current, {
      xPercent: -45,
      duration: 10,
      ease: "none",
      repeat: -1,
      force3D: true, // 🧠 GPU acceleration
      modifiers: {
        xPercent: gsap.utils.wrap(-50, 0),
      },
    });
  }, []);

  return (
    <div
      style={{
        position:"relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        height:"50vh",
        marginTop:"-30px"
      }}
    >
      {/* -------- Pink Tape -------- */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          transform: "rotate(-4deg)",
          backgroundColor: "#C99A5B",
          whiteSpace: "nowrap",
          width: "110vw",
          justifyContent: "center",
          marginLeft: "-10px",
        }}
      >
        <div
          ref={pinkTrack}
          style={{
            display: "inline-flex",
            willChange: "transform", // GPU acceleration hint
          }}
        >
          {/* Two copies for infinite scroll */}
          <span
            style={{
              fontSize: "6vw",
              fontWeight: "800",
              color: "#fff",
              padding: "1rem 2vw",
            }}
          >
            ADVAITA INNOVATION LABS &nbsp; ADVAITA INNOVATION LABS &nbsp; ADVAITA
            INNOVATION LABS
          </span>
          <span
            style={{
              fontSize: "6vw",
              fontWeight: "800",
              color: "#fff",
              padding: "1rem 2vw",
            }}
          >
            ADVAITA INNOVATION LABS &nbsp; ADVAITA INNOVATION LABS &nbsp; ADVAITA
            INNOVATION LABS
          </span>
        </div>
      </div>

      {/* -------- Green Tape -------- */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          transform: "rotate(4deg)",
          backgroundColor: "#5C8AC9",
          whiteSpace: "nowrap",
          width: "110vw",
          justifyContent: "center",
          marginLeft: "-10px",
          marginTop:"-40px"
        }}
      >
        <div
          ref={greenTrack}
          style={{
            display: "inline-flex",
            willChange: "transform", // GPU acceleration hint

          }}
        >
          {/* Two copies for infinite scroll */}
          <span
            style={{
              fontSize: "2.2vw",
              fontWeight: "700",
              color: "#ffff",
              padding: "1rem 2vw",
            }}
          >
            We Create what you want and it is best!! &nbsp; We Create what you want
            and it is best!!
          </span>
          <span
            style={{
              fontSize: "2.2vw",
              fontWeight: "700",
              color: "#ffffffff",
              padding: "1rem 2vw",
            }}
          >
            We Create what you want and it is best!! &nbsp; We Create what you want
            and it is best!!
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarqueeAnimation;
