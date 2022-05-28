import { useState, useEffect } from "react";

const usePurchases = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-wave-41515.herokuapp.com/purchase/admin", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  }, []);
  return [purchases, setPurchases];
};

export default usePurchases;
