import React from "react";
import "./checkout-items.component.scss";
import { connect } from "react-redux";
import { RemoveItem, ReduceItem, addItem } from "../../redux/cart/cart-action";

const CheckoutItems = ({ item, clearItem, reduceItem, addItem }) => {
  const { imageUrl: imgUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imgUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrows" onClick={() => reduceItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrows" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    clearItem: (item) => dispatch(RemoveItem(item)),
    reduceItem: (item) => dispatch(ReduceItem(item)),
    addItem: (item) => dispatch(addItem(item)),
  };
}

export default connect(null, mapDispatchToProps)(CheckoutItems);
