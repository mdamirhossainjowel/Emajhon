import React from "react";
import "./Wishlist.css";
const Wishlist = ({ selected }) => {
  return (
    <div className="wishlist">
      <div className="imageContainer">
        <img src={selected.img} alt="" />
      </div>
      <h3>{selected.name}</h3>
    </div>
  );
};

export default Wishlist;
