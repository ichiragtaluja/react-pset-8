import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.cartQuantity,
    0
  );
  return (
    <>
      <h1>Items in cart : {totalItems} items</h1>

      {cartItems.map((cartItem) => {
        const {
          id,
          name,
          description,
          price,
          quantity,
          category,
          brand,
          cartQuantity,
        } = cartItem;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity in cart: {cartQuantity}</p>
            <button onClick={() => removeFromCart(cartItem)}>
              Remove from cart
            </button>

            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
