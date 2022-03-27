import React from "react";
import "./Wishlist.css";
const Wishlist = (props) => {
  return (
    <div className="wishlist">
      <div className="imageContainer">
        <img src={props.selected.img} alt="" />
      </div>
      <h3>{props.selected.name}</h3>
    </div>
  );
};

export default Wishlist;
