import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productRoute";
import orderRouter from "./routes/orderRoute";
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
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
