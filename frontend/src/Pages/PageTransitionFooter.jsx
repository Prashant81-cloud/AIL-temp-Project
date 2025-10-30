import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "https://esm.sh/react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const page1Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const page1 = page1Ref.current;

    gsap.to(page1, {
      yPercent: -50, // only move up 50%, so half remains visible
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center", // scroll ends when footer's middle reaches center
        scrub: true,
        pin: true, // keeps it pinned during scroll
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* PAGE 1 */}
      <section ref={page1Ref} className="absolute w-full h-screen bg-[#faf4ec] rounded-b-[60px] flex flex-col items-center justify-center z-[2]">
        <div className="grid grid-cols-[50%_40%] justify-center w-full mb-[20vh]">
  {/* LEFT IMAGE */}
  <div className="pic1">
    <img
      src="https://i.pinimg.com/736x/c7/88/24/c7882408c09240b7648770acad7dfed7.jpg"
      alt=""
      className="object-cover h-[80vh] w-[98%]"
    />
    <h1 className="font-[800] tracking-[-2px] font-[Syne,sans-serif]">VOGUE / SHOTS</h1>
  </div>

  {/* RIGHT IMAGE + TEXT */}
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit numquam quae eos deleniti obcaecati
        ab sunt neque perferendis. Ab lorem is a
      </p>
    </div>
  </div>
</div>


      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 w-full bg-black text-[#faf4ec] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Main Logo/Text Section */}
          <div className="flex flex-col items-center justify-center mb-16">
            <h1 className="text-[15vw] leading-none font-bold select-none whitespace-nowrap lg:text-[15vw]">
              AIL-india
            </h1>
          </div>

          {/* Separator Line */}
          <div className="w-full border-t border-gray-700 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                <FaYoutube className="text-lg" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                <FaFacebookF className="text-lg" />
              </a>
            </div>

            <nav className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-gray-400 transition-colors">Solutions</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Upcoming Series</a>
              <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Workss</a>
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
};

export default App;
