import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user) {
    return children
  }
  return <Navigate to='/login'></Navigate>
    
};

export default PrivetRoute;