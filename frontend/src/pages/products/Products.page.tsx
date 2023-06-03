import { useState, useEffect } from "react";
import axios from "axios";
import "./products.scss";
import { IProduct } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constant";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl);
      setProducts(response.data);
    } catch (error) {
      alert("An Error Happend");
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  // console.log(products);

  return (
    <div className="products">
      <h1>Products List</h1>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Creation Time</th>
                <th>Update Time</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.updatedAt}</td>
                  <td>
                    <Button variant="outlined" color="warning" sx={{ mx: 3 }}>
                      <Edit />
                    </Button>
                    <Button variant="outlined" color="error">
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
