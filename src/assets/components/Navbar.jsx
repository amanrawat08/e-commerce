import { FaCar, FaUser, FaCartPlus } from "react-icons/fa";
function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="topheader d-flex justify-content-between align-items-center w-100">
          <ul className="topheader-ul d-flex justify-content-start align-items-center gap-4 list-unstyled m-0 p-0 flex-1">
            <li>
              <h6 className="mb-0">Call Us: (800) 060-0730</h6>
            </li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Track Order</li>
          </ul>
          <div className="topheader-center flex-1 text-center">
            Auto parts for Cars, trucks and motorcycles
          </div>
          <ul className="topheader-ul-last d-flex justify-content-end flex-1 align-items-end gap-4 list-unstyled m-0 p-0">
            <li>
              <h6 className="mb-0">Call Us: (800) 060-0730</h6>
            </li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div className="midlleheader d-flex justify-content-between align-items-center w-100  ">
          <div className="pages flex-2">
            <ul className="d-flex justify-content-start align-items-center gap-4 list-unstyled m-0 p-0">
              <li>Home</li>
              <li>Categories</li>
              <li>Blogs</li>
              <li>Product</li>
            </ul>
          </div>

          <div className="logo flex-1 text-logo position-relative">
            <h2>
              Auto<span>Parts</span>
            </h2>
            <div className="search-bar position-absolute  ">
              <input
                type="text"
                className="search-input"
                placeholder="Search entire store here..."
              />
              <button className="btn-search">Search</button>


            </div>
          </div>

          <div className="icons d-flex flex-2 justify-content-end align-items-center gap-1">
            <button className="d-flex justify-content-center align-items-center gap-2 btn-account">
              <div
                className="d-flex flex-column  
                   text-start"
                style={{ fontSize: "12px", lineHeight: ".6" }}
              >
                <span>Hello, Login</span>
                <br />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Account
                </span>
              </div>

              <FaUser size={25} />
            </button>
            <button className="d-flex justify-content-center align-items-center gap-2  btn-cart">
              <div
                className="d-flex flex-column  
                   text-start"
                style={{ fontSize: "12px", lineHeight: ".6" }}
              >
                <span>Shopping Cart</span>
                <br />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  $250.00
                </span>
              </div>

              <FaCartPlus size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
