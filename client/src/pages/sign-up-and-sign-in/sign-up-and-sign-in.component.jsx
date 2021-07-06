import React from "react";

import "./sign-up-and-sign-in.componenet.scss";

import SignIn from "../../components/signin/sigin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignUpSignIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpSignIn;
