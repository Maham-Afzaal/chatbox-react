import React, { useEffect } from 'react'
import {Avatar, Button, Stack,Input} from '@mui/material';
import {auth} from './Firebase'
import {db} from './Firebase'
import { useState ,useRef,useMemo} from 'react';
import { getFirestore, collection,orderBy } from 'firebase/firestore';

import firebase from "firebase/compat/app";
import YourComponent from './YourComponent';
import Display from './Display';
import SendingMsg from './SendingMsg';
import ShowChat from './ShowChat';
import './disStyles.css'
import { InputBase, TextareaAutosize } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { app } from './Firebase';

const firestore = getFirestore(app);

const Testing = () => {
  const dummy = useRef();
  // const messagesRef = query(collection(db, "users"));
  const messagesRef =  collection(db,'users');
  const query = orderBy(messagesRef, 'createdAt', 'desc').limit(25);
const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div>
        <Button onClick={()=>auth.signOut()}>Sign Out</Button>
      </div>

<main>

      {messages &&
        messages.map((msg) => {
          // add the doc.id property to each message
          const messageWithId = { ...msg, id: msg.id };

          return <Display key={messageWithId.id} message={messageWithId} />;
        })}
      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </div>
  )
}

export default Testing