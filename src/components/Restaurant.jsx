import React from 'react';
import { FaLocationDot, FaRegStar } from 'react-icons/fa6';

const Restaurant = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      <div className="card bg-base-100 w-76  md:w-86 lg:w-96 shadow-sm ">
        <figure>
          <img
            className="w-full h-62 object-cover"
            src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="RestaurantImage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Mejbani House
            <div className="badge text-[#ffffff] bg-warning">
              <FaRegStar />
              4.9
            </div>
          </h2>
          <p>
            Famous for traditional Mejbani beef and authentic local flavors.
          </p>
          <div>
            <p className="flex justify-baseline items-center gap-2">
              <FaLocationDot size={20} />
              <span>Chattogram, Bangladesh</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-76  md:w-86 lg:w-96 shadow-sm ">
        <figure>
          <img
            className="w-full h-62 object-cover"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="RestaurantImage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Burger King BD
            <div className="badge text-[#ffffff] bg-warning">
              <FaRegStar />
              4.8
            </div>
          </h2>
          <p>Popular fast food chain offering burgers, fries, and drinks.</p>
          <div>
            <p className="flex justify-baseline items-center gap-2">
              <FaLocationDot size={20} />
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-76  md:w-86 lg:w-96 shadow-sm ">
        <figure>
          <img
            className="w-full h-62 object-cover"
            src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="RestaurantImage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Panshi Restaurant
            <div className="badge text-[#ffffff] bg-warning">
              <FaRegStar />
              4.7
            </div>
          </h2>
          <p>Well-known for traditional Bengali dishes at affordable prices.</p>
          <div>
            <p className="flex justify-baseline items-center gap-2">
              <FaLocationDot size={20} />
              <span>Sylhet, Bangladesh</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;