import React from 'react'
import './styles.css'
import Container from '@mui/material/Container';
import chats from '../chats.gif'
import {Button} from '@mui/material'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from './Firebase'
import firebase from "firebase/compat/app";
import {app} from './Firebase'

const Welcome = () => {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
      // Sign in with the Google authentication provider
    signInWithPopup(auth, provider)
      .then((result) => {
      })
      .catch((error) => {
        // Handle errors
        alert(error)

      });
  };
  

  return (
    <Container maxWidth="sm" sx={{backgroundColor:'#E9E8E8'}}>
    <div>
    <h1 className="my-custom-font">Welcome to Chat APP</h1>
    <h2 className="textt">A platform that enables universal communication between individuals.</h2>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} className='divMain'>
      <img src={chats} style={{maxWidth:'100%',height:'auto'}} className='imgg'/>
      <div style={{margin:'1em'}}>
        <Button fullWidth size='large' variant='contained' onClick={signInWithGoogle} sx={{backgroundColor:'#b23a48'}}>Sign In with Google</Button>
      </div>
      

    </div>

    </div>
    </Container>
  )
}

export default Welcome