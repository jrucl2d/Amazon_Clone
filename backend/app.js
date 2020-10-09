import express from "express";
import data from "./data";
const app = express();

app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});
app.get("/", (req, res, next) => {
  console.log("zz");
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
