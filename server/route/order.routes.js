const express = require("express");
const orderRouter = express.Router();
const { placeOrder } = require("../controllers/order.controller");
const authMiddleware = require("../middleware/auth.middleware"); // JWT Middleware

// Place an order
orderRouter.post("/place", authMiddleware, placeOrder);

module.exports = orderRouter;