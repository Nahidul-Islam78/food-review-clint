import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Review from '../components/Review';

const AllReview = () => {
  const [allReviews, setAllReview] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3500/allReview', {
      
    
    }).then(res => res.json()).then(data => {
      console.log(data);
      setAllReview(data);
    })
    
  }, [])

  return (
    <div>
      <section className="top-review card w-11/12 mx-auto items-center  py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl font-bold py-5">
          All Review
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {allReviews.map(singleReview => (
            <Review key={singleReview._id} singleReview={singleReview}></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllReview;