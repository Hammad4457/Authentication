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
      <div className="flex  flex-wrap   justify-center items-center">
        <div className=" sm:w-[16.7%]  absolute left-0 w-full border-2 border-gray-100 rounded items-center flex">
          <img className="ml-2 w-8" src="src\assets\Vector.png" alt="Logo" />
          <h1 className="text-left ml-2  h-12 content-center text-blue-900">
            Task List Manager
          </h1>
        </div>
        <div className="w-full sm:w-4/5 bg-white flex items-center  h-12 ml-48 content-center">
          <h2 className="font-bold  text-xl ml-4 flex-grow">
            {pageName}
          </h2>
          <div className="flex w-12 ml-auto mr-4 px-2">
            <Link to="/Notifications">
              <img
                className="mt-1 mr-4"
                src="src\assets\bell.png"
                alt="Notification Bell"
              />
            </Link>
          </div>
          <div className="flex mr-4 items-center">
            <img
              className="h-6"
              src="src\assets\UserIcon.png"
              alt="User Icon"
            />
            <div className="ml-3">
              <h1 className="font-bold ml-[10%]">{userName}</h1>
              <p className="text-xs">Status 200</p>
            </div>
            <img
              className="mt-2 ml-6 items-center h-6 w-4"
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
