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
import { Link } from "react-router-dom";

export function BestSellerCard() {
  const bestseller = [
    {
      name: "Full Upper Set",
      price: "30",
      fakeprice: "50",
      rating: 4.5,
      url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Western Dress",
      price: "20",
      fakeprice: "40",
      rating: 4.1,
      url: "https://img.freepik.com/free-photo/close-up-portrait-elegant-pretty-brunette-woman-stylish-vintage-hat-blue-navy-dress_291049-1132.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Girl Dress",
      price: "16",
      fakeprice: "21",
      rating: 3.8,
      url: "https://img.freepik.com/free-photo/stunning-girl-with-wavy-hair-posing-purple-wall-with-surprised-face-expression-indoor-portrait-good-humoured-lady-red-dress-straw-hat_197531-15774.jpg?t=st=1723197377~exp=1723200977~hmac=97104793df81359bb3f74c761ff558f16ebc4253fc387ba53f996c9599f77a54&w=900",
    },
    {
      name: " Sport Wear",
      price: "22",
      fakeprice: "31",
      rating: 4.7,
      url: "https://img.freepik.com/free-photo/blond-man-with-hat-brown-background_23-2148316524.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
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
          <Link to="/cloth">
            <a href="#">See more</a>
          </Link>
        </div>
        <div className="cardrow">
          {bestseller.map((item, index) => (
            <div className="card" data-aos="fade-zoom-in" data-aos-once="true">
              <div className="cardImg">
                <img src={item.url} className="mainimg" />
                <img src={bestSeller} className="bestseller" />
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
            <div
              className="categ-card"
              key={i}
              data-aos="fade-zoom-in"
              data-aos-once="true"
            >
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
              data-aos-once="true"
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
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    transition: " all ease-in-out 0.35s",
                  }}
                  src={item.url}
                  className="pickImg"
                />
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
    </>
  );
}
