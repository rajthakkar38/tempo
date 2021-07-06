import { HomePage } from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignUpSignIn from "./pages/sign-up-and-sign-in/sign-up-and-sign-in.component.jsx";
// import { auth, createUserDoc } from "./firebase/firebase.utils";
import React from "react";
import { connect } from "react-redux";
import Checkout from "./pages/checkout/checkout-component.jsx";
import { selectCollectionsForPreview } from "./redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
import { CheckUserSession } from "./redux/user/user-action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { CheckUserSession } = this.props;
    CheckUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />

        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignUpSignIn />
          }
        />
      </div>
    );
  }
}

// const fun1 = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

const fun1 = createStructuredSelector({
  currentUser: selectCurrentUser,
  arr: selectCollectionsForPreview,
});

const fun = (dispact) => ({
  CheckUserSession: () => dispact(CheckUserSession()),
});

export default connect(fun1, fun)(App);
