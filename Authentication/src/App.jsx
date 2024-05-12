import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Forget from "./Pages/ForgetPassword";
import Reset from "./Pages/Reset";
import AdminBoard from "./Dashboard/AdminDashboard";
import Users from "./Dashboard/Users";
import Task from "./Tasks/Task";
import Notification from "./Notification/Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

// Import ProtectedRoute separately
import PrivateRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<LogIn />} />

        <Route path="/Dashboard" element={<PrivateRoute />}>
          <Route index element={<AdminBoard />} />
        </Route>

        <Route path="/Users" element={<PrivateRoute />}>
          <Route index element={<Users />} />
        </Route>

        <Route path="/Notifications" element={<PrivateRoute />}>
          <Route index element={<Notification />} />
        </Route>

        <Route path="/Task" element={<PrivateRoute />}>
          <Route index element={<Task />} />
        </Route>

        <Route path="/Forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

App.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
