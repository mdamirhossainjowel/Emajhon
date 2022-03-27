import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/about">About Us</a>
      </div>
    </div>
  );
};

export default Header;
