import { useState } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="p-4 screen flex items-caenter justify-center">
      <Home />
    </div>
  );
}

export default App;
