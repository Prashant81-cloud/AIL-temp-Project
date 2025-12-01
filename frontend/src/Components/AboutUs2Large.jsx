import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs2Large() {
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
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl font-medium ml-20">
                We Humanize Brands Through Believable, AI-Enhanced Stories
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="xl:text-2xl lg:text-xl md:text-lg md:mr-[100px] font-[500] xl:mr-[300px]  lg:mr-[200px]">
                At AIL, we believe every brand has a powerful story at its core.
                Our job is to help you find it, shape it, and stream it to the
                right audience.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 xl:ml-80 lg:ml-60 md:ml-30 xl:mt-0 lg:mt-15 md:mt-10">
                <li className="xl:text-2xl lg:text-xl md:text-lg">We combine:</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Creative storytelling</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Cinematic content production</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Generative AI tools</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Audience insights & data science</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># OTT distribution intelligence</li>
              </ul>

              <p className="xl:text-xl lg:text-lg md:text-md font-[500] opacity-70 text-gray-800 xl:mr-[200px]  lg:mr-[150px] md:mr-[70px]">
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
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl font-medium ml-20">
                We Don’t Just Create Content — We Distribute It
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="xl:text-2xl lg:text-xl md:text-lg md:mr-[100px] font-[500] xl:mr-[300px]  lg:mr-[200px]">
While traditional agencies produce videos and hope they perform, we distribute stories through OTT and TV networks that are trusted by millions.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 xl:ml-80 lg:ml-60 md:ml-30 xl:mt-0 lg:mt-15 md:mt-10">
                <li className="xl:text-2xl lg:text-xl md:text-lg">Brands get access to:</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># Premium OTT audiences</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># Business viewers</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># Decision-makers</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># Early adopters</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># High-intent consumers</li>
                <li className="font-[500]  xl:text-lg lg:text-md md:text-sm"># Urban, affluent households</li>
              </ul>

              <p className="xl:text-xl lg:text-lg md:text-md font-[500] opacity-70 text-gray-800 xl:mr-[200px]  lg:mr-[150px] md:mr-[70px]">
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
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl font-medium ml-20">
                A Platform for Creators, Artists & AI Specialists
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="xl:text-2xl lg:text-xl md:text-lg md:mr-[100px] font-[500] xl:mr-[300px]  lg:mr-[200px]">
AIL is a collaborative ecosystem where human creativity meets generative intelligence.
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 xl:ml-80 lg:ml-60 md:ml-30 xl:mt-30 lg:mt-45 md:mt-35">
                <li className="xl:text-2xl lg:text-xl md:text-lg">We bring together:</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Writers & filmmakers</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Designers & animators</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Story strategists</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Media planners</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Data analysts & AI engineers</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Content creators & editors</li>
              </ul>

              <p className="xl:text-xl lg:text-lg md:text-md font-[500] opacity-70 text-gray-800 xl:mr-[200px]  lg:mr-[150px] md:mr-[70px]">
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
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl font-medium ml-20">
                A New-Age Media Company Fuelled by AI + Storytelling + Distribution
              </h1>
            </div>

            <div className="p-[1px] flex flex-col items-center w-full justify-between py-5">
              <p className="xl:text-2xl lg:text-xl md:text-lg md:mr-[100px] font-[500] xl:mr-[300px]  lg:mr-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, tenetur!
              </p>

              <ul className="gap-[0.1px] flex flex-col mb-10 xl:ml-80 lg:ml-60 md:ml-30 xl:mt-0 lg:mt-15 md:mt-10">
                <li className="xl:text-2xl lg:text-xl md:text-lg">
                  AIL stands at the intersection of:
                </li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Branded entertainment</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># OTT distribution</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># AI-powered content creation</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Innovative media solutions</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Creator-led IP development</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Digital and LinkedIn storytelling</li>
                <li className="font-[500] xl:text-lg lg:text-md md:text-sm"># Integrated brand communication</li>
              </ul>

              <p className="xl:text-xl lg:text-lg md:text-md font-[500] opacity-70 text-gray-800 xl:mr-[200px]  lg:mr-[150px] md:mr-[70px] w-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tempore ut, error nulla ea inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, qui!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
