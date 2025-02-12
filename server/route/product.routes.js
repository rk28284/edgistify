const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getProductById,
  postProduct,
} = require("../controllers/product.controller");

// Get all products
productRouter.get("/product", getAllProducts);

// Get a single product by ID
productRouter.get("/product/:id", getProductById);

//post
productRouter.post("/product/add",postProduct);

module.exports = productRouter;
