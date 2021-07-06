import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import "./header.component.scss";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { SignOutStart } from "../../redux/user/user-action";

const Header = ({ currentUser, hidden, SignOutStart }) => {
  return (
    <div className="header">
      <Link to="/" className="Logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop/">
          Shop
        </Link>
        <Link className="option" to="/shop/">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              SignOutStart();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin/">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const fun1 = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const fun = (dispatch) => ({
  SignOutStart: () => dispatch(SignOutStart()),
});

export default connect(fun1, fun)(Header);
