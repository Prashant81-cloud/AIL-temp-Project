import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { VscArrowDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const [active, setActive] = useState(null);
  const divRefs = useRef({});
  const contentRefs = useRef({});
  const navigate = useNavigate();

  // 🔥 RAW OBJECT DATA WITH LINKS
  const services = {
    "Brand Solutions": {
      heading:" Brand Storytelling Agency in India | AIL",
      content:
        "We help brands craft believable stories and distribute them across OTT & digital networks. Human-first storytelling powered by AI and strategy.",
      link: "/brand-solutions",
    },

    "Media Solutions": {
      heading:" OTT Branded Content & Media Studio | AIL",
      content:
        " Create or feature in original OTT & TV series. AIL blends storytelling & distribution, integrating your brand organically on India's largest platforms.",
      link: "/media-solutions",
    },

    "Content Solutions": {
      heading:" PR & LinkedIn Storytelling Solutions | AIL",
      content:
        " From LinkedIn branding to PR narratives, we create and distribute content that amplifies your brand voice across OTT, social & earned media.",
      link: "/content-solutions",
    },
  };

  const randomColor = () => {
    const colors = ["#FE6427", "#44EF18", "#FDE324", "#EFB9E2", "#03D5F2"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseEnter = (title) => {
    setActive(title);

    const div = divRefs.current[title];
    const content = contentRefs.current[title];
    const heading = div.querySelector("h2");

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
    Object.keys(services).forEach((title) => {
      const el = contentRefs.current[title];
      if (el) gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row text-black p-10 md:p-20 mt-30 bg-[#FAF4EC]">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col ">
      <div>        <h1 className="text-6xl md:text-7xl mb-5">Solutions</h1>
        <p className="text-xl leading-relaxed max-w-md">
 We humanize brands through believable stories distributed via OTT & TV networks. Where creativity, culture & technology unite to build belief.
        </p></div>

      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col mt-10 md:mt-0">
        {Object.keys(services).map((title) => (
          <div
            key={title}
            ref={(el) => (divRefs.current[title] = el)}
            className="border-t border-gray-300 pt-4 p-5 transition-all cursor-pointer relative"
            onClick={() => navigate(services[title].link)}   // 🟢 CLICK → NAVIGATE
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={() => handleMouseLeave(title)}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-500 opacity-50">
              {title}
            </h2>

            <div ref={(el) => (contentRefs.current[title] = el)} className="overflow-hidden">
              <div className="flex items-center gap-13 mt-3">
                <div>
                <h1 className="text-white text-2xl font-bold">{services[title].heading}</h1>
                <p className="max-w-md text-white text-xl mb-5 mt-5">
                  {services[title].content}
                </p>
                </div>
                <span className="rotate-270 text-black text-4xl bg-white rounded-full p-3 border-black border-[0.5px]">
                  <VscArrowDown />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
