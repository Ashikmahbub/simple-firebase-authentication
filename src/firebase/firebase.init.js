// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Kgv8UasfHX59RhTuk96_HJL4GzfVzFw",
  authDomain: "simple-firebase-authenti-b22fa.firebaseapp.com",
  projectId: "simple-firebase-authenti-b22fa",
  storageBucket: "simple-firebase-authenti-b22fa.appspot.com",
  messagingSenderId: "683301950502",
  appId: "1:683301950502:web:55437ddf9e5a03f8e102e7",
  measurementId: "G-9K1WWJQWKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;