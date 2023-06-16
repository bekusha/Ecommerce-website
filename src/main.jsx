import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const AppContext = createContext();
const Main = (props) => {
  const [backData, setBackData] = useState([]);
  useEffect(() => {
    // Fetch product data from the backend API
    axios
      .get("https://backecommerce-production-d257.up.railway.app/products") // Replace with your actual API endpoint
      .then((response) => {
        setBackData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(backData);

  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        quantity,
        setQuantity,

        backData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Main>
    <App />
  </Main>
);
