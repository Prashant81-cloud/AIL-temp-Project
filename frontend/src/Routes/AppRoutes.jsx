// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import ContentIntellegence from "../Pages/ContentIntellegence";
import SolutionsMain from "../Pages/SolutionsMain";
import FAQs from "../Pages/FAQs";
import BrandSolutions from "../Components/BrandSolutions";
import MediaSolutions from "../Components/MediaSolutions";
import ContentSolutions from "../Components/ContentSolutions";
import Privacy from "@/Pages/Privacy";
import TermsConditions from "@/Pages/TermsConditions";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/content-intellegence" element={<ContentIntellegence />} />
      <Route path="/solutions" element={<SolutionsMain />} />
      <Route path="/about-us" element={<AboutUs key="about-us-remount" />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/brand-solutions" element={<BrandSolutions/>}/>
      <Route path="/media-solutions" element={<MediaSolutions/>}/>
      <Route path="/content-solutions" element={<ContentSolutions/>}/>
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
