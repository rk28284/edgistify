const express = require("express");
const cartRouter = express.Router();
const { addToCart } = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/auth.middleware"); // JWT Middleware

// Add a product to the cart
cartRouter.post("/add-to-cart",authMiddleware, addToCart);

module.exports = cartRouter;