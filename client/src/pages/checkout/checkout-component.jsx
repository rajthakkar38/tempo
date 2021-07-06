import React from "react";
import "./checkout-component.scss";
import { Total, selectCartItems } from "../../redux/cart/cart-selectors";
import { connect } from "react-redux";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import StripCheckoutButton from "../../components/strip-button/strip-button.component";

const Checkout = ({ itemTotal, items }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {items.map((val) => (
        <CheckoutItems key={val.id} item={val} />
      ))}
      <div className="total">Total:{itemTotal}$</div>

      <StripCheckoutButton price={itemTotal} />
    </div>
  );
};

const fun1 = (state) => ({
  itemTotal: Total(state),
  items: selectCartItems(state),
});

export default connect(fun1)(Checkout);
