import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const cofig = {
  apiKey: "AIzaSyDRDv3EE0-BrhG-StghnPEcJ8kRn0POc_Q",
  authDomain: "crown-db-5b490.firebaseapp.com",
  projectId: "crown-db-5b490",
  storageBucket: "crown-db-5b490.appspot.com",
  messagingSenderId: "816169554632",
  appId: "1:816169554632:web:95d439833fd6db2a2acbfd",
  measurementId: "G-8BDJK6CCD0",
};

export const createUSerProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocRef = firestore.doc(`user/${userAuth.uid}`);

  const docSnapshot = await userDocRef.get();

  if (!docSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(` Error occured while creating user ${error.message} `);
    }
  }

  return userDocRef;
};

firebase.initializeApp(cofig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
