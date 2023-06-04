import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.components";

import ShopPage from "./pages/ShopPage/ShopPage.component";

import { Route, Routes } from "react-router-dom";

import { Redirect } from "react-router-dom";

import { auth, createUSerProfileDocument } from "./firebase/firebase.utilis";

import HeaderComponent from "./components/header/header.components";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";

import { connect } from "react-redux";

import { setCurrentUSer } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUSer } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUSer({
            id: userRef.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUSer(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUSer ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUSer: (user) => dispatch(setCurrentUSer(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
