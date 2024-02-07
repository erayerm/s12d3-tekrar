import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap gap-5">
      {products.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
}
