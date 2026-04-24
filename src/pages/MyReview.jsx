import React from 'react';
import { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
const MyReview = () => {
  const { user } = use(AuthContext);
  
  useEffect(() => {
    fetch(`http://localhost:3500/myReview?email=${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then(res => res.json())
      .then(data => console.log(data));
      
  }, [user]);
  return (
    <div>
      
    </div>
  );
};

export default MyReview;