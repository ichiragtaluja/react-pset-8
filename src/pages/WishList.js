import { useContext } from "react";
import { WishListContext } from "../context/WishListProvider";

export function WishList() {
  const { wishListItems, removeFromWishList } = useContext(WishListContext);

  const totalItems = wishListItems.reduce(
    (acc, item) => acc + item.wishlistQuantity,
    0
  );
  return (
    <>
      <h1>WishList Items : {totalItems} </h1>
      {wishListItems.map((wishListItem) => {
        const {
          id,
          name,
          description,
          price,
          quantity,
          category,
          brand,
          wishlistQuantity,
        } = wishListItem;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity in cart: {wishlistQuantity}</p>
            <button onClick={() => removeFromWishList(wishListItem)}>
              Remove from wishlist
            </button>

            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
