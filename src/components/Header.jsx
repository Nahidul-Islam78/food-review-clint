import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const Header = () => {
  const { user, LogoutUser } = use(AuthContext);
  
  const handelLogout = () => {
    console.log(14)
     LogoutUser()
       .then(console.log("df"))
       .catch(error => {
         console.log(error);
       });
  }
  const link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AllReview">All Reviews</NavLink>
      <NavLink to="/MyReview">My Reviews</NavLink>
      <NavLink to="/AddReview">Add Review</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            {link}
          </ul>
        </div>
        <p>Local Food Lovers Network</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  gap-2">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                src={user.photoURL}
                className="rounded-full h-12 w-12"
              ></img>
              <ul
                tabIndex="-1"
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
              >
                <li>
                  <button onClick={handelLogout}>Logout</button>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <NavLink to="/register" className="btn  btn-soft btn-info">
            Register
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;