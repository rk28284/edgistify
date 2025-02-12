
const Cart = require("../model/cart.model");
const Product = require("../model/product.model");

// Add a product to the cart
const addToCart = async (req, res) => {
  try {
    console.log(req.body)
    const { price, stock } = req.body;
    const userId = req.user.id;

    // Validate input
    if (!price || !stock || stock <= 0) {
      return res.status(400).json({ message: "Invalid product price or stock quantity" });
    }

    // Check if the product exists
    const product = await Product.findOne({ price:price });
    console.log("Product found:", product);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check stock availability
    if (product.stock < stock) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    // Add product to the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === product._id.toString()
    );

    if (productIndex > -1) {
      // Product already exists in the cart, update quantity
      cart.products[productIndex].stock += stock;
    } else {
      // Add new product to cart
      cart.products.push({ productId: product._id, stock });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  addToCart,
};
