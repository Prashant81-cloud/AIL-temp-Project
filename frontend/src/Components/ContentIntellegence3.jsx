// src/Components/ContentIntellegence3.jsx
import React, { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import gsap from "gsap";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";

const DATA = [
  { title: "AI-Assisted Scriptwriting & Story Development", bg:"#B61B76",
    description: "We use GenAI tools to support brainstorming, research, plot structures, character arcs, and narrative development. AI helps expand possibilities — our storytellers shape the final emotion.",
    other: ["Branded film scripts","Web-series concepts","Founder story formats","Voiceovers & narrative direction","Cultural insight mining"],
  },
  { title: "AI-Powered Audience Insights & Content Intelligence", bg:"#3685ed",
    description: "Every story begins with understanding who it’s for. This helps us choose the right story, right format, right platform.",
    other: ["Audience sentiment","OTT viewing patterns","Social behavior","Competitive content","Trend mapping"],
  },
  { title: "GenAI Visual Development & Pre-Visualization", bg:"#5e156eff",
    description: "This reduces production time and gives clients a crystal-clear picture of the final outcome. lorem ipsum ajsjd we are best in the market.",
    other: ["Moodboards","Scene concepts","Style frames","Previsualizations","Character explorations","Location look & feel", "Motion graphic drafts"],
  },
  { title: "AI-Enhanced Video Editing & Post-Production", bg:"#6b1bb6ff",
    description: "What used to take days can now happen in hours — without losing cinematic quality. we are the one of most talented proples.",
    other: ["Smart cuts detection","Multi-language subtitling","Noise & grain cleanup","Color reference matching","Motion graphics automation","AI voice enhancement","AI music exploration"],
  },
  { title: "AI-Driven Personalization at Scale", bg:"#3685ed",
    description: "More relevant & contextual This makes branded content more relevant, more contextual, and more effective. This makes branded content more relevant, more contextual.",
    other: ["Region","Demographics","Industry","Platform behavior","Language preferences", "Purchase intent"],
  },
  { title: "AI for LinkedIn & PR Storytelling", bg:"#B61B76",
    description: "Humans refine. AI accelerates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quis facilis id quidem obcaecati!",
    other: ["Founder LinkedIn narratives","Personal Brand calendars","Thought leadership content","PR-ready story drafts","Company updates & storytelling posts"],
  },
  { title: "AI-Optimized Distribution Strategy", bg:"#347803ff",
    description: "Ensures premium OTT audiences convert belief into business. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostru",
    other: ["Which platform the story fits best","Best OTT category","Ideal release timing","Campaign placements","Topic relevance scores", "Predicted performance"],
  },
];

export default function ContentIntellegence3() {
  const [activeIndex, setActiveIndex] = useState(0);

  // REFS FOR ANIMATION TARGETS
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const descRef = useRef(null);

  // GSAP ANIMATION ON INDEX CHANGE
// GSAP ANIMATION ON INDEX CHANGE
useEffect(() => {
  if (!titleRef.current || !descRef.current) return;

  const tl = gsap.timeline();

  // TITLE FADE + SLIDE
  tl.fromTo(
    titleRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  );

  // DESCRIPTION CROSSFADE




}, [activeIndex]);


  const onStepEnter = ({ data }) => {
    setActiveIndex(data);
  };

  return (
    <div className="relative w-full bg-[#FAF4EC] font-sans sticky">
      <div className="flex max-w-[1500px] mx-auto ">

        {/* LEFT — Sticky Panel */}
        <div className="w-[70%] sticky top-[0.1px] h-screen">
          <div
            style={{ backgroundColor: DATA[activeIndex].bg }}
            className="text-white p-8 h-full transition-all duration-500 flex items-center justify-end"
          >
            <h2
              ref={titleRef}
              className="text-7xl font-bold mb-4 archivo-black"
            >
              # {DATA[activeIndex].title}
            </h2>
          </div>
        </div>

        {/* RIGHT — Scroll Steps */}
<div className="w-[60%] ml-10">
  <Scrollama offset={0.5} onStepEnter={onStepEnter}>
    {DATA.map((item, index) => (
      <Step data={index} key={index}>
        
        {/* FULLSCREEN SECTION */}
        <div className="h-screen flex items-center justify-center">
          
          <div className="h-full w-full gap-10 p-10 border-black border-t-2 flex flex-col transition-all duration-300">
            
            {/* DESCRIPTION (animated by GSAP) */}
            <p ref={descRef} className=" text-4xl league-spartan  mb-10 font-bold">
              {item.description}
            </p>

            {/* LIST — GSAP stagger target */}
            <ul ref={listRef} className=" text-gray-800 text-lg ">
              {item.other.map((line, i) => (
                
                <li
                  key={i}
                  className={`p-1  text-2xl flex items-center justofy-center gap-2 font-semibold transition ${
                    activeIndex === index ? "" : "opacity-60"
                  }`}
                >
                    <span className="text-md">  <AiOutlineRise />  </span>
                  {line}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </Step>
    ))}
  </Scrollama>
</div>


      </div>
    </div>
  );
}
