import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lastpart.css";
import "./bestseller.css";
import guccu from "../asserts/video/guccu.mp4";
import shoe from "../asserts/video/adverNike.mp4";
import adguchi from "../asserts/video/adverGuchi.mp4";
import perfumeVideo from "../asserts/video/persume2.mp4";
import coca from "../asserts/video/coca.mp4";
function Lastpart() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  function AutoPlay() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  }
  const model = [
    {
      url: "https://img.freepik.com/premium-psd/fashion-new-collection-social-media-instagram-post-template_1022590-22.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/premium-photo/man-stands-front-cloths-store-with-sign-that-says-black-friday_1248371-191.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/free-vector/instagram-post-with-photo_23-2148483323.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/premium-photo/fashion-sales-template-design_639785-87779.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/premium-photo/fashion-sales-template-design_639785-87741.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/premium-photo/beautiful-woman-holding-bottle-shampoo-conditioner-hair-product_1218867-177132.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
  ];

  const toppick = [
    {
      url: "https://images.pexels.com/photos/7262898/pexels-photo-7262898.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: (
        <img
          src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3120.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),
      name: "Nike Shoes",
      price: "2500",
      pricefake: "3600",
      discount: "50",
    },
    {
      url: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: (
        <video
          autoPlay
          muted
          loop
          src={perfumeVideo}
          className="pickImg mediaItem"
          style={{ width: "100%" }}
        ></video>
      ),
      name: "Oscar London Perfume",
      price: "5000",
      pricefake: "7860",
      discount: "50",
    },
    {
      url: "https://www.wallpaperflare.com/static/755/878/451/sofa-%C2%A0-style-chair-walls-wallpaper.jpg",
      tag: (
        <img
          src="https://img.freepik.com/free-photo/typical-brazilian-freezies-still-life_23-2150171664.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Sun Cream Kit",
      price: "3000",
      pricefake: "5000",
      discount: "40",
    },
    {
      url: "https://wallpaperaccess.com/full/829212.jpg",
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/black-orange-speaker-that-says-word-music-it_186938-435.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
  ];

  const videoSlider = [
    {
      url: guccu,
    },
    {
      url: shoe,
    },
    {
      url: adguchi,
    },
    {
      url: perfumeVideo,
    },
    {
      url: coca,
    },
  ];

  return (
    <>
      <div className="OurModel">
        Our <span>Model</span>{" "}
      </div>
      <div className="slider-container ">
        <Slider {...settings} className="sliderItems">
          {model.map((item, index) => (
            <div>
              <img src={item.url} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="topPick" style={{ marginTop: "20px" }}>
        <div className="productHeading">
          <span className="heading">
            Best Of <span>Products </span>
          </span>
          <span className="seemore">See more</span>
        </div>
        <div className="pickRow">
          {toppick.map((item, i) => (
            <div
              className="pickitem"
              data-aos="fade-zoom-in"
              data-aos-once="true"
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  transition: "all ease-in-out 0.35s",
                }}
              >
                {/*  <img
                  style={{
                    width: "100%",
                    height: "400px",
                    transition: " all ease-in-out 0.35s",
                  }}
                  src={item.url}
                  className="pickImg"
                /> */}

                {item.tag}
              </div>

              <div style={{ padding: "3px 8px" }}>
                <span style={{ fontSize: "20px" }}>{item.name}</span>
                <div>
                  <span style={{ fontSize: "28px" }}>&#x20b9;{item.price}</span>
                  <span
                    style={{
                      fontSize: "16px",
                      textDecoration: "line-through",
                      color: "grey",
                      margin: "10px",
                    }}
                  >
                    &#x20b9;{item.pricefake}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: " rgb(255, 35, 72)",
                      fontWeight: "bold",
                    }}
                  >
                    {item.discount}%Off
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <i
                      className="fa fa-star"
                      style={{ color: "gold", marginRight: "7px" }}
                    ></i>
                    Be First to Review
                  </span>
                  <span className="add-to-cart">Add To Card</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hike">
        <div>
          <img
            style={{ borderRadius: "7px", cursor: "pointer" }}
            src="https://img.freepik.com/free-photo/laptop-near-toy-sign-credit-card-supermarket-cart_23-2147949870.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          />
        </div>
        <div className="hikeItem">
          <h1>
            Our <span>Business</span>{" "}
          </h1>
          <div>Lorem ipsum dolor sit amet, consectetur .</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <button>Know More</button>
        </div>
      </div>
      <div
        style={{ textAlign: "center", marginTop: "70px", marginBottom: "30px" }}
        className="OurModel"
      >
        Our <span>Advertisment</span>{" "}
      </div>
      <div
        className="slider-container"
        style={{ width: "90vw", height: "70vh" }}
      >
        <Slider {...settings}>
          {videoSlider.map((item, index) => (
            <div
              style={{ width: "350px" }}
              data-aos="fade-zoom-in"
              data-aos-once="true"
            >
              <video
                style={{
                  objectFit: "contain",
                  width: "350px",
                }}
                autoPlay
                muted
                loop
                src={item.url}
              ></video>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Lastpart;
