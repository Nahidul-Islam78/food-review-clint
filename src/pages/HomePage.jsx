import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

import Review from '../components/Review';
import { AuthContext } from '../context/AuthContext';


const HomePage = () => {
 
  
  const[reviews,setReview]=useState([])
  useEffect(() => {
    fetch('http://localhost:3500/allReview').then(res => res.json()).then(data => {
      console.log(data);
      setReview(data)
    });
    
  },[])
  return (
    <div>
      <section className="hero">
      <Hero></Hero>
      </section>
      <section className='card w-11/12 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {reviews.map(singleReview=><Review key={singleReview._id} singleReview={singleReview}></Review>)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;