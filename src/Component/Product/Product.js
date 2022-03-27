import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="productcontainer">
      <img src={props.product.img} alt="" />
      <h4>{props.product.name}</h4>
      <p>Price: {props.product.price} </p>
      <p>Manufacture:{props.product.seller}</p>
      <p>Ratings: {props.product.ratings}stars</p>
      <div>
        <button
          onClick={() => props.AddtoCartHandler(props.product)}
          className="btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
