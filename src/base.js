import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhSAZdEsFR3Z4AwntEXOVpym9hfNF-bp8",
  authDomain: "catch-of-the-day-ben-min.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ben-min.firebaseio.com",
  projectId: "catch-of-the-day-ben-min",
  storageBucket: "catch-of-the-day-ben-min.appspot.com",
  messagingSenderId: "303563646957",
  appId: "1:303563646957:web:c8b28742500042458ba9e4",
  measurementId: "G-WE671Z7WFW",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
