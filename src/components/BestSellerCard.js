import React from "react";
import "./bestseller.css";
import bestSeller from "../asserts/bestSeller/best-seller.png";
import ranking from "../asserts/bestSeller/ranking.png";
import Aos from "aos";
import "aos/dist/aos.css";
import headphone from "../asserts/video/headphone.mp4";
import tshirt from "../asserts/video/tshirt.mp4";
import phone from "../asserts/video/phone.mp4";
import watch from "../asserts/video/watch.mp4";

export function BestSellerCard() {
  const bestseller = [
    {
      name: "Full Upper Set",
      price: "30",
      fakeprice: "50",
      rating: 4.5,
      url: "https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg",
    },
    {
      name: "Western Dress",
      price: "20",
      fakeprice: "40",
      rating: 4.1,
      url: "https://thecommense.com/cdn/shop/files/B1712562667256_6223d62b-592d-4484-83b6-190951a5d7c9_360x.jpg?v=1720662375",
    },
    {
      name: "Girl Dress",
      price: "16",
      fakeprice: "21",
      rating: 3.8,
      url: "https://tse3.mm.bing.net/th?id=OIP.I2VTQxUG9r6h3AxJlOXudQHaHa&pid=Api&P=0&h=220",
    },
    {
      name: " Sport Wear",
      price: "22",
      fakeprice: "31",
      rating: 4.7,
      url: "https://i.pinimg.com/originals/bd/68/31/bd683109c8a45507a2181226cc45e3b2.jpg",
    },
  ];
  const category = [
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.HXI_b7CNjaV5jN5oAIB6vAHaDq&pid=Api&P=0&h=220",
      name: "Electonic",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.mzi0Aw8Vd7zabN7wIODQawHaEz&pid=Api&P=0&h=220",
      name: "Fashion",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.B4kQCMDh6R-_TaJSfEE8owHaFE&pid=Api&P=0&h=220",
      name: "Beauty",
    },
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.XEMgNkht3YLAhTanf8AsqwAAAA&pid=Api&P=0&h=220",
      name: "Home & Kitchen ",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.NzIcrd89otogRr6r-_wbmgHaGW&pid=Api&P=0&h=220",
      name: "Medicines",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.GRczwZ9dd82ZoNHtNXh1ewHaEn&pid=Api&P=0&h=220",
      name: "Sports & Outdoor",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.ogXTlmouuyV54ZxoMVESgwHaHZ&pid=Api&P=0&h=220",
      name: "Toys & Games",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.bDvr3C-T94W4bdmwzXYPpgHaJk&pid=Api&P=0&h=220",
      name: "Books & Stationery",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.Q5Gs2t5B1hOnfIY8pPcMQAHaHa&pid=Api&P=0&h=220",
      name: "Grocery  Foods",
    },
  ];
  const videos = [
    {
      url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Zenith.jpg?v=1716362490",
      videoUrl: headphone,
      name: "Headphone",
    },
    {
      url: "https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoUrl: tshirt,
      name: "Clothes",
    },
    {
      url: "https://wallpaperaccess.com/full/5439193.jpg",
      videoUrl: watch,
      name: "Watch",
    },
    {
      url: "https://c0.wallpaperflare.com/preview/471/747/721/space-black-apple-watch-over-black-iphone-x.jpg",
      videoUrl: phone,
      name: "Smart Phone",
    },
  ];

  const toppick = [
    {
      url: "https://images.pexels.com/photos/7262898/pexels-photo-7262898.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Grocery Bucket",
      price: "250",
      pricefake: "360",
      discount: "30",
    },
    {
      url: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Uttarakhand Travel Package",
      price: "5000",
      pricefake: "7860",
      discount: "50",
    },
    {
      url: "https://www.wallpaperflare.com/static/755/878/451/sofa-%C2%A0-style-chair-walls-wallpaper.jpg",
      name: "Furniture",
      price: "3000",
      pricefake: "5000",
      discount: "40",
    },
    {
      url: "https://wallpaperaccess.com/full/829212.jpg",
      name: "Telivision",
      price: "2500",
      pricefake: "3000",
      discount: "10",
    },
  ];
  return (
    <>
      <div className="CardOuter">
        <div className="sellerheading">
          <div>
            {" "}
            <span>Best</span> Seller
          </div>
          <a href="#">See more</a>
        </div>
        <div className="cardrow">
          {/* <div className="card">
          <div className="cardImg">
            <img src={image1} className="mainimg" alt="tshirt" />
            <img src={bestSeller} className="bestseller" alt="tshirt" />
            <i className="fa fa-heart-o"></i>
          </div>
          <div className="carditem">
            <div className="namePart">
              <span className="itemname" style={{ fontSize: "28px" }}>
                T-shirt
              </span>
              <div>
                <span
                  className="itemprice"
                  style={{ fontSize: "25px", color: "red", fontWeight: "bold" }}
                >
                  $30
                </span>
                <span
                  className="itempriceD"
                  style={{
                    fontSize: "15px",
                    textDecoration: "line-through",
                    color: "grey",
                    marginLeft: "10px",
                  }}
                >
                  $50
                </span>
              </div>
            </div>
            <div className="colorsection">
              <div className="selectColor">
                <span style={{ border: "3px solid red" }}>C</span>
                <span style={{ border: "3px solid green" }}>C</span>
                <span style={{ border: "3px solid blue" }}>C</span>
              </div>
              <div className="selectsize">
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
            </div>
            <div className="lastCardpor">
              <div>
                <span
                  className="fa fa-star"
                  style={{
                    marginRight: "3px",
                    color: "gold",
                  }}
                ></span>
                4.5
              </div>
              <div
                className="buy"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                BUY<span>+</span>{" "}
              </div>
            </div>
          </div>
        </div> */}
          {bestseller.map((item, index) => (
            <div className="card" data-aos="fade-zoom-in">
              <div className="cardImg">
                <img src={item.url} className="mainimg" alt="tshirt" />
                <img src={bestSeller} className="bestseller" alt="tshirt" />
                <i className="fa fa-heart-o"></i>
              </div>
              <div className="carditem">
                <div className="namePart">
                  <span className="itemname" style={{ fontSize: "28px" }}>
                    {item.name}
                  </span>
                  <div>
                    <span
                      className="itemprice"
                      style={{
                        fontSize: "25px",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      ${item.price}
                    </span>
                    <span
                      className="itempriceD"
                      style={{
                        fontSize: "15px",
                        textDecoration: "line-through",
                        color: "grey",
                        marginLeft: "10px",
                      }}
                    >
                      ${item.fakeprice}
                    </span>
                  </div>
                </div>
                <div className="colorsection">
                  <div className="selectColor">
                    <span style={{ border: "3px solid red" }}>C</span>
                    <span style={{ border: "3px solid green" }}>C</span>
                    <span style={{ border: "3px solid blue" }}>C</span>
                  </div>
                  <div className="selectsize">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                </div>
                <div className="lastCardpor">
                  <div>
                    <span
                      className="fa fa-star"
                      style={{
                        marginRight: "3px",
                        color: "gold",
                      }}
                    ></span>
                    {item.rating}
                  </div>
                  <div
                    className="buy"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    BUY<span>+</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="categoryitem">
        <div className="categheading">
          <div>
            shop by <span>Categories</span>{" "}
          </div>
        </div>
        <div className="categitem">
          {category.map((categ, i) => (
            <div className="categ-card" key={i} data-aos="fade-zoom-in">
              <img src={categ.url} />
              <span
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {categ.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="exProduct">
        <div className="productHeading">
          <span className="heading">
            Explore <span>Product</span>{" "}
          </span>
          <span>See more</span>
        </div>
        <div className="productRow">
          {videos.map((item, index) => (
            <div
              data-aos="fade-zoom-in"
              style={{
                width: "320px",
                height: "370px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "white",
                margin: "5px",
              }}
            >
              <div
                className="outerimgvideo"
                style={{
                  position: "relative",
                  width: "320px",
                  height: "330px",
                }}
              >
                <img src={item.url} className="outerimg" />

                <video
                  autoPlay
                  muted
                  loop
                  src={item.videoUrl}
                  className="innervideos"
                />
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: "all .35s",
                  cursor: "pointer",
                  marginTop: "2px",
                }}
                className="itemname"
              >
                {item.name}
              </span>
            </div>
          ))}
          .
        </div>
      </div>

      <div className="topPick">
        <div className="productHeading">
          <span className="heading">
            Top Picks <span> for You!!!</span>
          </span>
          <span className="seemore">See more</span>
        </div>
        <div className="pickRow">
          {toppick.map((item, i) => (
            <div className="pickitem" data-aos="fade-zoom-in">
              <img style={{ width: "100%", height: "400px" }} src={item.url} />
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
    </>
  );
}
