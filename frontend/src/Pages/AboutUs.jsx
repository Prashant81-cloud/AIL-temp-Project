import React, { useEffect } from "react";
import AboutUs1 from "../Components/AboutUs1";
import AboutUs2 from "../Components/AboutUs2";
import AboutUs3 from "../Components/AboutUs3";
import { useLocation } from "react-router-dom";
import SEO from "../Components/SEO";


function AboutUs() {

  const location = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem("aboutReloaded")) {
      sessionStorage.setItem("aboutReloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("aboutReloaded");
    }
  }, []);



  return (
    <>

      <SEO
        title="About Us | AIL India"
        description="Learn more about AIL India's mission and vision."
        canonical="https://ail-india.com/about"
      />

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
    </>
  );
}

export default AboutUs;
