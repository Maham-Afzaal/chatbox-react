// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVaKx8gy_Z2Gs0qmb55H4gxUBoxAvUOXE",
  authDomain: "chatapp-c816e.firebaseapp.com",
  projectId: "chatapp-c816e",
  storageBucket: "chatapp-c816e.appspot.com",
  messagingSenderId: "536373029087",
  appId: "1:536373029087:web:b0beb421fb1478b96f616a",
  measurementId: "G-SCM56Z8618"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
