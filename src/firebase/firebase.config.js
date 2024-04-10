// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVCCmLd5hNdVK6A80dFdIhNSG-DBq6sI",
  authDomain: "real-estate-auth-hospitality.firebaseapp.com",
  projectId: "real-estate-auth-hospitality",
  storageBucket: "real-estate-auth-hospitality.appspot.com",
  messagingSenderId: "233547422576",
  appId: "1:233547422576:web:38689e06f85fef6d568db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;