// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB585v2L2XVKo2VrVhd7_9TJtH2RFlB1cY",
  authDomain: "the-chef-hunting-10.firebaseapp.com",
  projectId: "the-chef-hunting-10",
  storageBucket: "the-chef-hunting-10.appspot.com",
  messagingSenderId: "641416674508",
  appId: "1:641416674508:web:043b184dec410493435669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;