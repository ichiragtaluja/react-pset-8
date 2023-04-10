import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fakeFetch } from "../data/fakeFetch";

export function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");

      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Product Listing Page</h1>
      {products.map(
        ({ id, name, description, price, quantity, category, brand }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <Link to={`/about/${id}`}>Visit Item</Link>
            <br />
            <br />
          </div>
        )
      )}
    </>
  );
}
