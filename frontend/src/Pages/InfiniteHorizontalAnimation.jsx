import React, { useEffect } from "react";
import "../InfiniteHorizontalAnimation.css";

const App = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {/* 👇 First scroller - moves LEFT */}
      <div className="scroller" data-direction="left" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>WE</li>
          <li>CREATE</li>
          <li>WHAT</li>
          <li>YOU</li>
          <li>LOVE</li>
          <li>THE</li>
          <li>MOST</li>
        </ul>
      </div>

      {/* 👇 Second scroller - moves RIGHT */}
      <div className="scroller" data-direction="right" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>WE</li>
          <li>CREATE</li>
          <li>WHAT</li>
          <li>YOU</li>
          <li>LOVE</li>
          <li>THE</li>
          <li>MOST</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
