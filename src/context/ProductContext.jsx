import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 1000,
    headers: { Fakestoreapi: "foobar" },
  });
  useEffect(() => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
