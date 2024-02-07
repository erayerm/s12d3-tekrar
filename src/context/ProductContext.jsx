import { createContext } from "react";
import { useFetchData} from "../hooks/useAxios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const { data: products, loading, error } = useFetchData("/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  /*const instance = axios.create({
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
  */
 if(error){
    console.log(error);
    return "";
 }
  if(loading){
    return ""
  }
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
