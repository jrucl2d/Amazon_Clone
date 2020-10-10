const router = require("express").Router();
const User = require("../models/userModel");
import getToken from "../util";

router.post("/signin", async (req, res, next) => {
  try {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(user),
      });
    } else {
      res.status(401).send({ msg: "Invalid Email or Password" });
    }
  } catch (error) {}
});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Yu",
      email: "yu@gmail.com",
      password: "123",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
