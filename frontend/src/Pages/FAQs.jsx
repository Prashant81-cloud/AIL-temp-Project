import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import faqImage from '../assets/Faq-image3.png'

// --- Data for the FAQ items ---
// Added more data to demonstrate pagination
const faqData = [
  {
    question: "1. What is Advaita Innovation Labs (AIL)?",
    answer: "Advaita Innovation Labs is India’s largest brand storytelling and new-age media studio. We help brands create believable stories and distribute them through OTT platforms, TV networks, and premium digital ecosystems. We combine human creativity with GenAI-powered insights to create content that travels."
  },
  {
    question: "2. How is AIL different from a traditional advertising agency?",
    answer: "Traditional agencies create content. We create and distribute it. AIL offers: Branded content creation, OTT and TV distribution,Integrated IP collaborations, GenAI-powered content workflows, Premium storytelling formats. Your story doesn’t just get made — it gets streamed, seen, and remembered."
  },
  {
    question: "3. What services does AIL offer?",
    answer: `We offer three key service lines: Brand Solutions, Media Solutions, Content Solutions. All powered by GenAI and data intelligence.`
  },
  {
    question: "4. Do you create branded web series or OTT shows for brands?",
    answer: "Yes,  We help brands conceptualize, script, produce, and distribute full-fledged web series, TV shows, and documentary formats on India’s leading OTT platforms. Examples include:Gods of Gourmet (Hyatt, Hilton, Marriott), The Bharat Chapters (Flipkart)"
  },
  {
    question: "5. Can my brand get featured in your existing IPs?",
    answer: "Yes,  Brands can be integrated into our marquee storytelling properties, including: Brands of Tomorrow, Rising Bharat, Super Founders. These shows organically showcase India’s most innovative brands, founders, and business stories."
  },
  {
    question: "6. How does AIL help with distribution?",
    answer: "AIL partners with India’s top OTT platforms, broadcasters, and digital publishers.We ensure that every branded story reaches: Premium OTT audiences, Urban decision-makers, High-intent consumers, Business communities, Category-relevant viewers. This is our key differentiator."
  },
  {
    question: "7. What is AIL’s GenAI capability?",
    answer: "We use Generative AI across: Script development, Research & insights, Visual pre-production, Editing acceleration, Content personalization, Distribution intelligence, Trend analysis, PR & LinkedIn storytelling. AI helps us work faster and smarter — while humans maintain the emotional core."
  },
  {
    question: "8. Is the content entirely AI-generated?",
    answer: "No, AIL uses AI for support, not replacement. All final stories are crafted, refined, and approved by human writers, filmmakers, designers, and editors."
  },
  {
    question: "9. What industries does AIL work with?",
    answer: "We work with: D2C brands, Technology companies, FMCG, Healthcare & wellness, Finance & fintech, Hospitality & lifestyle, Retail & e-commerce, Startups & unicorns, Impact and sustainability-led brands. If your brand has a story — we can tell it."
  },
  {
    question: "10. How long does it take to produce a branded film or series?",
    answer: "Timelines depend on scope, but typically: Brand film: 3–6 weeks, Mini-series: 6–10 weeks, Full OTT-ready series: 10–16+ weeks. GenAI tools help reduce pre-production time significantly."
  },
  {
    question: "11. What is the pricing or budget range?",
    answer: "Every project is custom. Pricing depends on: Format (film, series, IP feature, PR), Distribution platform (OTT, TV, digital), Talent & production scale, Episode count, Creative complexity. We offer flexible models for startups, mid-size brands, and large enterprises."
  },
  {
    question: "12. Do you offer PR and LinkedIn content?",
    answer: "Yes,  Our Content Solutions team builds: Founder-led storytelling, Leadership narratives, LinkedIn strategies, Thought leadership articles, Company PR stories, Multi-language content. All supported by GenAI content optimization."
  },
  {
    question: "13. Can AIL work with Founder or CXO personal brands?",
    answer: "Absolutely, We specialize in: Founder storytelling, Vision films, Leadership profiles, LinkedIn thought leadership, Documentary-style founder episodes. We help leaders become industry voices."
  },
  {
    question: "14. Do you work directly with OTT platforms?",
    answer: "Yes — we have active partnerships that allow us to: Pitch branded properties, Co-create shows, Integrate brands organically, Secure premium distribution. Your content gets a real audience — not just views."
  },
  {
    question: "15. What is the first step to engage with AIL?",
    answer: "Simple, You can connect with us for a story discovery session. Or drop in an email to  'corporate@ail-india.com' . We’ll understand your brand, audience, and ambition — then recommend the right storytelling and distribution approach."
  },
  {
    question: "16. Where is AIL based?",
    answer: "We operate across India with creative, media, and production teams, serving brands nationally and globally. "
  },
  {
    question: "17. Do you work with startups?",
    answer: "Yes, we work closely with emerging brands, Series A/B companies, and high-growth startup founders, often featuring them in our IPs like Brands of Tomorrow and Super Founders."
  },
  {
    question: "18. Can AIL handle both creation and amplification?",
    answer: "Yes, AIL handles the complete chain: Story → Production → Distribution → Audience Amplification. This ensures your content performs, not just publishes."
  },
  {
    question: "19. Does AIL use AI ethically?",
    answer: "Absolutely. We follow strict guidelines for: Originality, Data security, Transparency, Human oversight, Content authenticity. Your brand is safe, respected, and protected."
  },
  {
    question: "20. Why should I choose AIL?",
    answer: "Because AIL gives you what no one else can: Premium storytelling + AI intelligence + OTT distribution. Your story doesn’t just get made — it gets streamed where it matters."
  },
];

// --- SVG Icons for the accordion ---

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#5C8AC9]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#5C8AC9]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

// --- SVG Icons for Pagination ---

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

// --- Individual FAQ Item Component ---
// This component manages its own open/close state.
// No changes needed here.
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s/g, '-')}`}
      >
        <span className="text-lg font-medium text-gray-800 group-hover:text-[#5C8AC9]">
          {question}
        </span>
        <span className="flex-shrink-0 ml-4">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s/g, '-')}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
// This is the default export that renders the entire section.
export default function FAQs() {
  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 4; // Show 4 questions per page

  // --- Pagination Logic ---
  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentFaqItems = faqData.slice(startIndex, endIndex);

  return (
    <div className=" flex ">
      <div className="w-full max-w-6xl mx-auto  rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Illustration (Unchanged) */}
          <div className="hidden md:flex items-center justify-center  p-8">
<img src={faqImage} alt="" />
          </div>
          
          {/* Right Column: FAQ Content */}
          <div className="p-8 md:p-12 flex flex-col">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Frequently asked questions
              </h2>
              
              {/* Paginated FAQ List */}
              <div className="space-y-4 min-h-[360px]">
                {currentFaqItems.map((item, index) => (
                  <FaqItem 
                    key={startIndex + index} // Use a key that is unique across pages
                    question={item.question} 
                    answer={item.answer} 
                  />
                ))}
              </div>
            </div>
            
            {/* Pagination Controls */}
            <div className="flex justify-center items-center ">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
                className="flex items-center text-2xl p-4   rounded-full disabled:opacity-50 disabled:cursor-not-allowed  transition-colors"
              >
<MdOutlineArrowBackIos />
              </button>

              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="flex items-center px-4 py-2  text-2xl rounded-lg disabled:opacity-50 disabled:cursor-not-allowed  transition-colors"
              >

<MdArrowForwardIos />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}