import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.cartQuantity,
    0
  );
  return (
    <>
      <h1>Items in cart</h1>
      <h2>Total Items: {totalItems}</h2>
      {cartItems.map(
        ({
          id,
          name,
          description,
          price,
          quantity,
          category,
          brand,
          cartQuantity,
        }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <h4>Quantity in cart: {cartQuantity}</h4>

            <br />
            <br />
          </div>
        )
      )}
    </>
  );
}
