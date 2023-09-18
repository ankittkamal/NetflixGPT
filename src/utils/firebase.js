// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTchdryDqrGWV1p8ErkxuH8blaqhxhprc",
  authDomain: "netflixgpt-ff483.firebaseapp.com",
  projectId: "netflixgpt-ff483",
  storageBucket: "netflixgpt-ff483.appspot.com",
  messagingSenderId: "696758867460",
  appId: "1:696758867460:web:16d8f69cb3158753afc751",
  measurementId: "G-CX7NY3MWNS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const analytics = getAnalytics(app);
