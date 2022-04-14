import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <h3 className="product-seller">{seller}</h3>
        <p>Price: {price}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>

      <button
        onClick={() => props.handleAddCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
