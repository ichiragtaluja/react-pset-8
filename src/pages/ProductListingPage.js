import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

export function ProductListingPage({ products }) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <h1>Product Listing Page</h1>
      
      {products.map((product) => {
        const { id, name, description, price, quantity, category, brand } =
          product;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <Link to={`/about/${id}`}>Visit Item</Link>
            <p>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </p>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
