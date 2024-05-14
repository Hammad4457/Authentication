import React, { useState, useEffect } from "react";
import Chart from "../General Components/Chart";
import Calendar from "../General Components/Calendar";
import axios from "axios";

function Analytics_User() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [declinedTasks, setDeclinedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const token = localStorage.getItem("jsonwebtoken");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    axios
      .get("http://localhost:3000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const fetchedTasks = response.data;
        setTasks(fetchedTasks);
        const currentDateTime = new Date();
        const declinedTasksCount = fetchedTasks.filter(
          (task) => new Date(task.endDate) < currentDateTime
        ).length;
        setDeclinedTasks(declinedTasksCount);

        const pendingTasks = fetchedTasks.filter(
          (task) => new Date(task.endDate) >= currentDateTime
        ).length;
        setPendingTasks(pendingTasks);
        setTotalTasks(fetchedTasks.length);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };
  const completedTask = totalTasks - (pendingTasks + declinedTasks);
  const pending =(pendingTasks/totalTasks)*100
  const decline =(declinedTasks/totalTasks)*100
  const complete =(totalTasks/100)*100

  return (
    <div className="bg-gray-100  w-auto h-full border">
      <div className="bg-white rounded-xl border-blue-800  h-5/6 mt-12  mx-4 sm:mx-16 ">
        <h1 className="text-lg font-bold mx-4 ">Analytics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-4">
          <div className="h-32 rounded-md border-1 bg-purple-50">
            <p className="mx-6 mt-2">Total Task</p>
            <p className="text-xl mt-2 px-6 text-gray-600">{totalTasks}/100</p>
            <svg
                className="mx-auto mt-4  md:w-[40%] lg:w-full "
            width="201"
            height="20"
            viewBox="0 0 201 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
            <rect x="1" y="1" width={`${complete}%`} height="18" rx="4" fill="#4BCBEB" />
          </svg>
          </div>
          <div className="h-32 rounded-md border-1 bg-blue-100">
            <p className="mx-6 mt-2">Completed Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">
              {completedTask}/{totalTasks}
            </p>
           
            <svg
                className="mx-auto mt-4 md:w-[40%] lg:w-full"
            width="201"
            height="20"
            viewBox="0 0 201 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
            <rect x="1" y="1" width={`${completedTask}%`} height="18" rx="4" fill="#5CB85C" />
          </svg>
          </div>
          <div className="h-32 rounded-md border-1 bg-yellow-100">
            <p className="mx-6 mt-2">Pending Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">
              {pendingTasks}/{totalTasks}
            </p>
            
            <svg
                className="mx-auto mt-4 md:w-[40%] lg:w-full"
            width="201"
            height="20"
            viewBox="0 0 201 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
            <rect x="1" y="1" width={`${pending}%`} height="18" rx="4" fill="#F0AD4E" />
          </svg>
          </div>
          <div className="h-32 rounded-md border-1 bg-green-100">
            <p className="mx-6 mt-2">Decline Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">
              {declinedTasks}/{totalTasks}
            </p>
            {/* <img
              className="mt-4 mx-auto"
              src="src\assets\Line4.png"
              alt="Decline Task"
            /> */}
            <svg
                className="mx-auto mt-4 md:w-[40%] lg:w-full"
            width="201"
            height="20"
            viewBox="0 0 201 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
            <rect x="1" y="1" width={`${decline}%`} height="18" rx="4" fill="#D9534F" />
          </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-80 px-4 mt-12 bg-white">
          <div className="h-52 rounded-md border-1 bg-white">
            <p className="mx-4 sm:mx-40 font-bold">Total Task Ratio</p>
            <div className="px-4  sm:px-8">
              
            </div>
            <Chart />
          </div>
          
          <div className="h-52 rounded-md border-1 bg-white">
            <div className="px-4 md:mt-4 sm:px-28  ">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics_User;
