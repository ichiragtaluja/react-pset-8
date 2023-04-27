import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProductListingPage } from "./pages/ProductListingPage";
import { About } from "./pages/About";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { fakeFetch } from "./data/fakeFetch";
import { useState, useEffect } from "react";
import { Error } from "./pages/Error";
import { Header } from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState();

  // const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");

      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (error) {
      setStatus(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            products.length > 0 ? (
              <ProductListingPage products={products} />
            ) : (
              <Error />
            )
          }
        />
        <Route
          path="/products"
          element={<ProductListingPage products={products} />}
        />
        <Route
          path="/about/:productId"
          element={<About products={products} />}
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
