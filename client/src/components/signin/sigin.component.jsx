import React, { useState } from "react";
import "./sigin.component.scss";
import FormInput from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
  GoogleSignInStart,
  EmailSignInStart,
} from "../../redux/user/user-action";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { EmailSignInStart } = this.props;
    const { email, password } = this.state;
    // console.log(this.state.email, this.state.password);
    EmailSignInStart(email, password);
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { GoogleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>Already Have an Account</h2>
        <span>Sign IN</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={GoogleSignInStart}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  GoogleSignInStart: () => dispatch(GoogleSignInStart()),
  EmailSignInStart: (email, password) =>
    dispatch(EmailSignInStart({ email, password })),
});

export default connect(null, mapDispatch)(SignIn);
