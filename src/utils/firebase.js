import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JOwidImSpDePV4Ly7dRYZxlV3dBHA-w",
  authDomain: "netflix-kk.firebaseapp.com",
  projectId: "netflix-kk",
  storageBucket: "netflix-kk.appspot.com",
  messagingSenderId: "388645314648",
  appId: "1:388645314648:web:68456f745c2576d7646a2d",
  measurementId: "G-C4QKHVE8PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();