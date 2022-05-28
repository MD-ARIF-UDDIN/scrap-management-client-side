import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { totalMoney } = order;
useEffect(()=>{
fetch('http://localhost:5000/create-payment-intent',{
  method:'POST',
  headers: {
    'content-type':'application/json',
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  body:JSON.stringify({totalMoney})
})
.then(res=>res.json())
.then(data=>{
if(data?.clientSecret){
  setClientSecret(data.clientSecret);
}
});
},[totalMoney])

  // useEffect(() => {
  //   fetch("https://tranquil-wave-41515.herokuapp.com/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //     body: JSON.stringify({ totalMoney }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.clientSecret) {
  //         setClientSecret(data.clientSecret);
  //       }
  //     });
  // }, [totalMoney]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
  };
  return (
    <>
      <form className="mb-12" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
