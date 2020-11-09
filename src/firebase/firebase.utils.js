import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOgil76HqOeF9rabW7AG9B0EtGJ3TAwuM",
  authDomain: "crown-db-410b8.firebaseapp.com",
  databaseURL: "https://crown-db-410b8.firebaseio.com",
  projectId: "crown-db-410b8",
  storageBucket: "crown-db-410b8.appspot.com",
  messagingSenderId: "304280732841",
  appId: "1:304280732841:web:ac1e6083615f55ea2095b8",
  measurementId: "G-XVGB4FWC9Q",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
