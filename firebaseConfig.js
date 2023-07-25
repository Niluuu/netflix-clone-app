// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fxRqFXGyar1zvvKpn2PuqY7c_KFj8aY",
  authDomain: "netflix-clone-e4b65.firebaseapp.com",
  projectId: "netflix-clone-e4b65",
  storageBucket: "netflix-clone-e4b65.appspot.com",
  messagingSenderId: "1029755713581",
  appId: "1:1029755713581:web:a7129facaf74bca57da0a4",
  measurementId: "G-HDZTHF3QM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
