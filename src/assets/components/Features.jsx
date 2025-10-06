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
                onClick={(e) => {
                  setCurrentCategory(e.target.innerText);
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <Slider {...settings}>
          {data
            .filter((p) =>
              currentCategory ? p.category === currentCategory : true
            )
            .map((p, i) => (
              <div key={i} className=" p-2 ">
                <div
                  className="card h-100 text-start p-relative " 
                >
                    <button className="btn-cart position-absolute  ">
                        <FaCartPlus size={20}  />
                    </button>
                  <img src={p.thumbnail} alt="" />
                  <br />
                   
                    {p.title && <h5 className="card-title">{p.title}</h5>}
                  
                  <div className="rating d-flex align-items-center gap-1">
                    <span>Rating:</span>
                    {
                        p.rating && <span>{p.rating} &#9733;</span>
                    }
                  </div>
                  <div>
                    <span className="discription">
                        {p.description && p.description.slice(0, 50) + "..."}
                    </span> 
                    <div className="price">${p.price}</div>
                    
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <ul className="d-none">
          {data
            .filter((p) =>
              currentCategory ? p.category === currentCategory : true
            )
            .map((p, i) => (
              <li key={i}>
                {p.title} - {p.category}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
