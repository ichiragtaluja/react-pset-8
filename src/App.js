import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductListingPage } from "./pages/ProductListingPage";
import { About } from "./pages/About";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/about/:productId" element={<About />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
