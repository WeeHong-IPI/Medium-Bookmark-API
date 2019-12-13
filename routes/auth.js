const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/User");

router.post("/login", (req, res) => {
  // Demo User
  const user = {
    id: 1,
    username: "Brad",
    email: "brad@gmail.com"
  };
  jwt.sign({ user }, "secretkey", { expiresIn: "1h" }, (err, token) => {
    res.json({
      token
    });
  });
});

router.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(function(hash) {
      const user = userModel({
        email: "weehongkane@gmail.com",
        password: hash
      });
      user.save().then(data => {
        res.json(data);
      });
    })
    .catch(error => {
      console.log(error.message);
      res.statusCode(400).message("Invalid request.");
    });
});

module.exports = router;
