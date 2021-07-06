import React from "react";
import "./sign-up.component.scss";
import FormInput from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { auth, createUserDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      conpassword: "",
    };
  }

  handleSubmit = async (e) => {
    const { displayName } = this.state;
    e.preventDefault();
    if (this.state.password !== this.state.conpassword) {
      alert(`Password's Not Matching`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      await createUserDoc(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        conpassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>Do Not Have an Account</h2>
        <span className="title">Sign Up</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
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
          <FormInput
            type="password"
            name="conpassword"
            label="Confirm Password"
            value={this.state.conpassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
