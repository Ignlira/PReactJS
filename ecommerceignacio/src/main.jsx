import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSCGicEHOPNG-SLpRm95opSfT4ZJOnpwg",
  authDomain: "ecomerceignacio.firebaseapp.com",
  projectId: "ecomerceignacio",
  storageBucket: "ecomerceignacio.appspot.com",
  messagingSenderId: "889957200825",
  appId: "1:889957200825:web:f472c123bb45b6a1197c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);