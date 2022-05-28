import { useState, useEffect } from "react";

const usePurchases = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-wave-41515.herokuapp.com/purchase")
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  }, []);
  return [purchases, setPurchases];
};

export default usePurchases;
