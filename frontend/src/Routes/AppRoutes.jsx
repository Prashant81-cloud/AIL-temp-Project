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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/content-intellegence" element={<ContentIntellegence />} />
      <Route path="/solutions" element={<SolutionsMain />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/brand-solutions" element={<BrandSolutions/>}/>
      <Route path="/media-solutions" element={<MediaSolutions/>}/>
      <Route path="/content-solutions" element={<ContentSolutions/>}/>
    </Routes>
  );
}
