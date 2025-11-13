import React from "react";
import AboutUs1 from "../Components/AboutUs1";
import AboutUs2 from "../Components/AboutUs2";
import AboutUs3 from "../Components/AboutUs3";
import { useEffect } from "react";

function AboutUs() {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="w-screen overflow-x-hidden">

      {/* Normal Section */}
      <section>
        <AboutUs1 />
      </section>

      {/* Dedicated scroll container for zoom pages */}
      <section className="relative z-10">
        <AboutUs2 />
      </section>

      {/* Normal Section */}
      <section className="relative z-0">
        <AboutUs3 />
      </section>

    </div>
  );
}

export default AboutUs;
