import React from "react";

const Review = ({reviews}) => {
    // const {_id,customerName,reviewText}=reviews;
    const {customerName,reviewText,stars}=reviews;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{customerName}</h2>
        <p>{reviewText}</p>
        <p>Ratings:{stars} star</p>
      </div>
    </div>
  );
};

export default Review;
