const productModel = require("../model/product.model");
const Product = require("../model/product.model");
//post
const postProduct = async (req, res) => {
  let payload = req.body;
  try {
    const reqData = new productModel(payload);
    await reqData.save();
    res.status(200).send({ msg: "Product data added Successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Something Went Wrong", error: error });
  }

};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,postProduct
};
