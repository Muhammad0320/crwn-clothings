import React from "react";

import "./signin.style.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utilis";

import FormInput from "../form-input/form-input.components";

import CustomButton from "../custom-buttons/custom-buttons.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title"> I already have an account </h2>
        <span className="title"> Sign in with email and password </span>

        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
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
            <CustomButton type="submit"> Submit Form </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              value="Sign in with Google"
              isGoogleSignin
              type="button"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
