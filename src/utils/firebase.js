import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC73O0zTla8WgaLLLWIJ__ym7cKPhQ8q7Q",
  authDomain: "netfli2clone.firebaseapp.com",
  projectId: "netfli2clone",
  storageBucket: "netfli2clone.appspot.com",
  messagingSenderId: "737772205433",
  appId: "1:737772205433:web:de11c391cac3e2cccfaba8",
  measurementId: "G-P1HBVMFRYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();