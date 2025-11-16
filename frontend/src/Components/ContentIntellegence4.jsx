// WhyChooseGenAISection.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contentBlocks = [
  {
    title: "Our GenAI Philosophy",
    body: [
      "AI should enhance creativity, not replace it.",
      "At Advaita Innovation Labs, humans define the story.",
      "AI accelerates the craft. Distribution creates the impact.",
      "This is storytelling built for the future — grounded in emotion, powered by data, and delivered at scale.",
    ],
  },
  {
    title: "Unlock the Future of Storytelling",
    body: [
      "Whether you want to create a branded web series, high-impact campaign, founder-led narrative, or AI-optimized social storytelling, AIL’s GenAI capabilities help you do it:",
      "✔ Faster",
      "✔ Smarter",
      "✔ Better",
      "✔ And with greater distribution power",
      "Advaita Innovation Labs — Where GenAI meets human imagination and global media scale.",
    ],
  },
  {
    title: "✔ AI + Human Storytelling",
    body: ["We don’t replace creators — we empower them."],
  },
  {
    title: "✔ End-to-End Intelligent Workflow",
    body: ["From idea → script → visuals → edit → distribution."],
  },
  {
    title: "✔ AI Tools Integrated with OTT Media Reach",
    body: ["A unique advantage no traditional agency can match."],
  },
  {
    title: "✔ Higher ROI & Faster Turnaround",
    body: ["AI reduces effort. AIL increases impact."],
  },
  {
    title: "✔ Transparent, Ethical & Brand-Safe AI",
    body: ["Transparent, accountable, and safe deployment of GenAI for brands."],
  },
];

const WhyChooseGenAISection = () => {
  const sectionRef = useRef(null);
  const headingLeftRef = useRef(null);
  const headingRightRef = useRef(null);
  const slidesRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const headingLeft = headingLeftRef.current;
      const headingRight = headingRightRef.current;
      const slides = slidesRef.current.filter(Boolean);

      const totalSteps = 1 + slides.length;
      const scrollPerSlide = window.innerHeight * 1;

      // Initial states
      gsap.set(slides, { opacity: 0, xPercent: 100 });

      gsap.set([headingLeft, headingRight], {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        whiteSpace: "nowrap",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=" + scrollPerSlide * totalSteps,
          pin: true,
          scrub: 0.4,
          snap: {
            snapTo: (v) => {
              const step = 1 / (totalSteps - 1);
              return Math.round(v / step) * step;
            },
            duration: 10000,
            ease: "power2.out",
          },
        },
      });

      // Step 1: Move heading to corners
      tl.to(headingLeft, {
        xPercent: -70,
        yPercent: -300,
        scale: 0.7,
        ease: "none",
      });

      tl.to(
        headingRight,
        {
          xPercent: -15,
          yPercent: 120,
          scale: 0.7,
          ease: "none",
        },
        "<"
      );

      // Steps 2-8: Scroll-controlled content sliding (NO flicker)
      slides.forEach((slide, index) => {
        const step = index + 1;

        // Make current slide visible
        tl.fromTo(
          slide,
          { opacity: 0, xPercent: 100 },
          { opacity: 1, xPercent: 0, ease: "none" },
          step
        );

        // Fade previous when moving to next
        if (index > 0) {
          tl.to(
            slides[index - 1],
            { opacity: 0, xPercent: -25, ease: "none" },
            step
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen  text-black overflow-hidden bg-[#803E3C]"
    >
      <div className="relative w-full h-full">
        {/* Main Headings */}
        <h2
          ref={headingLeftRef}
          className="archivo-black text-[#FAF4EC] text-5xl md:text-9xl "
        >
          Why Choose <span className="text-[#2C3038]">AIL’s</span>
        </h2>

        <h2
          ref={headingRightRef}
          className="archivo-black text-[#FAF4EC] text-5xl mt-28 md:text-9xl"
        >
          <span className="text-[#2C3038]">GenAI</span> Stack?
        </h2>
{/* text-[#803E3C]
text-[#74643E]
text-[#99CC66]
text-[#939479] */}
        {/* Center Slide Container */}
        <div className="absolute inset-0 flex items-center justify-center px-8 text-[#FAF4EC]">
          <div className="relative max-w-4xl w-full">
            {contentBlocks.map((block, i) => (
              <article
                key={block.title}
                ref={(el) => (slidesRef.current[i] = el)}
                className="absolute inset-0 flex flex-col justify-center p-10   "
              >
                <h3 className="archivo-black text-3xl md:text-4xl mb-3 leading-tight">
                  {block.title}
                </h3>

                <div className="space-y-2 text-base md:text-lg leading-relaxed">
                  {block.body.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGenAISection;
