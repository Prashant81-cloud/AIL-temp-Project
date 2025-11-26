import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const categories = [
  {
    category: "About AIL",
    questions: [
      {
        question: "1. What is Advaita Innovation Labs (AIL)?",
        answer:
          "Advaita Innovation Labs is India’s largest brand storytelling and new-age media studio. We help brands create believable stories and distribute them through OTT platforms, TV networks, and premium digital ecosystems. We combine human creativity with GenAI-powered insights to create content that travels."
      },
      {
        question: "2. How is AIL different from a traditional advertising agency?",
        answer:
          "Traditional agencies create content. We create and distribute it. AIL offers: Branded content creation, OTT and TV distribution,Integrated IP collaborations, GenAI-powered content workflows, Premium storytelling formats. Your story doesn’t just get made — it gets streamed, seen, and remembered."
      },
      {
        question: "3.What industries does AIL work with?",
        answer:
          "We work with: D2C brands, Technology companies, FMCG, Healthcare & wellness, Finance & fintech, Hospitality & lifestyle, Retail & e-commerce, Startups & unicorns, Impact and sustainability-led brands. If your brand has a story — we can tell it."
      },
      {
        question: "4. Where is AIL based?",
        answer:
          "We operate across India with creative, media, and production teams, serving brands nationally and globally."
      }
    ]
  },

  {
    category: "Services & Offerings",
    questions: [
      {
        question: "5. Can my brand get featured in your existing IPs?",
        answer:
          "Yes,  Brands can be integrated into our marquee storytelling properties, including: Brands of Tomorrow, Rising Bharat, Super Founders. These shows organically showcase India’s most innovative brands, founders, and business stories."
      },
      {
        question: "6. What services does AIL offer?",
        answer:
          "We offer three key service lines: Brand Solutions, Media Solutions, Content Solutions. All powered by GenAI and data intelligence."
      },
      {
        question: "7. Do you create branded web series or OTT shows for brands?",
        answer:
          "Yes,  We help brands conceptualize, script, produce, and distribute full-fledged web series, TV shows, and documentary formats on India’s leading OTT platforms. Examples include:Gods of Gourmet (Hyatt, Hilton, Marriott), The Bharat Chapters (Flipkart)"
      },
      {
        question: "8. Do you offer PR and LinkedIn content?",
        answer:
          "Yes,  Our Content Solutions team builds: Founder-led storytelling, Leadership narratives, LinkedIn strategies, Thought leadership articles, Company PR stories, Multi-language content. All supported by GenAI content optimization."
      }
    ]
  },

  {
    category: "Production & Process",
    questions: [
      {
        question: "9. How does AIL help with distribution?",
        answer:
          "AIL partners with India’s top OTT platforms, broadcasters, and digital publishers.We ensure that every branded story reaches: Premium OTT audiences, Urban decision-makers, High-intent consumers, Business communities, Category-relevant viewers. This is our key differentiator."
      },
      {
        question: "10. How long does it take to produce a branded film or series?",
        answer:
          "Timelines depend on scope, but typically: Brand film: 3–6 weeks, Mini-series: 6–10 weeks, Full OTT-ready series: 10–16+ weeks. GenAI tools help reduce pre-production time significantly."
      },
      {
        question: "11. What is the first step to engage with AIL?",
        answer:
          "Simple, You can connect with us for a story discovery session. Or drop in an email to  'corporate@ail-india.com' . We’ll understand your brand, audience, and ambition — then recommend the right storytelling and distribution approach."
      },
      {
        question: "12. Can AIL handle both creation and amplification?",
        answer:
          "Yes, AIL handles the complete chain: Story → Production → Distribution → Audience Amplification. This ensures your content performs, not just publishes."
      }
    ]
  },

  {
    category: " AI & Technology",
    questions: [
      {
        question: "13. What is AIL’s GenAI capability?",
        answer:
          "We use Generative AI across: Script development, Research & insights, Visual pre-production, Editing acceleration, Content personalization, Distribution intelligence, Trend analysis, PR & LinkedIn storytelling. AI helps us work faster and smarter — while humans maintain the emotional core."
      },
      {
        question: "14. Is the content entirely AI-generated?",
        answer:
          "No, AIL uses AI for support, not replacement. All final stories are crafted, refined, and approved by human writers, filmmakers, designers, and editors.."
      },
      {
        question: "15. Does AIL use AI ethically?",
        answer:
          "Absolutely. We follow strict guidelines for: Originality, Data security, Transparency, Human oversight, Content authenticity. Your brand is safe, respected, and protected."
      },
      {
        question: "16. Why should I choose AIL?",
        answer:
          "Because AIL gives you what no one else can: Premium storytelling + AI intelligence + OTT distribution. Your story doesn’t just get made — it gets streamed where it matters."
      }
    ]
  },

  {
    category: "Clients, Pricing & Partnerships",
    questions: [
      {
        question: "17. Do you work with startups?",
        answer:
          "Yes, we work closely with emerging brands, Series A/B companies, and high-growth startup founders, often featuring them in our IPs like Brands of Tomorrow and Super Founders."
      },
      {
        question: "18. What is the pricing or budget range?",
        answer:
          "Every project is custom. Pricing depends on: Format (film, series, IP feature, PR), Distribution platform (OTT, TV, digital), Talent & production scale, Episode count, Creative complexity. We offer flexible models for startups, mid-size brands, and large enterprises."
      },
      {
        question: "19. Can AIL work with Founder or CXO personal brands?",
        answer:
          "Absolutely, We specialize in: Founder storytelling, Vision films, Leadership profiles, LinkedIn thought leadership, Documentary-style founder episodes. We help leaders become industry voices."
      },
      {
        question: "20. Do you work directly with OTT platforms?",
        answer:
          "Yes — we have active partnerships that allow us to: Pitch branded properties, Co-create shows, Integrate brands organically, Secure premium distribution. Your content gets a real audience — not just views."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full flex justify-center  bg-[#FAF4EC] ">
      <div className="w-[90%] max-w-6xl flex gap-44 items-center ">

        {/* LEFT SIDEBAR */}
        <aside className="w-1/4">
          <div className="font-bold leading-tight mb-6 archivo-black ">
            <h1 className="text-6xl ">Frequently</h1> <br />
            <span className="text-[#5C8AC9] text-[31px]">Asked Questions</span>
          </div>

          <div className="flex flex-col gap-7 mt-15">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  setOpenIndex(null);
                }}
                className={`text-left text-2xl font-bold transition ${
                  activeCategory === idx ? "text-black" : "text-gray-400"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-3/4 flex flex-col gap-8">
          {categories[activeCategory].questions.map((item, index) => (
            <div key={index} className="border-b pb-4 w-180">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-2xl font-semibold"
              >
                {item.question}

                {openIndex === index ? (
                  <FiMinus className="text-xl text-gray-600" />
                ) : (
                  <FiPlus className="text-xl text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-md leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
