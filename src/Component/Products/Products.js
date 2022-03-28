import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Wishlist from "../Wishlist/Wishlist";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProductrs] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const AddtoCartHandler = (Selected) => {
    const exist = selectedProducts.find((prod) => prod.id === Selected.id);
    if (selectedProducts.length === 4) {
      alert("You Can't Add More");
      return false;
    } else {
      if (!exist) {
        const newSeleceted = [...selectedProducts, Selected];
        setSelectedProductrs(newSeleceted);
      }
    }
  };
  const chooseForme = () => {
    setSelectedProductrs([]);
    const random = parseInt(
      Math.floor(Math.random() * selectedProducts.length)
    );

    // console.log(selectedProducts[random]);

    setWishlist(selectedProducts[random]);
  };

  const chooseAgain = () => {
    setWishlist([]);
    setSelectedProductrs([]);
  };
  return (
    <div className="productcart">
      <div className="Productcontainer">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            AddtoCartHandler={AddtoCartHandler}
          >
            {" "}
          </Product>
        ))}
      </div>
      <div className="cartcontainer">
        <div className="cart-info">
          <h3>Order Summary</h3>
          <h6>Selected Item: </h6>
          <div>
            {selectedProducts.map((selected) => (
              <Wishlist key={selected.id} selected={selected}></Wishlist>
            ))}
          </div>
          <div>
            {wishlist.length === 0 ? (
              ""
            ) : (
              <Wishlist key={wishlist.id} selected={wishlist}></Wishlist>
            )}
          </div>
          <button onClick={() => chooseForme()} className="buttonChoose">
            Choose 1 for me
          </button>{" "}
          <br />
          <br />
          <button onClick={() => chooseAgain()} className="buttonChoose">
            Choose again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
