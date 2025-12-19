import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { useInView } from "react-intersection-observer";


gsap.registerPlugin(ScrollTrigger);

function FlipPages() {
  const cardsContainerRef = useRef(null);
  const cardInnersRef = useRef([]);

  const RBvid = 'https://ail-media.b-cdn.net/rb.mp4';
  const BOT1vid = 'https://ail-media.b-cdn.net/bot1.mp4';
  const TBCvid = 'https://ail-media.b-cdn.net/fk_gif.mp4';
  const GOGvid = 'https://ail-media.b-cdn.net/gog.mp4';
  const SFvid = 'https://ail-media.b-cdn.net/sf.mp4';
  const BOT2vid = 'https://ail-media.b-cdn.net/bot2.mp4';
  const BOT3vid = 'https://ail-media.b-cdn.net/bot3.mp4';




  const RBimg = 'https://ail-media.b-cdn.net/RB.png';
  const BOTs1img = 'https://ail-media.b-cdn.net/BOTs1.png';
  const TBCimg = 'https://ail-media.b-cdn.net/TBClg.png';
  const GOGimg = 'https://ail-media.b-cdn.net/GOG.png';
  const SFimg = 'https://ail-media.b-cdn.net/SFlg.png';
  const BOTs2img = 'https://ail-media.b-cdn.net/BOTs2.png';
  const BOTs3img = 'https://ail-media.b-cdn.net/BOTs3.png';


  {/*

    
    
    

    
    
    */}



const [rbLoaded, setRbLoaded] = useState(false);
const [rbLoadedMobile, setRbLoadedMobile] = useState(false);

const [bot1Loaded, setBot1Loaded] = useState(false);
const [bot1LoadedMobile, setBot1LoadedMobile] = useState(false);

const [tbcLoaded, setTbcLoaded] = useState(false);
const [tbcLoadedMobile, setTbcLoadedMobile] = useState(false);

const [gogLoaded, setGogLoaded] = useState(false);
const [gogLoadedMobile, setGogLoadedMobile] = useState(false);

const [bot2Loaded, setBot2Loaded] = useState(false);
const [bot2LoadedMobile, setBot2LoadedMobile] = useState(false);

const [sfLoaded, setSfLoaded] = useState(false);
const [sfLoadedMobile, setSfLoadedMobile] = useState(false);

const [bot3Loaded, setBot3Loaded] = useState(false);
const [bot3LoadedMobile, setBot3LoadedMobile] = useState(false);



const { ref: rbRef, inView: rbInView } = useInView({ triggerOnce: true });
const { ref: rbRefMobile, inView: rbInViewMobile } = useInView({ triggerOnce: true });

const { ref: bot1Ref, inView: bot1InView } = useInView({ triggerOnce: true });
const { ref: bot1RefMobile, inView: bot1InViewMobile } = useInView({ triggerOnce: true });

const { ref: tbcRef, inView: tbcInView } = useInView({ triggerOnce: true });
const { ref: tbcRefMobile, inView: tbcInViewMobile } = useInView({ triggerOnce: true });

const { ref: gogRef, inView: gogInView } = useInView({ triggerOnce: true });
const { ref: gogRefMobile, inView: gogInViewMobile } = useInView({ triggerOnce: true });

const { ref: bot2Ref, inView: bot2InView } = useInView({ triggerOnce: true });
const { ref: bot2RefMobile, inView: bot2InViewMobile } = useInView({ triggerOnce: true });

const { ref: sfRef, inView: sfInView } = useInView({ triggerOnce: true });
const { ref: sfRefMobile, inView: sfInViewMobile } = useInView({ triggerOnce: true });

const { ref: bot3Ref, inView: bot3InView } = useInView({ triggerOnce: true });
const { ref: bot3RefMobile, inView: bot3InViewMobile } = useInView({ triggerOnce: true });


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

      //  bg-[#FA5325]           bg-[#A91C60]               bg-[#]

  const cardData = [
    { id: 2, title: "Brands of Tomorrow Season 3",smallHeading:"Dreams bloom softly beneath the moonlight",cardNumber: '01', content: "The third season of Brands of Tomorrow brings 21 breakthrough Indian brands — from D2C to healthcare — telling stories of innovation and impact in a rapidly changing world.", bgColor: "bg-[#FCB8FA]" },
    { id: 3, title: "Rising Bharat",smallHeading:"Courage awakens when hope feels lost",cardNumber: '02', content: "A first-time-in-India series spotlighting generational legacy businesses—the backbone of India’s economy—celebrating visionary leaders redefining industries with innovation, resilience, and bold transformation shaping the nation’s global rise.", bgColor: "bg-[#34C791]" },
    { id: 4, title: "The Bharat Chapters ",smallHeading:"Silence spoke louder than her words", cardNumber: '03',content: "The Bharat Chapter captures how digital transformation is reshaping lives across eight diverse Indian cities, with powerful personal journeys—especially of women—at its heart. Through grounded, human-centric storytelling, it highlights how ecommerce and the internet have quietly enabled upward mobility by empowering individuals and households with access and opportunity", bgColor: "bg-[#0E8DFF]" },
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
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // ✅ Apply tilt + fade to the current card
        gsap.to(cardInner, {
          rotation: gsap.utils.interpolate(0, 5*(index*0.13), progress),
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
      <div className=" flex items-center justify-center font-sans ">
        <h1 className="text-4xl md:text-6xl font-bold text-center p-4">
           <br /> 
        </h1>
      </div>

      <div ref={cardsContainerRef} className="cards relative w-[100vw] bg-[#FAF4EC]">

{/*Page-1 */}
<a href="https://www.hotstar.com/in/shows/rising-bharat/1271450329" target="_blank">
          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#B51674] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl invisible md:text-7xl lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          01       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={RBimg} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="aspect-[3/3.8] p-1 w-35 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               ref={rbRefMobile} 
poster="https://ail-media.b-cdn.net/posterRB.png"
               preload="metadata"
                src={rbInViewMobile ? RBvid : undefined}
                autoPlay
                loop
                muted
                playsInline 
                className="rounded-2xl "
      onLoadedData={() => setRbLoadedMobile(true)}
      
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">A first-time-in-India series spotlighting generational legacy businesses—the backbone of India’s economy—celebrating visionary leaders redefining industries with innovation, resilience, and bold transformation shaping the nation’s global rise. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">A first-time-in-India series spotlighting generational legacy businesses—the backbone of India’s economy—celebrating visionary leaders redefining industries with innovation, resilience, and bold transformation shaping the nation’s global rise. </p>


                       <div className="aspect-[3/3.8] p-1 w-35 sm:w-40 md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               ref={rbRef} 

               preload="metadata"
poster="https://ail-media.b-cdn.net/posterRB.png"
                src={rbInView ? RBvid : undefined}
                autoPlay
                loop
                muted
                playsInline 
                className="rounded-2xl w-full h-full object-cover"
                onLoadedData={() => setRbLoaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>




{/*Page-2 */}
<a href="https://www.hotstar.com/in/shows/brands-of-tomorrow/1260147774" target="_blank">

          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#445066] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl md:text-7xl invisible lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          02       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={BOTs1img} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="aspect-[3/3.8] p-1 w-35 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterBOT1.png"
               ref={bot1RefMobile} 
               preload="metadata"
                 src={bot1InViewMobile ? BOT1vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot1LoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">A first-time-in-India series spotlighting generational legacy businesses—the backbone of India’s economy—celebrating visionary leaders redefining industries with innovation, resilience, and bold transformation shaping the nation’s global rise. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">A first-time-in-India series spotlighting generational legacy businesses—the backbone of India’s economy—celebrating visionary leaders redefining industries with innovation, resilience, and bold transformation shaping the nation’s global rise. </p>


                       <div className="p-1 aspect-[3/3.8] w-35 sm:w-40 md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterBOT1.png"
ref={bot1Ref} 
               preload="metadata"
                 src={bot1InView ? BOT1vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot1Loaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>






{/*Page-5 */}
<a href="https://www.hotstar.com/in/shows/brands-of-tomorrow/1260147774" target="_blank">
          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#4E677A] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl md:text-7xl invisible lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          05       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={BOTs2img} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="p-1 w-35 h-auto aspect-[3/3.8] bg-white rounded-3xl shadow-2xl transform rotate-5">
               <video
               poster="https://ail-media.b-cdn.net/posterBOT2.png"
               ref={bot2RefMobile} 
               preload="metadata"
                 src={bot2InViewMobile ? BOT2vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot2LoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">The docuseries showcases the stories of 14 innovative Indian brands, including Wow Momo, Digiyatra, Aimee, Koparo and more. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">The docuseries showcases the stories of 14 innovative Indian brands, including Wow Momo, Digiyatra, Aimee, Koparo and more. </p>


                       <div className="p-1 w-35 sm:w-40 aspect-[3/3.8] md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterBOT2.png"
               ref={bot2Ref} 
               preload="metadata"
                 src={bot2InView ? BOT2vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot2Loaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>




{/*Page-6 */}
<a href="#" target="_blank">
          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#0E8DFF] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl md:text-7xl invisible lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          06       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={SFimg} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="p-1 w-35 h-auto aspect-[3/3.8] bg-white rounded-3xl shadow-2xl transform rotate-5">
               <video
               poster="https://ail-media.b-cdn.net/posterSF.png"
               ref={sfRefMobile} 
               preload="metadata"
                 src={sfInViewMobile ? SFvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setSfLoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">The docuseries showcases the stories of 14 innovative Indian brands, including Wow Momo, Digiyatra, Aimee, Koparo and more. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">The docuseries showcases the stories of 14 innovative Indian brands, including Wow Momo, Digiyatra, Aimee, Koparo and more. </p>


                       <div className="p-1 w-35 sm:w-40 aspect-[3/3.8] md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">
               <video
               poster="https://ail-media.b-cdn.net/posterSF.png"
               ref={sfRef} 
               preload="metadata"
                 src={sfInView ? SFvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setSfLoaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Coming soon</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>




{/*Page-7 */}
<a href="https://www.hotstar.com/in/shows/brands-of-tomorrow/1260147774" target="_blank">
          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#BE2D1C] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl invisible md:text-7xl lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          07       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={BOTs3img} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="p-1 w-35 h-auto aspect-[3/3.8] bg-white rounded-3xl shadow-2xl transform rotate-5">
               <video
               poster="https://ail-media.b-cdn.net/posterBOT3.png"
               ref={bot3RefMobile} 
               preload="metadata"
                 src={bot3InViewMobile ? BOT3vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot3LoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">The third season of Brands of Tomorrow brings 21 breakthrough Indian brands — from D2C to healthcare — telling stories of innovation and impact in a rapidly changing world. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">The third season of Brands of Tomorrow brings 21 breakthrough Indian brands — from D2C to healthcare — telling stories of innovation and impact in a rapidly changing world. </p>


                       <div className="p-1 w-35 sm:w-40 md:w-45 aspect-[3/3.8] lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterBOT3.png"
               ref={bot3Ref} 
               preload="metadata"
                 src={bot3InView ? BOT3vid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setBot3Loaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>


{/*Page-3 */}
<a href="https://www.hotstar.com/in/shows/the-bharat-chapters/1271450302" target="_blank">

          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#0E296B] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl md:text-7xl invisible lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          03       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={TBCimg} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="p-1 w-35 aspect-[3/3.8] h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterTBC.png"
               ref={tbcRefMobile} 
               preload="metadata"
                 src={tbcInViewMobile ? TBCvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setTbcLoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">The Bharat Chapter captures how digital transformation is reshaping lives across eight diverse Indian cities, with powerful personal journeys—especially of women—at its heart. Through grounded, human-centric storytelling, it highlights how ecommerce and the internet have quietly enabled upward mobility by empowering individuals and households with access and opportunity. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">The Bharat Chapter captures how digital transformation is reshaping lives across eight diverse Indian cities, with powerful personal journeys—especially of women—at its heart. Through grounded, human-centric storytelling, it highlights how ecommerce and the internet have quietly enabled upward mobility by empowering individuals and households with access and opportunity. </p>


                       <div className="p-1 w-35 aspect-[3/3.8] sm:w-40 md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterTBC.png"
               ref={tbcRef} 
               preload="metadata"
                 src={tbcInView ? TBCvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setTbcLoaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>



{/*Page-4 */}
<a href="https://www.youtube.com/watch?v=bnN8sPUKDN8" target="_blank">
          <div  className="card h-auto sm:h-auto md:h-auto lg:h-[90vh] [@media(max-height:800px)]:h-auto  sticky top-[1vh] p-4 md:p-8 flex flex-col  ">
            <div ref={addToRefs}  className={`card__inner relative  w-full h-full max-w-7xl mx-auto  bg-[#C1C0C0] rounded-3xl  p-8  overflow-hidden md:p-12 shadow-xl`}>
<div className="flex items-start justify-between">

            <span className={` inline-block px-4 py-1 lg:text-lg font-semibold text-sm sm:text-base bg-white rounded-lg text-black`}>
              Hall of Fame
            </span>

        <span className={`text-5xl sm:text-6xl md:text-7xl invisible lg:text-9xl font-extrabold  "text-white" opacity-20 `}>
          04       
        </span>


            
</div>

        <div className="relative z-10  md:flex-row ">
          <div className="w-full md:w-1/2">

             <div className=" text-6xl font-bold text-black md:text-7xl lg:text-6xl lg:-mt-15">
              <img className="rounded-xl  w-40 sm:w-55 md:w-70 lg:w-80  " src={GOGimg} alt="" />
             </div>

          </div>
        <div className=" ">
        <div className="sm:hidden block flex flex-col ">

                       <div className="p-1 w-35 aspect-[3/3.8] h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterGOG.png"
               ref={gogRefMobile} 
               preload="metadata"
                 src={gogInViewMobile ? GOGvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setGogLoadedMobile(true)}
               />
             </div>

          <p className="   font-normal text-[1rem] text-white mt-10">"Gods of Gourmet" explores India's fine-dining scene, showcasing its top chefs, innovative dishes, and prestigious restaurants. The show focuses on how India is evolving in the global culinary landscape, blending traditional and modern influences. It features a variety of restaurants across India, celebrating the passion and dedication behind creating exquisite food. </p>






        </div>

        <div className="hidden sm:flex items-center justify-between ">



          <p className=" sm:w-90 md:w-100  lg:w-130 font-normal text-[1rem] md:text-[1.2rem] text-white ">"Gods of Gourmet" explores India's fine-dining scene, showcasing its top chefs, innovative dishes, and prestigious restaurants. The show focuses on how India is evolving in the global culinary landscape, blending traditional and modern influences. It features a variety of restaurants across India, celebrating the passion and dedication behind creating exquisite food. </p>


                       <div className="p-1 w-35 sm:w-40 aspect-[3/3.8] md:w-45 lg:w-60 h-auto bg-white rounded-3xl shadow-2xl transform rotate-5">

               <video
               poster="https://ail-media.b-cdn.net/posterGOG.png"
               ref={gogRef} 
               preload="metadata"
                 src={gogInView ? GOGvid : undefined}
                         autoPlay
        loop
        muted
        playsInline 
                 className="rounded-2xl "
      onLoadedData={() => setGogLoaded(true)}
               />
             </div>



        </div>

        <div>
<p
  className="watchNowBtn w-fit text-sm flex items-center mt-4 lg:-mt-4 gap-3 px-3 py-2 font-semibold text-black transition bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"

>
  <span>Watch now</span>
  <span className="flex items-center justify-center  w-6 h-6 bg-black rounded-full">
    <ArrowIcon />
  </span>
</p>
        </div>
        </div>
        </div>

            </div>
          </div>
</a>

      </div>


      <div className="h-1/4 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold"></h1>
      </div>
    </>
  );
}

export default FlipPages;

