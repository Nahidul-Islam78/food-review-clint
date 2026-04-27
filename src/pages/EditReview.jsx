import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const EditReview = () => {
  const { id } = useParams()
  console.log(id);
  const [myReviews, setMyReview] = useState([])
  const { user, loading } = use(AuthContext);
  if (loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }

  useEffect(() => {
      fetch(`http://localhost:3500/myReview?email=${user.email}`, {
        headers: { authorization: `Bearer ${user.accessToken}` },
      })
        .then(res => res.json())
        .then(data => {
          setMyReview(data);
        });
        
  }, [user]);
  const editedReview = myReviews.find(singleReview => singleReview._id === id); 
  //console.log(editedReview)
  const handelEditReview = e => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurantName = e.target.restaurantName.value;
    const location = e.target.location.value;
    const starRating = e.target.starRating.value;
    const reviewText = e.target.reviewText.value;
    const editedReview = { foodName, foodImage, restaurantName, location, starRating, reviewText };
    fetch(`http://localhost:3500/updateReview/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body:JSON.stringify(editedReview)
    }).then(res => res.json()).then(data => {
      
      console.log(data)
      toast.success('Edited review successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    })


  }

  return (
    <div className="h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handelEditReview}>
            <fieldset className="fieldset ">
              <label className="label">Food Name</label>
              <input
                type="text"
                name="foodName"
                className="input"
                placeholder="Food Name"
                defaultValue={editedReview?.foodName}
                required
              />

              <label className="label">Food Image</label>
              <input
                type="text"
                name="foodImage"
                className="input"
                placeholder="Food Image"
                defaultValue={editedReview?.foodImage}
                required
              />
              <label className="label">Restaurant Name</label>
              <input
                type="text"
                name="restaurantName"
                className="input"
                placeholder="Restaurant Name"
                defaultValue={editedReview?.restaurantName}
                required
              />
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input"
                placeholder="Location"
                defaultValue={editedReview?.location}
                required
              />
              <label className="label">Star Rating</label>
              <input
                type="text"
                name="starRating"
                className="input"
                placeholder="Star Rating"
                defaultValue={editedReview?.starRating}
                required
              />
              <label className="label">Review Text</label>
              <input
                type="text"
                name="reviewText"
                className="input"
                placeholder="Review Text"
                defaultValue={editedReview?.reviewText}
                required
              />

              <button className="btn btn-neutral mt-4">Submit Review</button>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default EditReview;