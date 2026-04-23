import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(false)
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
      if (currentUser) {
        setLoading(false);
        
      } else {
        //user signout
      }
      return () => {
        unsubscribe()
      }
    })
  },[])
  const userInfo = {
    LoginGoogle,
    CreateUser,
    LoginUser,
    user,
    LogoutUser,
    loading
  };
  
  return <AuthContext value={userInfo}>{ children}</AuthContext>
    
};

export default AuthProvider;