import { useState, useEffect } from "react";
import axios from "axios";
import "./products.scss";
import { IProduct } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constant";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl);
    } catch (error) {}
  };

  return (
    <div className="products">
      <h1>Products List</h1>
    </div>
  );
};

export default Products;
