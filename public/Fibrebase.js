
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    REACT_APP_APIkEY: "xxxx",
  authDomain: "ceppic-contact.firebaseapp.com",
  projectId: "ceppic-contact",
  storageBucket: "ceppic-contact.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}