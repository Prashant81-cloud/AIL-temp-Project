import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: true,
verticalSwiping: true
  };

  return (
    <div className="slider-container" style={{ width: "150px",  }}>
      <Slider {...settings}>
        <div><h3>.ideas</h3></div>
        <div><h3>.innovation</h3></div>
        <div><h3>.experience</h3></div>
        <div><h3>.thrill</h3></div>
        <div><h3>.action</h3></div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
