import React, { useState } from "react";
import "./add-product.scss";
import { TextField, Button } from "@mui/material";
import { IProduct } from "../../types/global.typing";

const AddProduct = () => {
  const [product, setProduct] = useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        variant="outlined"
        name="brand"
        value={product.brand}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Title"
        variant="outlined"
        name="title"
        value={product.title}
        onChange={changeHandler}
      />
      <Button variant="outlined" color="primary">
        Save
      </Button>
      <Button variant="outlined" color="secondary">
        Back
      </Button>
    </div>
  );
};

export default AddProduct;
