import React, { useState } from 'react';
import { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

import Swal from 'sweetalert2';
const MyReviews = () => {
  const[myReviews,setMyReview]=useState([])
  const { user } = use(AuthContext);
  
  useEffect(() => {
    fetch(`http://localhost:3500/myReview?email=${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then(res => res.json())
      .then(data => {
        setMyReview(data);
        console.log(data)
      });
      
  }, [user]);

    const handelDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3500/deleteReview/${id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              const filterReviews = myReviews.filter(singleReview => singleReview._id !== id);
              setMyReview(filterReviews);
             Swal.fire({
               title: 'Deleted!',
               text: 'Your review has been deleted.',
               icon: 'success',
             });
            });
        }
          
      });
   
      
    }
    
  return (
    <div>
      <section className="my-review card w-11/12 mx-auto   py-8">
        <p className="bg-linear-to-r to-[#1E90FF]  via-[#00BFFF] from-[#1E90FF] bg-clip-text text-transparent text-xl text-center font-bold py-5">
          My Review
        </p>
        <div className=" overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Food name</th>
                <th>Restaurant name</th>
                <th>posted date</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map(singleReview => (
                <tr key={singleReview._id}>
                  <td>
                    <img
                      src={singleReview.foodImage}
                      alt="food-image"
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td>{singleReview.foodName}</td>
                  <td>{singleReview.restaurantName}</td>
                  <td>{new Date(singleReview.date).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        handelDelete(singleReview._id);
                      }}
                      className="btn  btn-outline btn-secondary"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link className="btn  btn-outline btn-info">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyReviews;