// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "../Pages/HomePage";
import PageLoader from "../Components/PageLoader";
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContentIntellegence = lazy(() => import("../Pages/ContentIntellegence"));
const FAQs = lazy(() => import("../Pages/FAQs"));
const BrandSolutions = lazy(() => import("../Components/BrandSolutions"));
const MediaSolutions = lazy(() => import("../Components/MediaSolutions"));
const ContentSolutions = lazy(() => import("../Components/ContentSolutions"));
const Privacy = lazy(() => import("@/Pages/Privacy"));
const TermsConditions = lazy(() => import("@/Pages/TermsConditions"));
const NotFound = lazy(() => import("@/Pages/NotFound"));
const Career = lazy(() => import("../Pages/Career"));

export default function AppRoutes() {
  return (
        <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/content-intellegence" element={<ContentIntellegence />} />
      <Route path="/about" element={<AboutUs key="about-us-remount" />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/brand-solutions" element={<BrandSolutions/>}/>
      <Route path="/media-solutions" element={<MediaSolutions/>}/>
      <Route path="/content-solutions" element={<ContentSolutions/>}/>
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/careers" element={<Career />} />
    </Routes>
    </Suspense>
  );
}
