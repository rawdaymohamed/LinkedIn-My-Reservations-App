import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDGYOefTyxQaV7-FjqJR9NvNAXGQ_uv_AM",
  authDomain: "linkedin-my-reservations-app.firebaseapp.com",
  projectId: "linkedin-my-reservations-app",
  storageBucket: "linkedin-my-reservations-app.firebasestorage.app",
  messagingSenderId: "689199444168",
  appId: "1:689199444168:web:a532628019c78860c335fd",
  measurementId: "G-L5D46XQVFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();