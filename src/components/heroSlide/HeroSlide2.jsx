import React from 'react';
import { Link } from 'react-router';

const HeroSlide2 = () => {
  return (
    <div className="hero bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] min-h-screen">
      <div className="hero-content lg:gap-10 flex-col md:flex-row-reverse  lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-xl"
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-3">
            Share Your Food Experience
          </h2>
          <p className="py-6 hidden md:block md:text-xl lg:text-2xl ">
            Write reviews and help others find the perfect meal
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide2;