import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7Lrrp5P0_ybwds5x2-QMkjSJMeGU1VFM",
  authDomain: "vue-invoice-cc712.firebaseapp.com",
  projectId: "vue-invoice-cc712",
  storageBucket: "vue-invoice-cc712.appspot.com",
  messagingSenderId: "756262913168",
  appId: "1:756262913168:web:9c6ec78a6fd57263bc8415",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
