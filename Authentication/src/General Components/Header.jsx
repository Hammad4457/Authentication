import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Header({ pageName }) {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem("jsonwebtoken");
        if (!token) {
          console.error("No token found in local storage");
          setIsLoading(false);
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}`
        );
        const userData = response.data;
        setUserName(userData.name);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoading(false);
      }
    };
    fetchUserName();
  }, []);

  return (
    <>
      <div className="flex  flex-wrap  justify-center items-center">
        <div className=" sm:w-[16.4%] absolute left-0  border-2 border-gray-100 rounded items-center flex">
          <img className="ml-2 w-8" src="src\assets\Vector.png" alt="Logo" />
          <h1 className="text-left ml-2  h-12 content-center text-blue-900">
            Task List Manager
          </h1>
        </div>
        <div className="w-full sm:w-4/5 flex items-center bg-gray-50 h-12 ml-48 content-center">
          <h2 className="font-bold text-left ml-4 text-xl flex-grow">
            {pageName}
          </h2>
          <div className="flex ml-auto mr-2 px-2">
            <Link to="/Notifications">
              <img
                className="mt-2"
                src="src\assets\bell.png"
                alt="Notification Bell"
              />
            </Link>
          </div>
          <div className="flex mr-4 items-center">
            <img
              className="h-8"
              src="src\assets\UserIcon.png"
              alt="User Icon"
            />
            <div className="ml-3">
              <h1 className="font-bold">{userName}</h1>
              <p>Status 200</p>
            </div>
            <img
              className="pt-3 items-center h-8 w-12"
              src="src\assets\GreaterThan.png"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
