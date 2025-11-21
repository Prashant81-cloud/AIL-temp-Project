import { Marquee } from "@/components/ui/marquee"

export default function AILMarquee() {
  return (
    <div className="relative w-full overflow-hidden ">

      {/* LEFT FADE SHADOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-20" />

      {/* RIGHT FADE SHADOW */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-20" />

      {/* FIRST ROW — big text */}
      <Marquee pauseOnHover className="[--duration:10s]"> 
        <div className="mx-5 flex items-center ">
          <p className="text-6xl font-semibold whitespace-nowrap">
            Advaita Innovation Labs — India’s Largest Brand Storytelling Studio •
          </p>
        </div>
      </Marquee>

      {/* SECOND ROW — smaller text, reverse direction */}
      <Marquee reverse pauseOnHover className="[--duration:10s] ">
        <div className="mx-5 flex items-center gap-4">
          <p className="text-4xl opacity-80 whitespace-nowrap">
            We create believable stories and distribute them through OTT and TV networks, 
            helping brands reach audiences that matter.
          </p>
        </div>
      </Marquee>

    </div>
  )
}
