import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  //google singIn
  const LoginGoogle = () => {
    return signInWithPopup(auth,provider)
  }
  //signUp email & password
  const CreateUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const userInfo = {
    LoginGoogle,
    CreateUser,
  };
  
  return <AuthContext value={userInfo}>{ children}</AuthContext>
    
};

export default AuthProvider;