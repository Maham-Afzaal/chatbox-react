import React from 'react'
import './disStyles.css'
import Avatar from '@mui/material/Avatar';
import { Stack, Input, TextField } from '@mui/material';
import { useTheme,useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import {auth} from './Firebase'
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

  
const Display = (props) => {
  const { text, uidd, photo } = props.message;
    // const theme = useTheme();
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState("");

  useEffect(() => {
    const auth = getAuth(); // Get the auth object
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
return unsubscribe;
  }, []);

// const mm=uid === currentUser?'suceess':'error' ;

// const currentUser = auth.currentUser;
// const m=uidd;
// const n=currentUser.uid;
// const mm=m==n?'suceess':'error' ;
// console.log(mm);   
useEffect(() => {
    async function checkUid() {
      if (currentUser) {
        const m = uidd;
        const n = currentUser.uid;
        const mm = m === n ? "success" : "error";
        setMessage(mm);
      }
    }
    checkUid();
  }, [currentUser]);

  return (
    <div>
        <Stack direction="row" spacing={2} className={`${message === "success" ? "divSend" : "divRecive"}`}>
            <div className='imgUrl'>
                <Avatar src={photo} />
            </div>
            <div>
                <TextField margin='dense' fullWidth value={text} multiline></TextField>
            </div>
        </Stack>
         <p>{message}</p>

    </div>
  )
}

export default Display