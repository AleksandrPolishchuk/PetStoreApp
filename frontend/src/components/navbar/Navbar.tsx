import React from "react";
import "./navbar.scss";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="brand">Pet Store</div>
      <div className="hamburger">
        <Menu />
      </div>
      <div className="menu"></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/add">Add Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
