import { useParams } from "react-router-dom";

export function About({ products }) {
  // const { id, name, description, price, quantity, category, brand } = products;
  const { productId } = useParams();
  console.log("param id", productId);

  const getProductDetails = (productId, products) =>
    products.find((product) => product.id === Number(productId));

  const { id, name, description, price, quantity, category, brand } =
    getProductDetails(productId, products);

  return (
    <>
      <h1>About </h1>
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <p>Price: {price}</p>
    </>
  );
}
