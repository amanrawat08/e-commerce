import React from "react";
import "./Cloth.jsx";
import "./bestseller.css";
import BuyCard from "./BuyCard.jsx";
import Data from "./Data.js";
import { Link, useParams } from "react-router-dom";
function Cloth(props) {
  console.log(Data);
  return (
    <div className="topPick" style={{ marginTop: "20px" }}>
      {console.log(props.topPick)}
      <div className="pickRow">
        {Data?.map((item, i) => (
          <div
            className="pickitem"
            data-aos="fade-zoom-in"
            data-aos-once="true"
            key={i}
            style={{ marginBottom: "14px" }}
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                overflow: "hidden",
                transition: "all ease-in-out 0.35s",
              }}
            >
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
                <span className="add-to-cart">
                  <Link
                    to={`/buycard/${item.id}`}
                    className="add-to-cart"
                    style={{ textDecoration: "none" }}
                  >
                    BUY NOW
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cloth;
