import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  //google singIn
  const LoginGoogle = () => {
    return signInWithPopup(auth,provider)
  }
  //signUp with email & password
  const CreateUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //signIn with email & password
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const userInfo = {
    LoginGoogle,
    CreateUser,
    LoginUser,
  };
  
  return <AuthContext value={userInfo}>{ children}</AuthContext>
    
};

export default AuthProvider;