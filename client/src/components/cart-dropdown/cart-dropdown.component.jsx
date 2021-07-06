import React from "react";
import "./cart-dropdown.component.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-items/cart-items.components";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart-action";

const CartDropdown = ({ cart, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((items) => {
            return <CartItem key={items.id} item={items}></CartItem>;
          })
        ) : (
          <span class="empty-msg">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push(`/checkout`);
          dispatch(toggleCart());
        }}
      >
        CheckOut
      </CustomButton>
    </div>
  );
};

const fun1 = ({ cart: { cart } }) => ({
  cart,
});

export default withRouter(connect(fun1)(CartDropdown));
