import React from "react";
import { Link } from "react-router-dom";

export default function CalypsoButton() {
  const buttonClass = `
    cursor-pointer font-bold border-none py-[10px] px-4 m-0 
    text-[inherit] relative inline-block overflow-hidden 
    text-[0.89rem] rounded-[0.85rem] text-white
  `;
  const buttonSpanClass = `block relative mix-blend-difference z-10`;

  return (
    <>
      <style>
        {`
          /* Base button styles */
          .button {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }

          /* Pseudo-elements for animated circle */
          .button::before {
            content: "";
            position: absolute;
            background: #000;
            width: 140%;
            height: 140%;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1),
                        opacity 0.3s ease;
            z-index: 0;
          }

          .button:hover::before {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }

          /* Text animation */
          .button:hover span {
            animation: MoveScaleUpInitial 0.3s forwards,
                       MoveScaleUpEnd 0.3s forwards 0.3s;
          }

          @keyframes MoveScaleUpInitial {
            to {
              transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
              opacity: 0;
            }
          }

          @keyframes MoveScaleUpEnd {
            from {
              transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
              opacity: 0;
            }
            to {
              transform: translate3d(0, 0, 0);
              opacity: 1;
            }
          }

          /* ✅ Responsive font adjustments */
          @media (max-width: 768px) {
            .button {
              font-size: 0.8rem;
              padding: 8px 0.7rem;
              margin: 4px 0;
            }
            .button span {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <div className="flex flex-wrap justify-center gap-3">





            <Link  to="/#solutions" className={`button ${buttonClass}`}>
              <span className={buttonSpanClass}>Solutions</span>
            </Link>
            <Link to='/about'
              onClick={(e) => {
    e.preventDefault();       // stop default navigation
    sessionStorage.setItem("forceReload", "true");
    window.location.href = "/about"; // full reload BEFORE React mounts
  }}
            className={`button ${buttonClass}`}>
              <span className={buttonSpanClass}>About us</span>
            </Link>
            <Link to='/faqs' className={`button ${buttonClass}`}>
              <span className={buttonSpanClass}>FAQs</span>
            </Link>
            <Link  to='/content-intellegence' className={`button ${buttonClass}`}>
              <span className={buttonSpanClass}>Content Intellegence</span>
            </Link>
      </div>
    </>
  );
}
