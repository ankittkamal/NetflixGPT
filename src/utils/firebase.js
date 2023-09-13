// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBwSPQgoXbCz99Q_WTqxpH5RAp3G347Tw",
  authDomain: "netflixgpt-8cff0.firebaseapp.com",
  projectId: "netflixgpt-8cff0",
  storageBucket: "netflixgpt-8cff0.appspot.com",
  messagingSenderId: "864987088861",
  appId: "1:864987088861:web:87dd1463882caaf863d834",
  measurementId: "G-6HV2S230JC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const analytics = getAnalytics(app);
