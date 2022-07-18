// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtHTYQxTDNqSWkRXs_oJs2Ix8Rivsgc9M",
  authDomain: "preston-graber.firebaseapp.com",
  projectId: "preston-graber",
  storageBucket: "preston-graber.appspot.com",
  messagingSenderId: "351203748133",
  appId: "1:351203748133:web:147172eb107eca192412cc",
  measurementId: "G-7T647VYWC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);