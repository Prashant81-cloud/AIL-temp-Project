import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlipPages() {
  const cardsContainerRef = useRef(null);
  const cardInnersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardInnersRef.current.includes(el)) {
      cardInnersRef.current.push(el);
    }
  };

  const ArrowIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

  const cardData = [
    { id: 2, title: "Luminary",smallHeading:"Dreams bloom softly beneath the moonlight",cardNumber: '01', content: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed erat a ante venenatis dapibus posuere.", bgColor: "bg-[#FCB8FA]" },
    { id: 3, title: "Ethereal",smallHeading:"Courage awakens when hope feels lost",cardNumber: '02', content: "Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor .", bgColor: "bg-[#34C791]" },
    { id: 4, title: "Harmony",smallHeading:"Silence spoke louder than her words", cardNumber: '03',content: "Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh ut fermentum massa justo sit amet nibh ut fermentum massa justo sit amet.", bgColor: "bg-[#0E8DFF]" },
    { id: 5, title: "Valor",smallHeading:"Waves kissed the shore with rhythm",cardNumber: '04', content: "Cras justo odio dapibus ac facilisis in egestas eget quam. Sed posuere consectetur est at lobortis nibh ut fermentum massa justo sit amet.", bgColor: "bg-[#FA5325]" },
    { id: 6, title: "Radiance",smallHeading:"Time dances gently through forgotten memories",cardNumber: '05', content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit nibh ut fermentum massa justo .", bgColor: "bg-[#A91C60]" },
    { id: 7, title: "Prosperity",smallHeading:"Light conquers darkness with quiet grace",cardNumber: '06', content: "Praesent commodo cursus magna vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Integer posuere erat nibh ut fermentum massa justo .", bgColor: "bg-[#E9D5B7]" },
    { id: 1, title:"Serenity",smallHeading:"The stars whispered secrets at midnight", cardNumber: '07', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere nibh ut fermentum massa justo sit amet.", bgColor: "bg-[#FFFFFF]",  }
  ];

useEffect(() => {
  if (!cardsContainerRef.current || cardInnersRef.current.length === 0) return;

  const cards = cardsContainerRef.current.children;
  const cardInners = cardInnersRef.current;
  const numCards = cardInners.length;

  cardInners.forEach((cardInner, index) => {
    const card = cards[index];
    if (!card) return;

    // ✅ Initially set stacking (first card at bottom, last at top)
    gsap.set(card, { zIndex: index });
    gsap.set(cardInner, { rotation: 0, autoAlpha: 1 });

    const nextCard = cards[index + 1];
    if (!nextCard) return;

    ScrollTrigger.create({
      trigger: nextCard,
      start: "top 75%",
      end: "top 25%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // ✅ Apply tilt + fade to the current card
        gsap.to(cardInner, {
          rotation: gsap.utils.interpolate(0, 5*(index*0.3), progress),
          autoAlpha: gsap.utils.interpolate(1, 0.99, progress),
          overwrite: true,
        });

        // ✅ Bring the next card above dynamically
        gsap.set(nextCard, { zIndex: index + numCards });
      },
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    cardInners.forEach((inner) => gsap.killTweensOf(inner));
  };
}, [cardData.length]);


  return (
    <>
      <div className="h-1/4 flex items-center justify-center font-sans">
        <h1 className="text-4xl md:text-6xl font-bold text-center p-4">
           <br /> 
        </h1>
      </div>

      <div ref={cardsContainerRef} className="cards relative w-[100vw]">
        {cardData.map((card) => (
          <div key={card.id} className="card h-[90vh] sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto ${card.bgColor} rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>

        <span className={`absolute z-0 text-9xl font-extrabold ${card.bgColor === "bg-[#FFFFFF]" ? "text-[#EAE4D8]" : "text-white"} opacity-20 top-4 right-12`}>
          {card.cardNumber}        
        </span>
        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">
            <span className={`${card.bgColor === "bg-[#FFFFFF]" ? "bg-[#EAE4D8]" : "bg-white"} inline-block px-4 py-1 text-lg font-semibold  rounded-lg text-black`}>
              LoremIpsum
            </span>
             <h1 className="mt-4 text-6xl font-bold text-black md:text-7xl lg:text-8xl">
              {card.title}
             </h1>

          </div>
        <div className="flex items-center justify-between">
        <div className="mt-55">
          <h1 className="text-2xl font-medium text-black">{card.smallHeading}</h1>
          <p className="w-100 mt-4 text-lg">{card.content}</p>
              <button className="flex items-center gap-3 px-6 py-3 mt-4 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                <span>Lorem ipsum dolor</span>
                <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                  <ArrowIcon />
                </span>
              </button>

        </div>
        <div>
             <div className="p-2 bg-white rounded-3xl shadow-2xl transform rotate-3">
               <img 
                 src="https://placehold.co/350x450/4A5568/FFFFFF?text= Sample Video" 
                 alt="Man on the phone" 
                 className="rounded-2xl w-65 h-auto"
               />
             </div>
        </div>
        </div>
        </div>

            </div>
          </div>
        ))}
      </div>

      <div className="h-1/4 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold"></h1>
      </div>
    </>
  );
}

export default FlipPages;

