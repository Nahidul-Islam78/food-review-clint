import { use } from "react";
import { AuthContext } from "../context/AuthContext";



const AddReview = () => {
  const{user}=use(AuthContext)
  const handelCreateProduct = e => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.photo.value;
    const restaurantName = e.target.restaurantName.value;
    const starRating = e.target.starRating.value;
    const reviewText = e.target.reviewText.value;
    const reviewInfo = { foodName, foodImage, restaurantName, starRating, reviewText };
    console.log(reviewInfo);
   fetch(`http://localhost:3500/addReview?email=${user.email}`, {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
       authorization: `Bearer ${user.accessToken}`
     },
     body: JSON.stringify(reviewInfo),
   })
     .then(res => res.json())
     .then(data => {
       console.log(data);
     });

  }
  
  
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handelCreateProduct}>
            <fieldset className="fieldset">
              <label className="label">Food Name</label>
              <input
                type="text"
                name="foodName"
                className="input"
                placeholder="Food Name"
              />

              <label className="label">Food Image</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Food Image"
              />
              <label className="label">Restaurant Name</label>
              <input
                type="text"
                name="restaurantName"
                className="input"
                placeholder="Restaurant Name"
              />
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input"
                placeholder="Location"
              />
              <label className="label">Star Rating</label>
              <input
                type="text"
                name="starRating"
                className="input"
                placeholder="Star Rating"
              />
              <label className="label">Review Text</label>
              <input
                type="text"
                name="reviewText"
                className="input"
                placeholder="Review Text"
              />

              <button className="btn btn-neutral mt-4">Create Review</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;