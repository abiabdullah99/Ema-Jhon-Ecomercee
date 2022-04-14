import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h2>This Cart</h2>
        <p>Selcted Itmes : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
