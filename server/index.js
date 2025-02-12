const express = require("express");
const cors = require("cors")
const bodyParser= require("body-parser");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT||8081;
app.use(cors());
//user route

const userRouter = require("./route/user.routes");
const productRouter = require("./route/product.routes");
const orderRouter = require("./route/order.routes");
const cartRouter = require("./route/cart.routes");

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to the Edgidtify backend" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong,try again" });
  }

})
app.use("/", userRouter);
app.use("/",productRouter)
app.use("/",orderRouter)
app.use("/",cartRouter)

app.listen(PORT, async () => {
  console.log("Backend Is Runing");
  try {
    await connection;
console.log("Connected to Sever At Port: ",PORT);
  } catch (error) {
    console.log(error);
    console.log("error getting to connect with data base");
  }
});
