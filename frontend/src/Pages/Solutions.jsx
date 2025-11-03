import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { VscArrowDown } from "react-icons/vsc";

const Solutions = () => {
  const [active, setActive] = useState(null);
  const divRefs = useRef({});
  const contentRefs = useRef({});

  const services = [
    {
      title: "Tech Solutions",
      content:
        "Our team of architects are highly trained to develop accurately each of the projects created at the firm lorem ipsum The curious fox danced under shimmering stars, chasing fireflies through fields of whispering silver grass.",
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Brand Solutions",
      content:
        "Our team of architects are highly trained to develop accurately each of the projects created at the firm to develop accurately each of the projects created at the firm lorem ipsum The curious fox danced under shimmering stars, chasing fireflies through fields of whispering silver grass.",
      img: "https://images.jdmagicbox.com/v2/comp/delhi/q5/011pxx11.xx11.220317175500.l3q5/catalogue/multiplier-brand-solutions-pvt-ltd-mathura-road-delhi-marketing-agencies-elsb49au5z.jpg",
    },
    {
      title: "Media Solutions",
      content:
        "Our team of architects are highly trained to develop accurately each of the projects created at the firm lorem ipsum The curious fox danced under shimmering stars, chasing fireflies through fields of whispering silver grass.",
      img: "https://img.freepik.com/free-vector/video-marketing-isometric-concept_1284-10903.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Research Solutions",
      content:
        "Our team of architects are highly trained to develop accurately each of the projects created at the firm lorem ipsum The curious fox danced under shimmering stars, chasing fireflies through fields of whispering silver grass.",
      img: "https://www.researchsolutions.com/hs-fs/hubfs/Header_Trust%20%26%20Reliability%20In%20AI-Powered%20Research.png",
    },
    {
      title: "Film & Photography",
      content:
        "Our team of architects are highly trained to develop accurately each of the projects created at the firm lorem ipsum The curious fox danced under shimmering stars, chasing fireflies through fields of whispering silver grass.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCZrbOfpPd-12n7u4R1BAyJMWxzVySvrZHg&s",
    },
  ];

  // Generate random color
  const randomColor = () => {
    const colors = [ "#FE6427", "#44EF18", "#FDE324", "#EFB9E2", "#03D5F2"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

const handleMouseEnter = (title) => {
  setActive(title);

  const div = divRefs.current[title];
  const content = contentRefs.current[title];
  const heading = div.querySelector("h2");

  // 💀 Kill any ongoing animations for these elements before starting new ones
  gsap.killTweensOf([div, content, heading]);

  gsap.to(div, {
    backgroundColor: randomColor(),
    color: "#fff",
    duration: 0.4,
    ease: "power2.out",
  });

  gsap.to(heading, {
    color: "#fff",
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(content, {
    height: "auto",
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
};

const handleMouseLeave = (title) => {
  setActive(null);

  const div = divRefs.current[title];
  const content = contentRefs.current[title];
  const heading = div.querySelector("h2");

  // 💀 Kill any ongoing animations for these elements before starting new ones
  gsap.killTweensOf([div, content, heading]);

  gsap.to(div, {
    backgroundColor: "transparent",
    color: "#000",
    duration: 0.4,
    ease: "power2.inOut",
  });

  gsap.to(heading, {
    color: "#6b7280",
    opacity: 0.5,
    duration: 0.3,
    ease: "power2.inOut",
  });

  gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
  });
};



  useEffect(() => {
    // Initialize all content divs as collapsed
    services.forEach((s) => {
      const el = contentRefs.current[s.title];
      if (el) gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row  text-black p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-6xl md:text-7xl mb-5">Solutions</h1>
        <p className="text-xl leading-relaxed max-w-md">
          We’re a highly collaborative team that enjoys working together and sharing our knowledge.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col mt-10 md:mt-0 ">
        {services.map((service) => (
          <div
            key={service.title}
            ref={(el) => (divRefs.current[service.title] = el)}
            className="border-t border-gray-300 pt-4  p-5 transition-all "
            onMouseEnter={() => handleMouseEnter(service.title)}
            onMouseLeave={() => handleMouseLeave(service.title)}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-500 opacity-50">
              {service.title}
            </h2>

            <div
              ref={(el) => (contentRefs.current[service.title] = el)}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-13 mt-3 ">
                <p className=" max-w-md text-white text-xl mb-5 mt-5">{service.content}</p>
<span className="rotate-270 text-black text-4xl bg-white rounded-full p-3 border-black border-[0.5px]">          <VscArrowDown /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
