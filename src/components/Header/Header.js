import React from "react";
import logo from "../../Images/Logo.svg";
import './Header.css'

const Header = () => {
  return (
    <div className="Header-Info">
      <img src={logo} alt="" />
      <div>
         <a href="/Home">Home</a>
         <a href="/Home">Orders</a>
         <a href="/Home">Products</a>
         <a href="/Home">Shop</a>
      </div>
    </div>
  );
};

export default Header;
