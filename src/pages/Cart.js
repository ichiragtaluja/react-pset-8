import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <h1>Items in cart</h1>
      {cartItems.map(
        ({ id, name, description, price, quantity, category, brand }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>

            <br />
            <br />
          </div>
        )
      )}
    </>
  );
}
