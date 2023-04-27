import { NavLink } from "react-router-dom";

export function Header() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <>
      <NavLink style={getActiveStyle} to="/products">
        Product List
      </NavLink>{" "}
      ||{" "}
      <NavLink style={getActiveStyle} to="/cart">
        My Cart
      </NavLink>{" "}
      ||{" "}
      <NavLink style={getActiveStyle} to="/wishlist">
        My Wishlist
      </NavLink>
    </>
  );
}
