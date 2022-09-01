const express = require("express")
const UserRouter= express.Router()
const User= require("../models/User.model")
const OTP= require("../models/otp.model")
const { readFileSync } = require("fs");
const hbs = require("handlebars");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")


const EMAIL = "kaela.murphy93@ethereal.email";
const PASSWORD = "KFmxB9kYGqcFw4Wjcm";

const transport = nodemailer.createTransport({
   host: "smtp.ethereal.email",
  // service:"gmail",
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

UserRouter.post("/signup", async(req, res) => {
   const reqs= req.body
   const data= await User.create(reqs)
   res.send(data)
});

UserRouter.post("/login",async (req, res) => {
  const {name, mob_num} = req.body;
  const validUser= await User.findOne({name, mob_num})
  if(!validUser){
      return res.status(401).send({message:"Invalid Credentials"})
  }
  const token = jwt.sign({
      name:validUser.name,
      email:validUser.email,
      mob_num:validUser.mob_num,
      about:validUser.about
  },"Secret")
  return res.status(201).send({validUser,token})
});

UserRouter.post("/getotp",async (req, res) => {
  const {email} = req.body
  const sendotp= Math.floor(1000 + Math.random() *9000)
  const template = hbs.compile(readFileSync("./login.hbs", "utf8"))

  transport.sendMail({
    from:"chitchat@gmail.com",
    to:email,
    subject: "OTP",
    text:"Your otp here",
    html: template({
      OTP:sendotp
    })
  }).then((info)=>{
    const data= new OTP({
      email:email,
      otp:sendotp,
    })
    data.save()
    return res.send({ message: "mail sent succesfully", data });
  })
});

UserRouter.post("/verifyemail",async (req, res) => {
  try{
    const {email,otp}=req.body;
    const findEmail= await OTP.findOne({email}).lean().exec()
    if(findEmail.otp === otp){
       return res.status(200).send({message:"login successful"}) 
    }
    return res.status(403).send({message:"Invalid OTP"})
    }
    catch(err){
        return res.send({message:err.message})
    }
});

// UserRouter.get("/getUser", (req, res) => {
//   console.log("get");
// });

module.exports = UserRouter;
