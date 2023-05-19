import React from 'react'
import './disStyles.css'
import Avatar from '@mui/material/Avatar';
import { Stack, Input, TextField } from '@mui/material';
import {auth} from './Firebase'
import { useEffect, useState ,useRef} from "react";

const ShowChat = ({text,photo,uidd}) => {
  const messagesEndRef = useRef(null)

  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [text]);
  return (
    <div>
        <Stack direction="row" spacing={2} className={`${uidd==auth.currentUser.uid ? "divSend" : "divRecive"}`}>
            <div className='imgUrl'>
                <Avatar src={photo} />
            </div>
            <div>
                <Input margin='dense' fullWidth value={text} multiline></Input>
            </div>
        </Stack>
        <div ref={messagesEndRef} />

    </div>
  )
}

export default ShowChat