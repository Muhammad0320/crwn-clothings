import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.components";

import ShopPage from "./pages/ShopPage/ShopPage.component";

import { Route, Routes } from "react-router-dom";

import { auth } from "./firebase/firebase.utilis";

import HeaderComponent from "./components/header/header.components";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUSer: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUSer: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUSer={this.state.currentUSer} />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInAndSignUp} />
        </Routes>
      </div>
    );
  }
}

export default App;
