import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD88qmuRdR1K69a7sSfSPdYXchjt3tpoJ0",
  authDomain: "cursoreact-752ac.firebaseapp.com",
  projectId: "cursoreact-752ac",
  storageBucket: "cursoreact-752ac.appspot.com",
  messagingSenderId: "728178886507",
  appId: "1:728178886507:web:d11250ef2bfda1aa36ee2e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)