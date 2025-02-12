const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

// Place an order
const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { shippingAddress } = req.body;

    const cart = await Cart.findOne({ userId }).populate("products.productId");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalPrice = 0;
    const productsList = [];

    for (let item of cart.products) {
      const product = item.productId;
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: `Product ${product.name} is out of stock` });
      }

      totalPrice += product.price * item.quantity;
      productsList.push({
        productId: product._id,
        quantity: item.quantity,
        price: product.price
      });

      product.stock -= item.quantity;
      await product.save();
    }

    const order = new Order({
      userId,
      products: productsList,
      totalPrice,
      shippingAddress,
      paymentStatus: "Pending",
      orderStatus: "Pending"
    });

    await order.save();
    await Cart.findOneAndDelete({ userId });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  placeOrder,
};