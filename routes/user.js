const router = require("express").Router();
const userModel = require("../models/User");

router.get("/users", (req, res) => {
  res.json("Get all users");
});

router.get("/user/:id", (req, res) => {
  res.json("Get a single user.");
});

router.post("/user", (req, res) => {
  res.json("Create a new user");
});

router.patch("/user/:id", (req, res) => {
  res.json("Update user");
});

router.delete("/user/:id", (req, res) => {
  res.json("Delete user");
});

router.deleteAll();
