// Slider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://sereneworld.in/uploads/banner/1754890430_bakuuu.jpeg",
  "https://sereneworld.in/uploads/banner/1754890350_geo.jpeg", 
];


const Hero = () => {
  const settings = {
    dots: false,             // shows dots
    infinite: true,         // loop slides
    speed: 500,             // transition speed
    slidesToShow: 1,        // number of slides visible
    slidesToScroll: 1,      // number of slides per scroll
    autoplay: true,         // auto play
    autoplaySpeed: 2000,    // 2 sec delay
    arrows: false,           // next/prev arrows
  };

  return (
    <div className="     hero-slider">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}  style={{objectFit:'contain'}}>
            <img src={img} alt={`slide-${i}`} className="  w-full "  style={{objectFit:'contain'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
