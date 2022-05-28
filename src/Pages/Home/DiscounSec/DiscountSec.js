import React from "react";

const DiscountSec = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/PMxXhw3/R11.jpg"
          alt="pic"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold text-primary">
            Get 50% discount on your first order
          </h1>
          <p class="py-6">
         We provide 50% discount on a product to our newly comer customer.As our 10 year celebration is coming we will be giving free shipping to every order.Stay tuned till then!
          </p>
          <button class="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSec;
