import React from 'react';

// This is the main component that renders your button and its styles.
export default function App() {
  return (
    <>

      <style>
        {`
          /* Added styles for centering and background */

          /* --- Your CSS from here --- */

          /* Base button styles */
          .button {
            pointer-events: auto;
            cursor: pointer;
            font-weight:bold;
            border: none;
            padding: 10px 1rem;
            margin: 0;
            font-size: inherit;
            position: relative;
            display: inline-block;
          }

          .button::before,
          .button::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          /* Specific styles for "Export File" button */
          .button--calypso {
            overflow: hidden;
            font-size: 0.89rem;
            border-radius: 0.85rem;
            color: #fff;
          }

          .button--calypso span {
            display: block;
            position: relative;
            mix-blend-mode: difference;
            z-index: 10;
          }

          .button--calypso:hover span {
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

          .button--calypso::before {
            content: "";
            background: #000;
            width: 120%;
            height: 0;
            padding-bottom: 120%;
            top: -110%;
            left: -10%;
            border-radius: 50%;
            transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);
          }

          .button--calypso:hover::before {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
            transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
          }

          .button--calypso::after {
            content: "";
            background: #000;
            transform: translate3d(0, -100%, 0);
            transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
          }

          .button--calypso:hover::after {
            transform: translate3d(0, 0, 0);
            transition-duration: 0.05s;
            transition-delay: 0.4s;
            transition-timing-function: linear;
          }
        `}
      </style>

      {/* This is your HTML, converted to JSX.
        (The only change is 'class' becomes 'className')
      */}

      <button className="button button--calypso">
        <span>Solutions</span>
      </button>
      <button className="button button--calypso">
        <span>Upcoming Series</span>
      </button>
      <button className="button button--calypso">
        <span>About Us</span>
      </button>
      <button className="button button--calypso">
        <span>Workss</span>
      </button>

    </>
  );
}