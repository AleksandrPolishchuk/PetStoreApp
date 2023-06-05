import React from "react";
import "./add-product.scss";
import { TextField, Button } from "@mui/material";

const AddProduct = () => {
  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <TextField autoComplete="off" label="Brand" variant="outlined" />
      <TextField autoComplete="off" label="Title" variant="outlined" />
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
