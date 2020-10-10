import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute";
const app = express();

app.use(express.json());
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => console.log(err.reason));

app.use("/api/users", userRouter);

app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res, next) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "product not found" });
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
