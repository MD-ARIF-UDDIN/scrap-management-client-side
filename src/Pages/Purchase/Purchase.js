import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  // const [tools, setTools] = useState(id);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/tool/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setTools(data));
  // }, [id]);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery(["tool", id], () =>
    fetch(`http://localhost:5000/tool/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const { _id, name, image, price, description, quantity, minimum } = tools;
  // const orderErr = () => {
  //   const purQuantity = document.querySelector(".searchField").value;
  //   if (quantity <= purQuantity) {
  //     return <h1>Order cant be higher than quantity</h1>;
  //   }
  // };
  const handlePurchase = (event) => {
    event.preventDefault();
    //orderErr();
    const purchaseQuantity = event.target.minquantity.value;
    let remaining = parseInt(quantity) - purchaseQuantity;
    const purchase = {
      toolsId: _id,
      tools: name,
      purchaseQuantity,
      price,
      customer: user.email,
      customerName: user.displayName,
      phone: event.target.phone.value,
    };
    console.log(purchase);
    let newTools = {
      name,
      image,
      price,
      quantity: remaining,
      description,
      minimum,
    };

    fetch(`http://localhost:5000/tool/${id}`, {
      method: "PUT",
      body: JSON.stringify(newTools),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        toast(`purchased`);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            alt="tool"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="font-bold">Available Quantity:{quantity}</h1>
            <h1 className="font-bold">Minimum order Quantity:{minimum}</h1>
            <h1 className="font-bold">Price:{price}</h1>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <form onSubmit={handlePurchase}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              value={user?.email || ""}
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Order Quantity</span>
            </label>
            <input
            
              type="number"
              name="minquantity"
              placeholder="Enter how many to purchase"
              min={minimum}
              required
              className="input searchField input-bordered input-primary "
            />
          </div>
          
          <input
            type="submit"
            value="Submit"
            className="btn w-full max-w-xs mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
