import React from "react";

const Review = ({reviews}) => {
    // const {_id,customerName,reviewText}=reviews;
    const {customerName,reviewText,stars}=reviews;
  return (
    
<div className="w-full max-w-sm rounded-lg border border-primary shadow-md">
    <div className="flex flex-col items-center pb-10">
        <img className="bg-red-200 mt-3 mb-3 w-24 h-24 rounded-full shadow-lg" src="https://imgs.search.brave.com/9JdKPC11-2QyaY-ExDGdO4OTIvjRyxVt36-3gQshi3Q/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFyLXZv/bC0zLTIvNTEyLzkt/NTEyLnBuZw" alt={customerName}/>
        <h5 className="mb-1 text-2xl font-bold text-primary">{customerName}</h5>
       
        <span className="text-xl text-black ">y"{reviewText}"</span>
        <span className=" text-xl text-black">Stars:{stars}</span>
    </div>
</div>

  );
};

export default Review;
