import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatBot from "../components/ChatBot/ChatBot";
import HomePage from "../pages/HomePage";
import Signin from "../pages/SignIn";
import Signup from "../pages/Signup";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Routes>
  );
};

export default Allroutes;
