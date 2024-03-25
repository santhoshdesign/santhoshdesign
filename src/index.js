import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import firebase from "firebase/compat/app";
const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyD1IEWczg2pk6cprGOwBIXCiR1Y82Pg4Rk",
  authDomain: "santhosh-design.firebaseapp.com",
  projectId: "santhosh-design",
  storageBucket: "santhosh-design.appspot.com",
  messagingSenderId: "513070563463",
  appId: "1:513070563463:web:142b9c08d9d47c787df822",
  measurementId: "G-R36LWSWCMF",
};

firebase.initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestToken = async (setTokenFound) => {
  return await getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_NOTIFICATION,
  })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        return currentToken;
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      // console.log('An error occurred while retrieving token. ', err)
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
