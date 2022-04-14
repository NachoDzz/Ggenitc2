// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCafiXUm-xHu7V74HVOOqBDeuNQDMHU980",
  authDomain: "ggenetic-8129d.firebaseapp.com",
  projectId: "ggenetic-8129d",
  storageBucket: "ggenetic-8129d.appspot.com",
  messagingSenderId: "59267008129",
  appId: "1:59267008129:web:2be43bda283d376fe46f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)