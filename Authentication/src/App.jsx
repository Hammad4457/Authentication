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
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<LogIn onLogin={handleLogin} />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute element={<AdminBoard />} loggedIn={loggedIn} />
          }
        />
        <Route
          path="/Users"
          element={<ProtectedRoute element={<Users />} loggedIn={loggedIn} />}
        />
        <Route
          path="/Task"
          element={<ProtectedRoute element={<Task />} loggedIn={loggedIn} />}
        />
        <Route
          path="/Notifications"
          element={
            <ProtectedRoute element={<Notification />} loggedIn={loggedIn} />
          }
        />
      </Routes>
    </Router>
  );
}

App.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
