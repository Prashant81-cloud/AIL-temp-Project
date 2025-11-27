import SplitText from "./SplitText";
import Video from "./Video";
import FlipPages from "./FlipPages";
import Solutions from "./Solutions";
import DefineUs from "./DefineUs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Random from "./Random";
import DoubleMarquee from "./Marquee";


export default function HomePage() {
  const location = useLocation();

  // 👉 Scroll to #solutions-section when coming from navbar
  useEffect(() => {
    if (location.hash === "#solutions") {
      const el = document.getElementById("solutions-section");
      if (el) el.scrollIntoView({ behavior: "auto" });
    }
  }, [location]);

  // 👉 FIX: Remove #solutions from URL when user scrolls back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150 && location.hash === "#solutions") {
        window.history.replaceState({}, "", "/"); // remove hash without reload
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <>
      <SplitText />


        <Video />


<div className=" mt-0">      <FlipPages /></div>

      {/* Solutions Section */}
      <div id="solutions-section">
        <Solutions />
      </div>
<div className="mt-20">
  <DoubleMarquee/>
</div>
      <div className="mt-40">
        <DefineUs />
      </div>
    </>
  );
}
