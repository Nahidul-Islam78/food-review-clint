import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  //google singIn
  const LoginGoogle = () => {
    return signInWithPopup(auth,provider)
  }
  const userInfo = {
    LoginGoogle
  };
  
  return <AuthContext value={userInfo}>{ children}</AuthContext>
    
};

export default AuthProvider;