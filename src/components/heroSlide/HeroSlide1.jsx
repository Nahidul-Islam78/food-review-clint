import React from 'react';

const HeroSlide1 = () => {
  return (
    <div className="hero bg-[#F3EEEA] min-h-screen">
      <div className="hero-content lg:gap-20 flex-col md:flex-row-reverse lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold py-3">Discover Delicious Food</h1>
          <p className="py-6">
            Write reviews and help others find the perfect meal
          </p>
          <button className='btn btn-accent'>Add Review</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide1;