import React from "react";
import SplitTextLarge from "./SplitTextLarge";
import SplitTextSmall from "./SplitTextSmall";

export default function SplitTextWrapper() {
  return (
    <>
      {/* LARGE SCREENS (sm and above) */}
      <div className="hidden sm:block">
        <SplitTextLarge />
      </div>

      {/* SMALL SCREENS (below sm) */}
      <div className="block sm:hidden">
        <SplitTextSmall />
      </div>
    </>
  );
}
