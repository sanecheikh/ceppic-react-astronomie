import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "ceppic-react-astronomie-2064b.firebaseapp.com",
  projectId: "ceppic-react-astronomie-2064b",
  storageBucket: "ceppic-react-astronomie-2064b.appspot.com",
  messagingSenderId: "320315674550",
  appId: "1:320315674550:web:71a82bd7130e256e327b17",
  measurementId: "G-BGE3Q8WQSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}