import React, { useState } from "react";
import "./buycard.css";
import { useParams } from "react-router-dom";
import Data from "./Data";
import { offers } from "./Data";
export default function BuyCard() {
  const { id } = useParams();

  const filteredData = Data.find((item) => item.id === parseInt(id));
  const smallImg = [
    "https://img.freepik.com/free-photo/front-view-black-sedan-sport-car-bridge_114579-4068.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/3d-car-city-street_23-2150796864.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    ,
    "https://img.freepik.com/free-photo/3d-car-vibrant-city-night_23-2150796972.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    ,
    "https://img.freepik.com/premium-photo/black-car-with-license-plate-number-plate-number-81999_1112033-645.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
  ];
  const [count, setCount] = useState(filteredData.url);

  return (
    <section>
      <div className="imgCard">
        <img src={count} alt="" />
        <div className="smallimg">
          {" "}
          {smallImg.map((item, index) => (
            <img key={index} src={item} onClick={() => setCount(item)} />
          ))}
        </div>
      </div>
      <div className="productInfo">
        <div className="productHead">
          <div
            style={{
              fontSize: "50px",
            }}
          >
            {filteredData.name}
          </div>
          <span>Rating | {filteredData.rating}</span>
        </div>
        <div className="priceName">
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            &#8377;{filteredData.price}
          </div>
          <div style={{ textDecoration: "line-through", margin: "10px" }}>
            &#8377;{filteredData.pricefake}
          </div>
          <div
            style={{
              margin: "8px",
              color: "red",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {filteredData.discount}% Off
          </div>
        </div>
        <div className="description">{filteredData.description}</div>
        <span>Available offers</span>
        <ul
          style={{
            marginTop: "0px",
          }}
        >
          {offers.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <div style={{ marginTop: "30px", fontWeight: "bold", color: "red" }}>
          No Warrentty Available🥹
        </div>
        <div className="btns">
          <button>BUY NOW</button>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div
        className="productAdver"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            height: "300px",
          }}
          src="https://tse1.mm.bing.net/th?id=OIP.x6Y0JVufkwKAM5QDdfIviQHaL3&pid=Api&P=0&h=220"
        />
      </div>
    </section>
  );
}
