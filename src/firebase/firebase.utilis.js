import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const cofig = {
  apiKey: "AIzaSyBAYvDo91pOu1qNSZxP0W0O_h2g57nMFXk",
  authDomain: "crwn-clothing-24c00.firebaseapp.com",
  projectId: "crwn-clothing-24c00",
  storageBucket: "crwn-clothing-24c00.appspot.com",
  messagingSenderId: "427145340630",
  appId: "1:427145340630:web:905cdf981747dca2ba8b77",
  measurementId: "G-8Y49RNG730",
};

firebase.initializeApp(cofig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
