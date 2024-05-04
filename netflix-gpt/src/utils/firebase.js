// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0jVFiHV4bo4BBuO175MrAysfiCawC9L8",
  authDomain: "netflixgpt-a6adf.firebaseapp.com",
  projectId: "netflixgpt-a6adf",
  storageBucket: "netflixgpt-a6adf.appspot.com",
  messagingSenderId: "140396991570",
  appId: "1:140396991570:web:f068fcaa318da875cefb8b",
  measurementId: "G-11WFSBFXGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
