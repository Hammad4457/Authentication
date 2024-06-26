import { Link } from "react-router-dom";
import MenuComponent from "../General Components/MenuComponent";
import Header from "../General Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";
import TodoUser from "../General Components/TodoUser";

function Users() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dotStatus, setDotStatus] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      // If successful, update the user data by refetching it
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(
        "An error occurred while deleting the user. Please try again later."
      );
    }
  };

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(
        "An error occurred while fetching user data. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  
  return (
    <div>
      <Header pageName="Users" />
      <div className="flex">
        <div className="w-64">
          <MenuComponent color2={"blue-700"} />
        </div>

        <div className=" flex-grow h-full bg-gray-100  ">
          <div className=" mb-[8%]  mt-11 mx-auto md:ml-11 w-[88%] h-[96%] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md  ">
            <h1 className="m-5 font-bold text-2xl">Online User</h1>
            <div className="ml-10 md:ml-60 mb-5 flex space-x-28">
              <h1 className="text-lg  font-medium">UserNames</h1>
              <h1 className="text-lg hidden md:block font-medium">Emails</h1>
              <h1 className="text-lg hidden md:block px-28 font-medium">Roles</h1>
            </div>
            {isLoading && (
              <div className="flex justify-center items-center min-h-screen">
                <div className="absolute top-[250px]">
                  <CircularProgress />
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center items-center min-h-screen text-red-600">
                {error}
              </div>
            )}
            <div className="h-[450px] ">
              {currentItems.map((item, index) => (
                <div
                  key={item._id}
                  className="mb-3 py-3 flex border-b space-x-20"
                >
                  <div className="w-32 ml-10 md:px-20 md:ml-44 underline text-blue-700">{item.name}</div>
                  <div className="mr-80 w-32 hidden md:block ">{item.email}</div>{" "}
                  <div className="mr-80 hidden md:block w-32 px-24 ">{item.role}</div>{" "}
                  <div className="w-32  flex justify-end items-center ">
                    <button
                      className="mx-auto"
                      onClick={() => {
                      setSelectedUser(item._id)
                      setDotStatus(!dotStatus)
                      }}
                    >
                      <img src="src\assets\Frame.png" alt="Todo" />
                    </button>
                    {dotStatus && selectedUser === item._id && (
                      <TodoUser
                        onDelete={() => {
                          
                          deleteUser(item._id);
                         // setSelectedUser(null);
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 ml-[42%] md:ml-0 md:left-1/2 transform -translate-x-1/2">
                <Pagination
                  count={Math.ceil(userData.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
