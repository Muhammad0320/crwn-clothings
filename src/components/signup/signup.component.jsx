import React from "react";

import "./signup.style.scss";

import {
  auth,
  createUSerProfileDocument,
} from "../../firebase/firebase.utilis";

import CustomButton from "../custom-buttons/custom-buttons.component";

import FormInput from "../form-input/form-input.components";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleClick = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        displayName
      );

      await createUSerProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="signUp">
        <h2 className="title"> I do not have an account </h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleClick}>
          <FormInput
            label="Display Name"
            handleChange={this.handleChange}
            value={displayName}
            type="text"
            name="displayName"
            required
          />

          <FormInput
            label="Email"
            handleChange={this.handleChange}
            value={email}
            type="email"
            name="email"
            required
          />

          <FormInput
            label=" Password"
            handleChange={this.handleChange}
            value={password}
            type="password"
            name="password"
            required
          />

          <FormInput
            label="Confirm Password"
            handleChange={this.handleChange}
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            required
          />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
