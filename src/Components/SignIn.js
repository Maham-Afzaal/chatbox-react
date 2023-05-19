import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from './Firebase'
import firebase from "firebase/compat/app";
import {app} from './Firebase'
const SignIn = () => {

const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
      // Sign in with the Google authentication provider
    signInWithPopup(auth, provider)
      .then((result) => {
        alert('suceess')
      })
      .catch((error) => {
        // Handle errors
        alert(error)

      });
  };
      
  
  return (
    <div>
        <button onClick={signInWithGoogle}>sign In </button>
    </div>
  )
}

export default SignIn