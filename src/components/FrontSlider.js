import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Frontslider.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export function Frontslider() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          color: "black",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/frontSlider1.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/frontSlider2.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/frontSlider3.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/frontSlider4.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/frontSlider5.gif" />
        </SwiperSlide>
      </Swiper>

      <div className="strength">
        <div data-aos="flip-right">
          <img src="./images/warrentty.svg" />
          <span>
            {" "}
            <span style={{ fontWeight: "bold", color: " rgb(255, 35, 72)" }}>
              Warrenty
            </span>{" "}
            Product
          </span>
        </div>
        <div data-aos="flip-right">
          <img src="./images/replacement.svg" />
          <span>
            {" "}
            <span style={{ fontWeight: "bold", color: " rgb(255, 35, 72)" }}>
              Replacement
            </span>{" "}
            Product
          </span>
        </div>
        <div data-aos="flip-right">
          <img src="./images/delivery.svg" />
          <span>
            Best{" "}
            <span style={{ fontWeight: "bold", color: "rgb(255, 35, 72)" }}>
              {" "}
              Dilvery
            </span>
          </span>
        </div>
        <div data-aos="flip-right">
          <img src="./images/gstbill.svg" />
          <span>
            {" "}
            <span style={{ fontWeight: "bold", color: " rgb(255, 35, 72)" }}>
              GST
            </span>{" "}
            Bill
          </span>
        </div>
      </div>

      <div className="saleImg">
        <img src="https://cdn.prod.website-files.com/5f46c318c843828732a6f8e2/6515301c7292ae4c08c05f63_Image-Advertising.webp" />
      </div>
    </>
  );
}
