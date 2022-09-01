const { Router } = require("express");
const UserModel = require("./models/User.model");
const jwt = require("jsonwebtoken");

const UserRouter = Router();

UserRouter.post("/signup", (req, res) => {
  console.log("get");
});

UserRouter.post("/login", (req, res) => {
  console.log("get");
});

UserRouter.post("/getotp", (req, res) => {
  console.log("get");
});

UserRouter.post("/verifyemail", (req, res) => {
  console.log("get");
});

UserRouter.get("/getUser", (req, res) => {
  console.log("get");
});

module.exports = UserRouter;
