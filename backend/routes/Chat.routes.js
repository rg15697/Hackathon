const express = require("express");
const ChatRouter = express.Router();
const User = require("../models/User.model");
const { readFileSync } = require("fs");
const hbs = require("handlebars");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

ChatRouter.get("/", async (req, res) => {
  const user_msg = await User.find({ message });
  res.send(user_msg);
});

ChatRouter.post("/postmessage", async (req, res) => {
  const { message } = req.body;
  const user_msg = await User.create({ message });
  res.send(user_msg);
});

module.exports = ChatRouter;
