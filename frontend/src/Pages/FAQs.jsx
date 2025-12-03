import React from "react";
import useIsMobile from "./useIsMobile";

// Import Mobile + Desktop versions
import FAQMobile from "./FAQMobile";
import FAQDesktop from "./FAQDesktop";

export default function FAQs() {
  const isMobile = useIsMobile(768); // md breakpoint

  return (
    <div className="w-full min-h-screen   flex justify-center">
      <div className="w-full max-w-6xl">

        {/* Only decide which FAQ layout to render */}
        {isMobile ? <FAQMobile /> : <FAQDesktop />}

      </div>
    </div>
  );
}
