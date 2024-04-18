import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Forget from "./Pages/ForgetPassword";
import Reset from "./Pages/Reset";
import AdminBoard from "./Dashboard/AdminDashboard";
import Users from "./Dashboard/Users"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Dashboard" element={<AdminBoard />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
