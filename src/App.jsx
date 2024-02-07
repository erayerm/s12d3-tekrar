import "./App.css";
import Products from "./components/Products";
import { ProductContextProvider } from "./context/ProductContext";

function App() {

  return (
    <>
      <ProductContextProvider>
        <Products />
      </ProductContextProvider>
    </>
  );
}

export default App;
