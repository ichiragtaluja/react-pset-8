import { createContext } from "react";
import { useState } from "react";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishListItems, setWishListItems] = useState([]);

  const addToWishList = (item) => {
    const selectedItem = wishListItems.find(({ id }) => item.id === id);

    if (selectedItem) {
      selectedItem.wishlistQuantity += 1;
      setWishListItems((wishListItems) => [...wishListItems]);
    } else {
      setWishListItems((wishListItems) => [
        ...wishListItems,
        { ...item, wishlistQuantity: 1 },
      ]);
    }
  };
  console.log(wishListItems);

  const removeFromWishList = (item) => {
    const selectedItem = wishListItems.find(({ id }) => item.id === id);
    if (selectedItem.wishlistQuantity > 1) {
      selectedItem.wishlistQuantity -= 1;
      setWishListItems([...wishListItems]);
    } else {
      const filteredItems = wishListItems.filter(({ id }) => id !== item.id);
      setWishListItems(filteredItems);
    }
  };

  return (
    <WishListContext.Provider
      value={{ wishListItems, addToWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}
