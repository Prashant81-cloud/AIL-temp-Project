// src/pages/PageTransitionFooter.jsx
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

gsap.registerPlugin(ScrollTrigger);

export default function PageTransitionFooter() {
  const containerRef = useRef(null);
  const pageRef = useRef(null);

  // store references to created instances so we can always clean up
  const tlRef = useRef(null);
  const triggersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const page = pageRef.current;
    if (!container || !page) return;

    // Create animation using a timeline so we have full control
    tlRef.current = gsap.timeline({
      defaults: { ease: "none" },
    });

    // Create a simple tween that uses a ScrollTrigger
    tlRef.current.to(page, {
      yPercent: -67,
      duration: 1,
      // we create the ScrollTrigger instance explicitly so we can manage it
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onLeave: () => {
          /* optional: any special handling when leaving */
        },
      },
    });

    // collect all triggers created by gsap for robust cleanup
    triggersRef.current = ScrollTrigger.getAll();

    // === always return a cleanup function (no early returns!) ===
    return () => {
      // kill the timeline safely
      try {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
      } catch (e) {
        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.warn("Failed to kill timeline in PageTransitionFooter:", e);
        }
      }

      // kill any triggers we collected
      try {
        (triggersRef.current || []).forEach((t) => {
          try {
            t.kill();
          } catch (_) {
            // ignore individual kill failures
          }
        });
        triggersRef.current = [];
      } catch (e) {
        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.warn("Failed to kill ScrollTriggers in PageTransitionFooter:", e);
        }
      }

      // final aggressive safety: kill any remaining ScrollTriggers (safe)
      try {
        ScrollTrigger.getAll().forEach((t) => {
          try {
            t.kill();
          } catch (_) {}
        });
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      <section
        ref={pageRef}
        className="absolute w-full h-screen bg-[#faf4ec] rounded-b-[60px] flex flex-col items-center justify-center z-[2]"
      >
        {/* page content */}
        <div className="grid grid-cols-[50%_40%] justify-center w-full mb-[20vh]">
          <div className="pic1">
            <img
              src="https://i.pinimg.com/736x/c7/88/24/c7882408c09240b7648770acad7dfed7.jpg"
              alt=""
              className="object-cover h-[80vh] w-[98%]"
            />
            <h1 className="font-[800] tracking-[-2px] font-[Syne,sans-serif]">VOGUE / SHOTS</h1>
          </div>

          <div className="ml-10">
            <img
              src="https://i.pinimg.com/736x/98/1b/8d/981b8d839d9026d128e9c37fe481377f.jpg"
              alt=""
              className="h-[60vh] w-[95%]"
            />
            <div className="flex overflow-hidden gap-[60px]">
              <h3 className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, hic ipsum dolor sit amet.
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit numquam quae eos deleniti obcaecati ab sunt neque perferendis.
              </p>
            </div>
          </div>
        </div>
      </section>

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
  );
}
