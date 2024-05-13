import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutSvg from "../svg Components/LogoutSvg";

function MenuComponent({ color1, color2, color3 }) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [userRole, setUserRole] = useState(null);
  const [menu, setMenu] = useState(true);

  function handleMenu() {
    setMenu(!menu);
  }
 

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    localStorage.removeItem("jsonwebtoken"); // Remove JWT token from local storage
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    // Function to retrieve user role from token in local storage
    const getUserRoleFromToken = () => {
      try {
        const token = localStorage.getItem("jsonwebtoken");
        //  console.log("Token from localStorage:", token); // Log token
        if (token) {
          const tokenPayload = token.split(".")[1]; // Extracting payload part
          const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
          //console.log("Decoded Token Payload:", decodedPayload); // Log decoded payload
          setUserRole(decodedPayload.role); // Set user role
          //console.log("Decoded Token Role:", decodedPayload.role); // Log user role
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    getUserRoleFromToken(); // Call the function when component mounts
  }, []);

  console.log("color: ", `text-${color2}`)

  return (
    <div className="relative">
      <div className="md:block">
        <button onClick={handleMenu}>
          <h2 className="font-bold text-lg mt-10 mx-4">Menu</h2>
        </button>

        <br />

        <Link to={"/Dashboard"}>
          {menu && (
            <button
              className={`relative mt-2 w-[80%] sm:w-88 h-8 shadow rounded-lg mx-4`}
            >
              <svg
                className={`h-6 w-8 text-${color1} absolute top-1/2 transform -translate-y-1/2 ml-2`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className={`hidden sm:block md:mr-8 text-${color1}`}>
                Dashboard
              </span>
            </button>
          )}
        </Link>

        {userRole === "admin" && (
          <Link to={"/Users"}>
            {menu && (
              <button className={`relative h-8 mx-4 w-[80%] sm:w-88  mt-5 `}>
                <svg
                  className={`h-6 w-8 text-${color2} absolute top-1/2 transform -translate-y-1/2 ml-2`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span
                  className={`hidden sm:block md:mr-20  md:ml-4 text-${color2}`}
                >
                  User's
                </span>
              </button>
            )}
          </Link>
        )}
        {menu && (
          <Link to={"/Task"}>
            <button className={`relative h-8 mx-4 w-[80%] sm:w-88 mt-5 `}>
              <svg
                className={`h-6 w-8 text-${color3} absolute top-1/2 transform -translate-y-1/2 ml-2`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                <line x1="11" y1="6" x2="20" y2="6" />
                <line x1="11" y1="12" x2="20" y2="12" />
                <line x1="11" y1="18" x2="20" y2="18" />
              </svg>
              <span className={`hidden sm:block ml-2 md:mr-20 text-${color3}`}>
                Task
              </span>
            </button>
          </Link>
        )}
      </div>
      {menu && (
        <div >
          <button className="relative w-[80%]  sm:w-88 h-8 mx-4 mt-5 ">
            <svg
              className="h-6 w-8 text-black absolute top-1/2 transform -translate-y-1/2 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className=" ml-2 hidden sm:block  md:mr-14">Setting</span>
          </button>
          </div>
        )}
        
        <div >
  <button className=" relative w-[80%] sm:w-88 h-8 mx-6 mt-5 " onClick={() => {
    handleLogout();
    handleSetActiveLink("/logout");
  }}>
    <svg
      class="h-6 w-8 text-black absolute top-1/2 transform -translate-y-1/2 "
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
      <path d="M20 12h-13l3 -3m0 6l-3 -3" />
    </svg>
    <span className="hidden sm:block text-center md:mr-16">Logout</span>
  </button>
</div>

  </div>
      
  
  );
}

export default MenuComponent;
