import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const ReviewDetails = () => {
  const { id } = useParams();
  const{loading}=use(AuthContext)
  const [review,setReview]=useState()
  useEffect(() => {
    fetch(`http://localhost:3500/reviewDetails/${id}`).then(res => res.json()).then(data => {
      console.log(data)
      setReview(data)
    })
  }, [id])
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  
  const foodReview = review && review[0]
  
  
  
  return (
    <div className="h-screen w-11/12 mx-auto">
      <div>
        <img
          className="w-full h-96 object-cover"
          src={foodReview?.foodImage}
          alt=""
        />
      </div>
      <div>
        <p className="text-center py-4 text-2xl font-bold">
          {foodReview?.foodName}
        </p>
        
      </div>
    </div>
  );
};

export default ReviewDetails;