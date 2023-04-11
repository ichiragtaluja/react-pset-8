import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <NavLink to="/products">Product List</NavLink> ||{" "}
      <NavLink to="/cart">My Cart</NavLink> ||{" "}
      <NavLink to="/wishlist">My Wishlist</NavLink>
    </>
  );
}
