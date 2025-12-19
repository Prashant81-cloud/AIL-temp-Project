import SplitText from "./SplitText";
import Video from "./Video";
import FlipPages from "./FlipPages";
import Solutions from "./Solutions";
import DefineUs from "./DefineUs";
import { useEffect } from "react";

import Random from "./Random";
import DoubleMarquee from "./Marquee";
import SEO from "../Components/SEO";


export default function HomePage() {




  return (
    <>

      <SEO
        title="AIL India: Advaita Innovation Labs - Reshaping India's Narrative"
        description="Advaita Innovation Labs (AIL-India) combines impeccable production quality with data-driven storytelling. We help brands to create high-impact content for TV and OTT, bridging the gap between human creativity and AI intelligence"
        keywords="ail india, research, programs, advaita labs, advaita innovation labs"
        canonical="https://www.ail-india.com/"
      />

      <SplitText />

<div
  onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursor-text"))}
  onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursor-image"))}
>
  <Video />
</div>


<div >
  <FlipPages />

  </div>



<div ><DoubleMarquee/></div>

<div > <DefineUs /> </div>
    </>
  );
}
