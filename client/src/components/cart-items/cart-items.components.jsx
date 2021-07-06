import React from "react";
import "./cart-items.component.scss";

const CartItem = ({ item }) => {
  const { imageUrl: imgUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imgUrl} alt="img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
};

export default CartItem;
