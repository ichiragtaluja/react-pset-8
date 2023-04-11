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
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
