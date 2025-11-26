import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function NavbarWrapper() {
  return (
    <div className="">
      {/* Desktop version (≥1250px) */}
<div className="hidden xl:block">
  <DesktopNavbar />
</div>

<div className="block xl:hidden">
  <MobileNavbar />
</div>

    </div>
  );
}
