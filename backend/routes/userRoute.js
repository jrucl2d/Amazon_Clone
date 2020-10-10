const router = require("express").Router();
const User = require("../models/userModel");

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
