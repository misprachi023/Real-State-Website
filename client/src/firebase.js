// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "real-estate-90d3b.firebaseapp.com",
  projectId: "real-estate-90d3b",
  storageBucket: "real-estate-90d3b.appspot.com",
  messagingSenderId: "632127223209",
  appId: "1:632127223209:web:1a1d3b3132b088cd8780b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}