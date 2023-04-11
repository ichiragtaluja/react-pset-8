import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const selectedItem = cartItems.find(({ id }) => id === item.id);

    if (selectedItem) {
      selectedItem.cartQuantity += 1;
      setCartItems((cartItems) => [...cartItems]);
    } else {
      setCartItems((cartItems) => [...cartItems, { ...item, cartQuantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const selectedItem = cartItems.find(({ id }) => id === item.id);
    if (selectedItem.cartQuantity > 1) {
      selectedItem.cartQuantity -= 1;
      setCartItems((cartItems) => [...cartItems]);
    } else {
      const filteredCartItems = cartItems.filter(({ id }) => id != item.id);
      setCartItems(filteredCartItems);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
