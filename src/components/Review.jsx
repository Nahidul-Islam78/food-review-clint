import React, { use} from 'react';
import { FaLocationDot, FaRegStar } from 'react-icons/fa6';
import { IoIosRestaurant } from 'react-icons/io';
import { MdOutlineRateReview } from 'react-icons/md';

import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const Review = ({ singleReview}) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  
  const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    starRating,
    reviewText,
    reviewer,
    location,
    isFavorite
    
  } = singleReview;
  const handelFavoriteReview = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    fetch('http://localhost:3500/favoriteReview', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(singleReview),
    })
      .then(res => res.json())
      .then(data => {
        fetch(`http://localhost:3500/updateReview/${_id}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ isFavorite: true }),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      });
    
    
  };

  
  

  return (
    <div className="card bg-base-100 w-76  md:w-86 lg:w-96 shadow-sm ">
      <figure>
        <img
          className="w-full h-62 object-cover"
          src={foodImage}
          alt="foodImage"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge text-[#ffffff] bg-warning">
            <FaRegStar />
            {starRating}
          </div>
        </h2>
        <p>{reviewText}</p>
        <div className="grid grid-cols-3 gap-2">
          <p className="flex justify-baseline items-center gap-2">
            <FaLocationDot size={20} />
            <span>{location}</span>
          </p>
          <p className="flex justify-baseline items-center gap-2">
            <IoIosRestaurant size={20} />
            <span> {restaurantName}</span>
          </p>
          <p className="flex justify-baseline items-center gap-2">
            <MdOutlineRateReview size={20} />
            <span>{reviewer}</span>
          </p>
        </div>
        <div className="card-actions justify-end flex ">
          <button
            onClick={() => {
              handelFavoriteReview(`${_id}`);
            }}
            className={
              isFavorite ? 'btn btn-disabled' : 'btn btn-outline btn-secondary'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            Favorite
          </button>
          <Link
            to={`/reviewDetails/${_id}`}
            className="btn btn-outline rounded-xl btn-info"
          >
            View Details
          </Link>
          <Link
            to="/allReview"
            className="btn btn-outline rounded-xl btn-info "
          >
            All Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;