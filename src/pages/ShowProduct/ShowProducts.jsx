import React, { useContext, useEffect } from "react";
import EachProduct from "../../components/AllProduct/AllProduct";
import Navigation from "../../components/Navigation/Navigation";

const ShowProducts = () => {
  useEffect(() => {
    window.scroll(0, 0);
    console.log("Hello");
  }, []);
  return (
    <div>
      <EachProduct />
    </div>
  );
};

export default ShowProducts;
