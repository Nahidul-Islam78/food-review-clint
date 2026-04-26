import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';

import Review from '../components/Review';
import { AuthContext } from '../context/AuthContext';
import Restaurant from '../components/Restaurant';
import LatestReview from '../components/LatestReview';


const HomePage = () => {
 
  
  const [reviews, setReview] = useState([])
  const[latestReviews,setLatestReview]=useState([])
  
  useEffect(() => {
    //get top rated review food
    fetch('http://localhost:3500/topReview').then(res => res.json()).then(data => {
      console.log(data);
      setReview(data)
    });
    //get latest review food 
    fetch('http://localhost:3500/latestReview').then(res => res.json()).then(data => {
      console.log(data)
      setLatestReview(data)
    })
    
  },[])
  return (
    <div>
      <section className="hero ">
        <Hero></Hero>
      </section>
      <section className="top-review card w-11/12 mx-auto items-center  py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl font-bold py-5">
          Top Rated Review
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {reviews.map(singleReview => (
            <Review key={singleReview._id} singleReview={singleReview}></Review>
          ))}
        </div>
      </section>
      <section className="popular-restaurant card w-11/12 mx-auto items-center  py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl font-bold py-5">
          Popular Restaurant
        </p>
        <Restaurant></Restaurant>
      </section>
      <section className="latest-review card w-11/12 mx-auto items-center  py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl font-bold py-5">
         Latest Review
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {latestReviews.map(singleReview => (
            <LatestReview key={singleReview._id} singleReview={singleReview}></LatestReview>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;