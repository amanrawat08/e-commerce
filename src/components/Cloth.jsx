import React from "react";
import "./Cloth.jsx";
import "./bestseller.css";
import perfumeVideo from "../asserts/video/persume2.mp4";
import guccu from "../asserts/video/guccu.mp4";
function Cloth() {
  const toppick = [
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-sunflowers_23-2149705875.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),
      name: "New Tshirt",
      price: "2500",
      pricefake: "3600",
      discount: "50",
    },
    {
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
      tag: (
        <img
          src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17550.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Sun Cream Kit",
      price: "3000",
      pricefake: "5000",
      discount: "40",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/female-purchasing-cloth-store_601128-8935.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/lovely-girl-with-dress-pigtails-hairstyle_23-2148356610.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/fashion-girl-stylish-clothes-colored-wall_86390-1250.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/front-view-covering-with-one-hand-his-eye_23-2148356614.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2300",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <video
          autoPlay
          muted
          loop
          src={guccu}
          className="pickImg mediaItem"
          style={{ width: "100%" }}
        ></video>
      ),

      name: "Speaker",
      price: "7500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/rebel-man-plaid-shirt-posing_171337-19930.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "9500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/man-model-coat-outside_1042628-554010.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/little-girl-yellow-dress-holding-leaf_961875-269239.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/fashionable-man-looking-away_23-2148323598.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/she-has-great-street-style_329181-4716.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45505.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/free-photo/full-shot-beautiful-lady_23-2148440576.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
    {
      tag: (
        <img
          src="https://img.freepik.com/premium-photo/handsome-model-portrait_927851-8900.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          className="pickImg mediaItem"
        />
      ),

      name: "Speaker",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
  ];
  return (
    <div className="topPick" style={{ marginTop: "20px" }}>
      {/*  <div className="productHeading">
        <span className="heading">
          Best Of <span>Products </span>
        </span>
        <span className="seemore">See more</span>
      </div> */}
      <div className="pickRow">
        {toppick.map((item, i) => (
          <div
            className="pickitem"
            data-aos="fade-zoom-in"
            style={{ margin: "14px" }}
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
                <span className="add-to-cart">BUY NOW</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cloth;
