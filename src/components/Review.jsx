import React from 'react';
import { FaLocationDot, FaRegStar } from 'react-icons/fa6';
import { IoIosRestaurant } from 'react-icons/io';
import { MdOutlineRateReview } from 'react-icons/md';

import { Link } from 'react-router';


const Review = ({ singleReview }) => {
  const {
    foodName,
    foodImage,
    restaurantName,
    starRating,
    reviewText,
    reviewer,
    location
 
  } = singleReview;
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
            <span>Dhaka, Bangladesh</span>
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
        <div className="card-actions justify-end">
          <Link
            to="/reviewDetails"
            className="btn btn-outline rounded-xl btn-info"
          >
            View Details
          </Link>
          <Link to="/allReview" className="btn btn-outline rounded-xl btn-info">
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;