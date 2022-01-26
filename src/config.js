// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzAj7JuSRp4GJ_qDxMF3ywu0ZG9bYpO_Y",
  authDomain: "treasure-hunt-techweek.firebaseapp.com",
  projectId: "treasure-hunt-techweek",
  storageBucket: "treasure-hunt-techweek.appspot.com",
  messagingSenderId: "26329553407",
  appId: "1:26329553407:web:639299e548f8f2d20e6fca",
  measurementId: "G-FK35N2TMMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);