import React, { useEffect } from 'react'
import {Avatar, Button, Stack,Input} from '@mui/material';
import {auth} from './Firebase'
import {db} from './Firebase'
import { useState ,useRef} from 'react';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,setDoc,orderBy,serverTimestamp
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import YourComponent from './YourComponent';
import Display from './Display';
import SendingMsg from './SendingMsg';
import ShowChat from './ShowChat';
import './disStyles.css'
import { InputBase, TextareaAutosize,Typography } from '@mui/material';

const ChatDisplay = () => {
  const scroll = useRef()
  const [cities, setCities] = useState([]);
  React.useEffect(() => {
    const q = query(collection(db, "users"));
    const f= query(q,orderBy('createdAt','asc'));
    const unsub = onSnapshot(f,(querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setCities(todosArray);
    });
    return () => unsub();
  }, []);
  return (
    <div style={{margin:'2em'}}>
      <div>
        <Button onClick={()=>auth.signOut()} variant='contained' fullWidth color='secondary' size="medium"sx={{margin:'6px'}}>Sign Out</Button>
      </div>
<div>

{cities.map((city) => (
  <Stack key={city.id} className={`${city.uidd==auth.currentUser.uid ? "divSend" : "divRecive"}`}>
    <div className='divAvat'>
      <Avatar src={city.photo}/>
      <Typography variant="subtitle1" sx={{px:'1em'}}>
        {city.userName}
      </Typography>

    </div>
      <TextareaAutosize
        value={city.text}
        minRows={1}
        style={{
          borderRadius: '3000px',
          boxShadow:' 0 0 10px rgb(122, 122, 122)',        
          width: "60%",padding:'13px',fontSize:'16px',marginBottom:'8px'}} 
      />
  </Stack>

      ))}
</div>
<SendingMsg scroll={scroll}/>
<div ref={scroll}></div>

</div>
  )
}

export default ChatDisplay