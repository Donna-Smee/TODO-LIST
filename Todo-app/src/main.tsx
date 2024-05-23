import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP3vmYEEHCxrwZUyHIxlVwGYXAYGayyVY",
  authDomain: "to-do-lists-7ac90.firebaseapp.com",
  projectId: "to-do-lists-7ac90",
  storageBucket: "to-do-lists-7ac90.appspot.com",
  messagingSenderId: "435548366175",
  appId: "1:435548366175:web:cdaa25a37b2b1c4635c2ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
