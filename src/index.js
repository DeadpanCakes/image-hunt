import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1AZW_1I4vlHE5_tgEeA9viE_CLJIr3kw",
  authDomain: "image-hunt-119e2.firebaseapp.com",
  projectId: "image-hunt-119e2",
  storageBucket: "image-hunt-119e2.appspot.com",
  messagingSenderId: "545034696815",
  appId: "1:545034696815:web:debad70c4a6830ffc7759a",
};

const firebase = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
