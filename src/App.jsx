import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./components/ProductCard";
/*
- Set up a new React application using Vite.
- Integrate Axios for API calls to a public API (e.g., JSONPlaceholder or any open API of choice).
- Display the fetched data in a component.
- Implement basic state management with useState to manage the API response data.

*/
function App() {
  const [products, setProducts] = useState([]);
  const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 1000,
    headers: { "Fakestoreapi": "foobar" },
  });
  useEffect(() => {
    instance.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-5">
        {products.map((item, index) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
    </>
  );
}

export default App;
