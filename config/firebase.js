// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9aEe1fRyuL_7VDq8BEFhyQuzPfHQ83AY",
  authDomain: "scholarnote-608c5.firebaseapp.com",
  projectId: "scholarnote-608c5",
  storageBucket: "scholarnote-608c5.firebasestorage.app",
  messagingSenderId: "226621730629",
  appId: "1:226621730629:web:0538779adcd0455ee1582c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
