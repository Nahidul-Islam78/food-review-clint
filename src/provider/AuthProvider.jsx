import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(true)
  //google singIn
  const LoginGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  //signUp with email & password
  const CreateUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //updateUser
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser,{displayName,photoURL})
  }
  //signIn with email & password
  const LoginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout 
  const LogoutUser = () => {
    setLoading(true)
    return signOut(auth);
  }
  //set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
      if (currentUser) {
        //
        
      } else {
        //user signout
      }
      
    })
    return () => {
      unsubscribe();
    };
  },[])
  const userInfo = {
    LoginGoogle,
    CreateUser,
    LoginUser,
    user,
    LogoutUser,
    loading,
    setLoading,
    updateUser,
  };
  
  return <AuthContext value={userInfo}>{ children}</AuthContext>
    
};

export default AuthProvider;