import { Link } from "react-router-dom";
import MenuComponent from "../General Components/MenuComponent";
import Header from "../General Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import { CircularProgress } from "@mui/material";
import TodoUser from "../General Components/TodoUser";

function Users() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dotStatus, setDotStatus] = useState(false);

  const [selectedUser, setSelectedUser] = useState();

  // function handleClick(userID) {
  //   setDotStatus(!dotStatus);
  //   deleteUser(userId);
  // }

  function handleTodoClick(userId) {
    setDotStatus(!dotStatus);

    setSelectedUser(userId);
  }

  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleTodoClose = () => {
    setSelectedTaskId(null);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      // If successful, update the user data by refetching it
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
      // setError(
      //   "An error occurred while deleting the user. Please try again later."
      // );
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

  console.log("Selected User Id:", selectedUser);

  return (
    <div>
      <Header name="Users"></Header>
      <div className="flex h-screen">
        <div className="h-screen w-64">
          <MenuComponent color2={"blue-700"}></MenuComponent>
        </div>

        <div className="pl-[2px] w-10/12 bg-[#F6F8FA]">
          <div className="mt-11 ml-11 w-[1150px] h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate relative">
            <h1 className="m-5 font-bold text-2xl">Online User</h1>
            <div className="ml-60 mb-5 flex space-x-28">
              <h1 className="text-lg font-medium">UserName</h1>
              <h1 className="text-lg font-medium">email</h1>
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
            <div className=" h-[450px] ">
              {currentItems.map((item, index) => {
                console.log(item._id);
                return (
                  <div
                    key={item._id}
                    className="mb-3 py-3 flex border-b space-x-20"
                  >
                    <div className="w-32 px-20 ml-44 ">{item.name}</div>
                    <div className="mr-80 w-32 ">{item.email}</div>{" "}
                    <div className="w-32 flex justify-end items-center ">
                      <button
                        className="mx-auto"
                        onClick={() => {
                          console.log("User id going:", item._id);

                          handleTodoClick(item._id);
                          console.log(dotStatus);
                        }}
                      >
                        <img src="src\assets\Frame.png"></img>
                      </button>
                      {dotStatus && selectedUser === item._id && (
                        <TodoUser
                          onDelete={() => {
                            console.log("Deleting the userId", selectedUser);
                            deleteUser(item._id);
                            onclose = { handleTodoClose };
                          }}
                        ></TodoUser>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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
