// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHsedXUS9PY_49M9TUeIg56XeOzsicujo",
  authDomain: "ppbi-de75f.firebaseapp.com",
  projectId: "ppbi-de75f",
  storageBucket: "ppbi-de75f.appspot.com",
  messagingSenderId: "520691332856",
  appId: "1:520691332856:web:95b11093742d99c2e9ed0d",
  measurementId: "G-W3B6123MKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);