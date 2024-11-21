import { useState } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-4 screen flex items-caenter justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
