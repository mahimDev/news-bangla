// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLqOhgkbBjH0nZ-_0Cc7KVxyI5tPg-PoE",
  authDomain: "news-bangla-8dc07.firebaseapp.com",
  projectId: "news-bangla-8dc07",
  storageBucket: "news-bangla-8dc07.firebasestorage.app",
  messagingSenderId: "675535148250",
  appId: "1:675535148250:web:3303157882197a6f3681e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
