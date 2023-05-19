import {useState,useEffect} from 'react'
import { auth } from './Firebase'
import firebase from "firebase/compat/app";
import {db} from './Firebase'
import { collection, addDoc, } from "firebase/firestore";
import { Button, Input } from '@mui/material'
import React from 'react'
import { serverTimestamp } from "firebase/firestore";

function YourComponent() {
  const [currentUser, setCurrentUser] = useState(null);
  const [first, setfirst] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  if (currentUser === null) {
    return <div>Loading...</div>;
  }

  const { uid, photoURL } = currentUser;
  const addDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        text:first,
        photo:photoURL,
        uidd:uid,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
        <Input placeholder='msed' onChange={(e)=>setfirst(e.target.value)}/>
        <Button onClick={addDataToFirestore}>send </Button>    </div>
  );
}
export default YourComponent;
