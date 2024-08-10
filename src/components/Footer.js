import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="lists-outer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "26px" }}>Our Product</span>
          <ul>
            <li>Cloths</li>
            <li>Kitchen Product</li>
            <li>Electonic Product</li>
            <li>Stationary Product</li>
            <li>Corporate Product</li>
            <li>Sport Product</li>
            <li>Other</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "26px" }}>Overview</span>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contract</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Global Sitamap</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "26px" }}>OUR COMMUNITY</span>
          <ul>
            <li>Community Cenral</li>
            <li>Support</li>
            <li>Help</li>
            <li>Do Not sell My Info</li>
            <li>Contract</li>
            <li>Sport Product</li>
            <li>Other</li>
          </ul>
        </div>
        <div className="Contract">
          <div style={{ fontSize: "25px", marginBottom: "20px" }}>CONTRACT</div>
          <input className="email" type="text" placeholder="Enter Email" />
          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-whatsapp"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-github"></i>
      </div>
      <div className="footertxt">Follow On Instagram:rawat.aman87</div>
    </footer>
  );
}

export default Footer;
