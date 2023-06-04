import React from 'react';

import './header.style.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../../firebase/firebase.utilis';
import { connect } from 'react-redux';

import ShoppingCart from '../shopping-cart/shopping-cart.components';

const HeaderComponent = ({ currentUSer }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUSer ? (
        <div className="option" onClick={() => auth.signOut}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <ShoppingCart className="option" />
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUSer: state.user.currentUSer,
});

export default connect(mapStateToProps)(HeaderComponent);
