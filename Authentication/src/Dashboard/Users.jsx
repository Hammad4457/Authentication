import { Link } from "react-router-dom";
import MenuComponent from "../General Components/MenuComponent";
import Header from "../General Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import { CircularProgress } from "@mui/material";


function Users() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 6;

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const tasksResponse = await axios.get("http://localhost:3000/api/tasks");
      const userResponse = await axios.get("http://localhost:3000/api/users");
      setUserData(tasksResponse.data);
      setUserNames(userResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Header pageName="User's" />
      <div className="flex flex-col md:flex-row h-auto">
        <div className="md:w-1/6">
          <MenuComponent color2={"blue-700"} />
        </div>
        <div className="mt-11 ml-11 w-[1150px] h-[600px] bg-white rounded-xl border-[1.45px] drop-shadow-md truncate">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          <div className="flex">
            <h1 className="text-lg font-medium w-32 mx-8">Customer Name</h1>
            <h1 className="text-lg font-medium w-28 mx-[8%]">Start Date</h1>
            <h1 className="text-lg font-medium w-28 mx-[8%]">End Date</h1>
            <h1 className="text-lg font-medium w-32 mx-[9%]">Overdue Days</h1>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[250px]">
                <CircularProgress />
              </div>
            </div>
          )}
          <div className="h-[450px]">
            {currentItems.map((item, index) => {
              return (
                <div key={index} className="mb-3 py-3 flex">
                  <div className="w-20 mx-8">{item.customerName}</div>
                  <div className="w-12 mx-[12%] ">
                    {formatDate(item.startDate)}
                  </div>
                  <div className="w-12 mx-[10%]">
                    {formatDate(item.endDate)}
                  </div>
                  <div className="w-12 mx-auto px-4">
                    {calculateDaysLeft(item.startDate, item.endDate)}
                  </div>
                  <div
                   className="w-12 flex justify-end items-center gap-12">
                    <button >
                      <svg
                        className="ml-5"
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                          fill="#4BCBEB"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="border-1 border-black"></hr>
                </div>
              );
            })}
          </div>
          <div className="flex px-5 mb-2">
            <p className="text-xs mx-right">rows per page</p>
            <div className="mx-auto ">
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
  );
}

export default Users;
