import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Review from '../components/Review';

const FavoritePage = () => {
  const { user } = use(AuthContext);
  const [favoriteReviews,setFavoriteReview]=useState([])
  useEffect(() => {
    fetch(`http://localhost:3500/favoriteReview?email=${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}`}
    }).then(res => res.json()).then(data => {
      setFavoriteReview(data)
    })
  },[user])
  return (
    <div>
      <section className="favorite-review card w-11/12 mx-auto items-center  py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl font-bold py-5">
          Favorite Review
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {favoriteReviews.map(singleReview => (
            <Review
              key={singleReview._id}
              singleReview={singleReview}
            ></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FavoritePage;