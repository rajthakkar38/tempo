import React from "react";
import { addItem } from "../../redux/cart/cart-action";
import { connect } from "react-redux";

import "./collection-items.component.scss";
import { CustomButton } from "../custom-button/custom-button.component";

const CollectionItems = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const fun1 = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, fun1)(CollectionItems);
