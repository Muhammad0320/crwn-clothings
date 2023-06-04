import React from "react";

import "./sign-in-and-sign-up.style.scss";

import SignIn from "../../components/signin/signin.components";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
