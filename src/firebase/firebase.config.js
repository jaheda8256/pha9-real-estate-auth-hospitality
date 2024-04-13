
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;