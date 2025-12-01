// Pages/AboutUs2.jsx
import useIsMobile from "@/Pages/useIsMobile";
import AboutUs2Small from "./AboutUs2Small";
import AboutUs2Large from "./AboutUs2Large";

export default function AboutUs2() {
  const isMobile = useIsMobile(768); // md breakpoint

  return isMobile ? <AboutUs2Small /> : <AboutUs2Large />;
}
