import SplitText from "./SplitText";
import Marquee from "./Marquee";
import Video from "./Video";
import FlipPages from "./FlipPages";
import Solutions from "./Solutions";
import PageTransitionFooter from "./PageTransitionFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {

const location = useLocation();

  useEffect(() => {
    if (location.hash === "#solutions") {
      const el = document.getElementById("solutions-section");
      if (el) {
        el.scrollIntoView({ behavior: "auto" });  // 👈 INSTANT JUMP
      }
    }
  }, [location]);

  return (
    <>
      <SplitText />

      <Video />
      <FlipPages />
<div id="solutions-section">
  <Solutions />
</div>
      <Marquee />
    </>
  );
}
