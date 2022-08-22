import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBRwBIcGVsDLVXg2PoExB_Cy_GGO7-mRiE",
    authDomain: "social-tope.firebaseapp.com",
    projectId: "social-tope",
    storageBucket: "social-tope.appspot.com",
    messagingSenderId: "77874450578",
    appId: "1:77874450578:web:fdb48994afdcaf4cff964b",
    measurementId: "G-R4ZQ0T766D"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();