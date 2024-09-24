// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHsedXUS9PY_49M9TUeIg56XeOzsicujo",
  authDomain: "ppbi-de75f.firebaseapp.com",
  databaseURL: "https://ppbi-de75f-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "ppbi-de75f",
  storageBucket: "ppbi-de75f.appspot.com",
  messagingSenderId: "520691332856",
  appId: "1:520691332856:web:95b11093742d99c2e9ed0d",
  measurementId: "G-W3B6123MKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);