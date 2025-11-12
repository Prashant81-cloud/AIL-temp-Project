import React from "react";
import "../Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee">
      <h3>
        <div className="marquee-wrapper">
          <div className="marquee-title">
            / We think <span className="text-stroke-black">creative</span> &amp; make them{" "}
            <span className="text-stroke-black">easy</span> / We think{" "}
            <span className="text-stroke-black">creative</span> &amp; make them{" "}
            <span className="text-stroke-black">easy</span>
          </div>
          <div className="marquee-title">
            / We think <span className="text-stroke-black">creative</span> &amp; make them{" "}
            <span className="text-stroke-black">easy</span> / We think{" "}
            <span className="text-stroke-black">creative</span> &amp; make them{" "}
            <span className="text-stroke-black">easy</span>
          </div>
        </div>
      </h3>
    </div>
  );
};

export default Marquee;
