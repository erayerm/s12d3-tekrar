import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
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
    <div className="flex flex-wrap gap-5">
      {products.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
}
