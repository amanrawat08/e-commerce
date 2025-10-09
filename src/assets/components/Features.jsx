import data from "../../data/productdata";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {   FaCartPlus } from "react-icons/fa";
export default function Features() {
  const settings = {
    dots: false, // shows dots
    infinite: true, // loop slides
    speed: 500, // transition speed
    slidesToShow: 4, // number of slides visible
    slidesToScroll: 1, // number of slides per scroll
    autoplay: false, // auto play
    autoplaySpeed: 2000, // 2 sec delay
    arrows: false,
  };


  
  const [currentCategory, setCurrentCategory] = useState(null);
  const categories = [...new Set(data.map((p) => p.category))];
  useEffect(() => {
    console.log(`Current category: ${currentCategory}`);
  }, [currentCategory]);

  return (
    <section className="features">
      <div className="container">
        <div className="head-features d-flex align-items-center justify-content-between pb-3">
          <h4 className="title-heading">Features</h4>
          <ul className="d-flex align-items-center justify-content-center gap-3 categories list-unstyled cursor-pointer">
            {categories.map((c, i) => (
              <li
                key={i}
                onClick={(e) => setCurrentCategory(c)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <Slider {...settings}>
          {
            data.filter(p=>!currentCategory || p.category === currentCategory).map((item) => (
            <div className="feature-item text-center" key={item.id}>
              {console.log("inside : " + currentCategory)}
              <div className="img-feature"> 
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <h6 className="title-feature">{item.title}</h6>
              <p className="price-feature">${item.price}</p>
              <button className="btn-addcart d-flex align-items-center justify-content-center gap-2">
                <FaCartPlus /> Add to cart
              </button>
            </div>
          ))
          }
        </Slider>
         
      </div>
    </section>
  );
}
