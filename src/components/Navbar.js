import React from "react";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav>
      <div className="upperNav">
        The error you're seeing occurs because the import statement in your code
      </div>
      <div className="mainNav">
        <div className="nav1">
          <span className="logo"> Aman</span>
          <span>
            {" "}
            <i className="	fa fa-phone"></i> 123432345
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
        <a href="#">Clothes</a>
        <a href="#">Kitchen</a>
        <a href="#">Travel</a>
        <a href="#">Food</a>
        <a href="#">Personal Care</a>
        <a href="#">Household Care</a>
      </div>
    </nav>
  );
}
