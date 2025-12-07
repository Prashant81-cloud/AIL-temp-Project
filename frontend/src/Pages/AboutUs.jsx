import React, { useEffect, useLayoutEffect } from "react";
import AboutUs1 from "../Components/AboutUs1";
import AboutUs2 from "../Components/AboutUs2";
import AboutUs3 from "../Components/AboutUs3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutUs() {

useEffect(() => {
  sessionStorage.removeItem("forceReload");
}, []);

  return (
    <div className="w-screen ">
      <section>
        <AboutUs1 />
      </section>
      <section className="relative z-10">
        <AboutUs2 />
      </section>
      <section className="relative z-0">
        <AboutUs3 />
      </section>
    </div>
  );
}

export default AboutUs;
