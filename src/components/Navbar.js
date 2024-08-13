import React from "react";
import "./Navbar.css";
import "./Kitchen.css";
import { Link } from "react-router-dom";
import Cloth from "./Cloth";
import Kitchen from "./Kitchen";
export function Navbar() {
  return (
    <nav>
      <div className="upperNav">
        Shop Now...!!! Up to 20% discount on each Product
      </div>
      <div className="mainNav">
        <div className="nav1">
          <span className="logo"> Aman</span>
          <span>
            {" "}
            <i className="	fa fa-phone"></i> 8745845960
          </span>
        </div>
        <div className="nav2">
          <input type="text" placeholder="What are you looking for" />
        </div>
        <div className="nav3">
          <a href="#">Track Order</a>
          <a href="#">SignIn / SignUp</a>
          <a href="#">
            <i className="fa fa-heart"></i>
            Wishlist
          </a>
          <a href="#">
            {" "}
            <i className="fa fa-cart-arrow-down"></i> Cart
          </a>
        </div>
      </div>
      <div className="bottomNav">
        <Link to="/">Home</Link>
        <Link to="/cloth">Cloth</Link>
        <Link to="/Kitchen">Kitchen</Link>
        <Link to="/Travel">Travel</Link>
        <Link to="/Food">Food</Link>
        <Link to="/PersonalCare">Personal Care</Link>
        <Link to="/HouseholdCare">Household Care</Link>
      </div>
    </nav>
  );
}
