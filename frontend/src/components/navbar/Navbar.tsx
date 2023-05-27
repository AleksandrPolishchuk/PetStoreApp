import React from "react";
import "./navbar.scss";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div>
      <div className="brand">Pet Store</div>
      <div className="hamburger">
        <Menu />
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Navbar;
