import React from "react";
import { ReactComponent as Icon } from "../../assests/shopping-bag.svg";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart-action";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

const CartIcon = ({ itemcount, togglehidden }) => {
  return (
    <div className="cart-icon" onClick={togglehidden}>
      <Icon className="shopping-icon" />
      <span className="item-count">{itemcount}</span>
    </div>
  );
};

const fun = (dispatch) => ({
  togglehidden: () => dispatch(toggleCart()),
});

const fun1 = (state) => ({
  itemcount: selectCartItemsCount(state),
});
export default connect(fun1, fun)(CartIcon);
