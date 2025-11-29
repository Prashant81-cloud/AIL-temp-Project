

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { VscArrowDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import useIsMobile from "./useIsMobile";

const Solutions = () => {
  const isMobile = useIsMobile(768); // < md
  const [active, setActive] = useState(null);
  const divRefs = useRef({});
  const contentRefs = useRef({});
  const navigate = useNavigate();

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
    if (isMobile) return; // disable animation on mobile

    setActive(title);

    const div = divRefs.current[title];
    const content = contentRefs.current[title];
    const heading = div.querySelector("h2");

    gsap.killTweensOf([div, content, heading]);

    gsap.to(div, { backgroundColor: randomColor(), color: "#fff", duration: 0.4 });
    gsap.to(heading, { color: "#fff", opacity: 1, duration: 0.3 });
    gsap.to(content, { height: "auto", opacity: 1, duration: 0.5 });
  };

  const handleMouseLeave = (title) => {
    if (isMobile) return; // disable animation on mobile

    setActive(null);

    const div = divRefs.current[title];
    const content = contentRefs.current[title];
    const heading = div.querySelector("h2");

    gsap.killTweensOf([div, content, heading]);

    gsap.to(div, { backgroundColor: "transparent", color: "#000", duration: 0.4 });
    gsap.to(heading, { color: "#6b7280", opacity: 0.5, duration: 0.3 });
    gsap.to(content, { height: 0, opacity: 0, duration: 0.4 });
  };

  useEffect(() => {
    Object.keys(services).forEach((title) => {
      const section = contentRefs.current[title];

      if (!section) return;

      if (isMobile) {
        // always open on mobile
        gsap.set(section, { height: "auto", opacity: 1 });
      } else {
        // collapsed by default on desktop
        gsap.set(section, { height: 0, opacity: 0, overflow: "hidden" });
      }
    });
  }, [isMobile]);

  return (
    <div className="flex flex-col md:flex-row text-black p-10 md:p-20 mt-30 bg-[#FAF4EC] gap-20">
      {/* LEFT SECTION */}
      <div className="md:w-1/2">
        <h1 className="text-[clamp(2.1rem,7.8vw,103px)] md:text-7xl font-medium">Solutions</h1>
        <p className="text-[clamp(14pxrem,1.8vw,17px)] max-w-md leading-[21px] md:text-xl md:leading-normal md:mt-5"> We humanize brands through believable stories distributed via OTT & TV networks. Where creativity, culture & technology unite to build belief.</p>
      </div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        {Object.keys(services).map((title) => (
          <div
            key={title}
            ref={(el) => (divRefs.current[title] = el)}
            className="border-t border-gray-300 pt-4 py-5 md:px-5 transition-all cursor-pointer "
            onClick={() => navigate(services[title].link)}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={() => handleMouseLeave(title)}
          >
            <h2 className="text-[1.7rem] md:text-4xl lg:text-5xl md:text-gray-500 md:opacity-50 font-semibold">
              {title}
            </h2>

            <div ref={(el) => (contentRefs.current[title] = el)} className="overflow-hidden">
              <div className="flex flex-col items-start gap-8 mt-3">
                <div>
                  <h1 className="md:text-white text-black text-[1.3rem] md:text-2xl leading-[25px] font-medium">{services[title].heading}</h1>
                  <p className="md:text-white text-[16px] leading-[21px] mt-3 md:text-xl md:mb-5 md:mt-5">{services[title].content}</p>
                </div>

                <span className="rotate-270 text-black text-4xl bg-white rounded-full p-3 border">
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
