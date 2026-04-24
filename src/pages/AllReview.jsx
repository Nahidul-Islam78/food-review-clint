import React, { useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const AllReview = () => {
  
  useEffect(() => {
    fetch('http://localhost:3500/allReview', {
      
    
    }).then(res => res.json()).then(data => {
      console.log(data)
    })
    
  },[])
  return (
    <div>
      
    </div>
  );
};

export default AllReview;