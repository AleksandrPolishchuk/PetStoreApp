import { useState, useEffect } from "react";
import "./products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="products">
      <h1>Products List</h1>
    </div>
  );
};

export default Products;
