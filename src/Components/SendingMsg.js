import { Button } from '@mui/material'
import Input from '@mui/joy/Input';

import React from 'react'
import {useState,useEffect} from 'react'
import { auth } from './Firebase'
import firebase from "firebase/compat/app";
import {db} from './Firebase'
import { collection, addDoc,getDocs} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const SendingMsg = ({scroll}) => {

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

  const addDataToFirestore = async (e) => {
    e.preventDefault();
    const username = auth.currentUser.displayName;
  
    try {
      const docRef = await addDoc(collection(db, "users"), {
        text:first,
        photo:photoURL,
        uidd:uid,
        userName:username,
        createdAt: serverTimestamp(),
      });
      setfirst('');
      scroll.current.scrollIntoView({behavior:'smooth'})
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <form onSubmit={addDataToFirestore}>
      <div style={{display:'flex'}}>
        <Input sx={{width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px', }}variant="soft" size="lg" fullWidth placeholder='...Type a Message'value={first} onChange={(e)=>setfirst(e.target.value)}/>
        <Button sx={{width: '18',}} type='submit' variant='contained'>send </Button>
    </div>
    </form>
  )
}

export default SendingMsg