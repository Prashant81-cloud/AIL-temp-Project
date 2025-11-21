import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs2() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const panels = panelsRef.current;
      const n = panels.length;
      const tl = gsap.timeline();
console.log("AboutUs2 GSAP INIT", ScrollTrigger.getAll().length);


      if (!container || panels.length === 0) return;

      /* -----------------------------------------------------------
         PANEL 1 — fully visible on load (no animation)
      ----------------------------------------------------------- */
      const panel1 = panels[0];

      gsap.set(panel1, {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 20,
      });

      gsap.set(panel1.querySelectorAll("h1, p, li"), {
        opacity: 1,
        filter: "blur(0px)",
      });

      // Panel 1 Exit (starts on scroll)
      tl.to(
        panel1,
        {
          scale: 0.9,
          opacity: 0,
          filter: "blur(12px)",
          duration: 1,
          ease: "power2.inOut",
        },
        0.5
      );

      /* -----------------------------------------------------------
         PANELS 2 → n-1
         Smooth single zoom (NO settle bounce)
      ----------------------------------------------------------- */
      for (let i = 1; i < n - 1; i++) {
        const panel = panels[i];

        // Initial hidden state
        gsap.set(panel, {
          scale: 0.75,
          opacity: 0,
          filter: "blur(18px)",
          zIndex: 10,
        });

        // ENTER — smooth single zoom: 0.75 → 1
        tl.to(
          panel,
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          i * 1
        );

        // TEXT reveal
        tl.from(
          panel.querySelectorAll("h1, p, li"),
          {
            opacity: 0,
            filter: "blur(12px)",
            duration: 1,
            ease: "power2.out",
            stagger: 0,
          },
          i * 1
        );

        // EXIT — after enter completes
        tl.to(
          panel,
          {
            scale: 0.9,
            opacity: 0,
            filter: "blur(12px)",
            duration: 1,
            ease: "power2.inOut",
          },
          i * 1 + 0.9
        );
      }

      /* -----------------------------------------------------------
         LAST PANEL — no exit
      ----------------------------------------------------------- */
      const last = panels[n - 1];

      gsap.set(last, {
        scale: 0.75,
        opacity: 0,
        filter: "blur(18px)",
        zIndex: 20,
      });

      tl.to(
        last,
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        (n - 1) * 1
      );

      tl.from(
        last.querySelectorAll("h1, p, li"),
        {
          opacity: 0,
          filter: "blur(12px)",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0,
        },
        (n - 1) * 1
      );

      /* -----------------------------------------------------------
         ScrollTrigger — pin + scrub
      ----------------------------------------------------------- */
      ScrollTrigger.create({
        animation: tl,
        trigger: container,
        start: "top top",
        end: `+=${(n - 1) * window.innerHeight}`,
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // CLEANUP — FIX #3
  }, []);




  return (
    <div ref={containerRef} className="w-screen h-screen relative overflow-hidden">

      {/* -----------------------------------------------------------
         PANEL 1
      ----------------------------------------------------------- */}
      <section
        ref={(el) => (panelsRef.current[0] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-screen py-7">
          <div className="h-full bg-gradient-to-r from-[#FAF4EC] from-[40%] to-[#f7ecdc] to-[40%] flex">
            <div className="p-[1px] flex justify-between items-center">
              <h1 className="text-6xl font-medium ml-20">
                We Humanize Brands Through Believable, AI-Enhanced Stories
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="text-2xl font-[500] mr-[300px]">
                At AIL, we believe every brand has a powerful story at its core.
                Our job is to help you find it, shape it, and stream it to the
                right audience.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 ml-80">
                <li className="text-2xl">We combine:</li>
                <li className="font-[500] text-lg"># Creative storytelling</li>
                <li className="font-[500] text-lg"># Cinematic content production</li>
                <li className="font-[500] text-lg"># Generative AI tools</li>
                <li className="font-[500] text-lg"># Audience insights & data science</li>
                <li className="font-[500] text-lg"># OTT distribution intelligence</li>
              </ul>

              <p className="text-xl font-[500] opacity-70 text-gray-800 mr-[200px]">
Our flagship series — Gods of Gourmet, The Bharat Chapters, Brands of Tomorrow, Rising Bharat, and Super Founders — have become some of India's most credible platforms for brand storytelling and founder visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
         PANEL 2
      ----------------------------------------------------------- */}
      <section
        ref={(el) => (panelsRef.current[1] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-screen py-7">
          <div className="h-full bg-gradient-to-r from-[#FAF4EC] from-[40%] to-[#f7ecdc] to-[40%] flex">
            <div className="p-[1px] flex justify-between items-center">
              <h1 className="text-6xl font-medium ml-20">
                We Don’t Just Create Content — We Distribute It
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="text-2xl font-[500] mr-[300px]">
While traditional agencies produce videos and hope they perform, we distribute stories through OTT and TV networks that are trusted by millions.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 ml-80">
                <li className="text-2xl">Brands get access to:</li>
                <li className="font-[500] text-lg"># Premium OTT audiences</li>
                <li className="font-[500] text-lg"># Business viewers</li>
                <li className="font-[500] text-lg"># Decision-makers</li>
                <li className="font-[500] text-lg"># Early adopters</li>
                <li className="font-[500] text-lg"># High-intent consumers</li>
                <li className="font-[500] text-lg"># Urban, affluent households</li>
              </ul>

              <p className="text-xl font-[500] opacity-70 text-gray-900 mr-[200px]">
Your content doesn't vanish in a feed. It gets streamed, discovered, and remembered.
Our media partners include India's leading OTT platforms and broadcasters — enabling seamless, organic brand integrations across entertainment, business, lifestyle, and culture-driven content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
         PANEL 3
      ----------------------------------------------------------- */}
      <section
        ref={(el) => (panelsRef.current[2] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-screen py-7">
          <div className="h-full bg-gradient-to-r from-[#FAF4EC] from-[40%] to-[#f7ecdc] to-[40%] flex">
            <div className="p-[1px] flex justify-between items-center">
              <h1 className="text-6xl font-medium ml-20">
                A Platform for Creators, Artists & AI Specialists
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="text-2xl font-[500] mr-[300px]">
AIL is a collaborative ecosystem where human creativity meets generative intelligence.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 ml-80">
                <li className="text-2xl">We bring together:</li>
                <li className="font-[500] text-lg"># Writers & filmmakers</li>
                <li className="font-[500] text-lg"># Designers & animators</li>
                <li className="font-[500] text-lg"># Story strategists</li>
                <li className="font-[500] text-lg"># Media planners</li>
                <li className="font-[500] text-lg"># Data analysts & AI engineers</li>
                <li className="font-[500] text-lg"># Content creators & editors</li>
              </ul>

              <p className="text-xl font-[500] opacity-70 text-gray-900 mr-[200px]">
Gen AI tools support our creators in everything from scripting, research, editing, visualization, language personalization, summarization, and audience insight modeling — without removing the human heart of storytelling.
Here, creativity scales with technology, making the process faster, smarter, and more powerful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
         PANEL 4
      ----------------------------------------------------------- */}
      <section
        ref={(el) => (panelsRef.current[3] = el)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-screen py-7">
          <div className="h-full bg-gradient-to-r from-[#FAF4EC] from-[40%] to-[#f7ecdc] to-[40%] flex">
            <div className="p-[1px] flex justify-between items-center">
              <h1 className="text-6xl font-medium ml-20">
                A New-Age Media Company Fuelled by AI + Storytelling + Distribution
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="text-2xl font-[500] mr-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, tenetur!
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 ml-80">
                <li className="text-2xl">
                  Advaita Innovation Labs stands at the intersection of:
                </li>
                <li className="font-[500] text-lg"># Branded entertainment</li>
                <li className="font-[500] text-lg"># OTT distribution</li>
                <li className="font-[500] text-lg"># AI-powered content creation</li>
                <li className="font-[500] text-lg"># Innovative media solutions</li>
                <li className="font-[500] text-lg"># Creator-led IP development</li>
                <li className="font-[500] text-lg"># Digital and LinkedIn storytelling</li>
                <li className="font-[500] text-lg"># Integrated brand communication</li>
              </ul>

              <p className="text-xl font-[500] opacity-70 text-gray-900 mr-[200px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tempore ut, error nulla ea inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, qui!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
