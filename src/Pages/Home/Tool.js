import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tools }) => {
  const { _id, name, image, price, description, quantity } = tools;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="tool" className="rounded-xl" />
      </figure>
      <div className="h-1/2 card-body ">
        <h2 className="card-title ">{name}</h2>
        <h1>Available Quantity:{quantity}</h1>
        <h1>Price:{price}</h1>
        <p>{description}</p>
        <div className="card-actions flex items-center justify-center">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn btn-primary "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
