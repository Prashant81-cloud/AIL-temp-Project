// src/components/DoubleMarquee.jsx
import React from "react";
import "../marquee.css";

export default function DoubleMarquee() {
  return (
    <section
      aria-label="Brand marquees"
      className="w-full bg-transparent py-10 overflow-hidden"
    >
      {/* Marquee 1 (LEFT direction) */}
      <div className="marquee marquee-left">
        <div className="marquee-inner text-3xl md:text-5xl font-semibold whitespace-nowrap uppercase tracking-wide">
          Advaita Innovation Labs — India’s Largest Brand Storytelling Studio •{" "}
          Advaita Innovation Labs — India’s Largest Brand Storytelling Studio •{" "}
          Advaita Innovation Labs — India’s Largest Brand Storytelling Studio •
        </div>
      </div>

      {/* Marquee 2 (RIGHT direction) */}
      <div className="marquee marquee-right mt-8">
        <div className="marquee-inner text-2xl md:text-4xl font-medium whitespace-nowrap">
          We create believable stories and distribute them through OTT and TV
          networks, helping brands reach audiences that matter. • We create
          believable stories and distribute them through OTT and TV networks,
          helping brands reach audiences that matter. • We create believable
          stories and distribute them through OTT and TV networks, helping
          brands reach audiences that matter. •
        </div>
      </div>
    </section>
  );
}
