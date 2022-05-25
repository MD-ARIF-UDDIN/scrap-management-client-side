import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
//   const handleItemDelete = (id) => {
//     const confirm = window.confirm("Do you delete this item?");

//     if (confirm) {
//       fetch(`https://fierce-stream-21058.herokuapp.com/fruit/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           const remainingItem = orders.filter((item) => item._id !== id);
//           setOrders(remainingItem);
//         });
//     }
//   };
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/purchase?customer=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  
  return (
    <div>
      <h2>My orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tool</th>
              <th>Orderd Quantity</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.customerName}</td>
                <td>{a.tools}</td>
                <td>{a.purchaseQuantity}</td>

                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                {/* <td><button  onClick={() => handleItemDelete(orders._id)} className="btn btn-xs btn-warning">delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
