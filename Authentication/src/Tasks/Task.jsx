import React, { useState, useEffect } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
import axios from "axios";

import { getRole } from "../utils/GettingRole";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Function to fetch tasks from the server
  function fetchTasks() {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        const tasks = response.data;
        setTasks(tasks);
        setFilteredTasks(tasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading when fetching is done
      });
  }

  // Fetch tasks on component mount
  useEffect(() => {
    
    fetchTasks();
  }, []);

  // Function to handle submission of modal data
  function handleModalSubmit(data) {
    setLoading(true); // Start loading when submitting modal data
    axios
      .post("http://localhost:3000/api/tasks/addTasks", data)
      .then((response) => {
        const newTask = {
          id: response.data._id,
          ...data,
        };
        setTasks([...tasks, newTask]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading after submitting modal data
      });
  }

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
  };

  const handleSearchDateChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTasks = tasks.filter((task) => {
      // Filter by title
      const titleMatch = task.title.toLowerCase().includes(query);
      // Filter by start and end dates
      const startDateMatch = formatDate(task.startDate).includes(query);
      const endDateMatch = formatDate(task.endDate).includes(query);
      return titleMatch || startDateMatch || endDateMatch;
    });
    setFilteredTasks(filteredTasks);
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => {
        // Remove the deleted task from UI
        console.log(response);
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
        // Close Todo component if the deleted task is the one being displayed
        if (selectedTaskId === taskId) {
          setSelectedTaskId(null);
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  // Function to handle click on a task
  const handleClick = (taskId) => {
    setSelectedTaskId(selectedTaskId === taskId ? null : taskId);
  };

  // Function to get a random color
  const getRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-purple-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  

  // Function to render individual task divs
  const renderTaskDivs = () => {
    return filteredTasks.map((task) => (
      <div
        key={task.id}
        className="mx-auto lg:w-[400px] rounded-xl lg:max-w-[calc(100%-64px)] sm:w-full sm:max-w-[calc(100%-32px)] md:w-full md:max-w-[calc(50%-32px)] mt-4 mb-8 border-1 bg-white"
      >
        <div className={`p-4 rounded-t-xl rounded ${getRandomColor()}`}></div>
        <div className="flex">
          <h4 className="font-bold px-2">Title:</h4>
          <p className="ml-auto">
            <button onClick={() => handleClick(task._id)}>
              <img src="src\assets\Frame.png" alt="Expand" />
              {selectedTaskId === task._id && (
                <div className="absolute bg-white border-2 mr-2">
                  <div className="flex mt-2 px-4">
                    <button onClick={() => handleDeleteTask(task._id)}>
                      <img
                        className=""
                        src="src\assets\Delete.png"
                        alt="Delete"
                      />
                    </button>
                    <text className="ml-2">Delete</text>
                  </div>
                  <div className="flex mt-2 px-4">
                    <button>
                      <img src="src\assets\Eye.png" alt="View" />
                    </button>
                    <text className="ml-2">View</text>
                  </div>
                  <div className="flex mt-2 px-4">
                    <button>
                      <img src="src\assets\Edit.png" alt="Edit" />
                    </button>
                    <text className="ml-2">Edit</text>
                  </div>
                </div>
              )}
            </button>
          </p>
        </div>
        <p className="px-2">{task.title}</p>
        <h5 className="font-bold mt-2 px-2">Description:</h5>
        <p className="px-2 mt-2">{task.description}</p>
        <h6 className="font-bold mt-2 px-2">Attachment:</h6>
        <div>
          <img
            className="w-[80%] h-28 mx-auto mt-2 mb-2"
            src="src\assets\Flower.png"
            alt="Attachment"
          />
        </div>
        <div className="flex mt-2">
          <h7 className="font-bold px-2">Start Date:</h7>
          <h8 className="font-bold ml-auto mr-6">End Date:</h8>
        </div>
        <div className="flex mt-2">
          <p className="px-2">{formatDate(task.startDate)}</p>
          <p className="ml-auto mr-4">{formatDate(task.endDate)}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Header pageName="Task"  />
      {loading && ( // Render loader if loading is true
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div className="flex flex-col md:flex-row h-auto">
        <div className="md:w-1/6">
          <MenuComponent color3={"blue-700"} />
        </div>
        <div className="md:w-5/6 border-1 bg-gray-200">
          <div className="flex flex-col md:flex-row mt-8 md:items-center">
            <div className="md:ml-14 md:mb-0">
              <h1 className="font-bold text-xl mb-4 md:mb-0">Start date:</h1>
              <div className="flex items-center">
                <input
                  className="w-[220px] px-2 h-12 mt-4 md:mt-4 rounded-xl"
                  type="date"
                  onChange={handleSearchDateChange}
                  placeholder
                  required
                />
              </div>
            </div>

            <div className="md:ml-14 md:mb-0 mt-4 md:mt-0">
              <h1 className="font-bold text-xl mb-4 md:mb-0">End Date:</h1>
              <input
                className=" w-[220px] px-2 h-12 mt-4 rounded-xl"
                type="date"
                onChange={handleSearchDateChange}
                placeholder
                required
              />
            </div>
            {getRole() !== "Admin" && (
              <button
                className="h-10 ml-auto"
                onClick={() => setShowModal(false)}
              >
                <AddModal />
              </button>
            )}

            <div className="md:ml-auto mr-16 md:mt-0 mt-4">
              <button onClick={() => setShowModal(true)}>
                <img src="src\assets\Add Task.png" alt="Add Task" />
              </button>
            </div>
          </div>

          <h3 className="font-bold ml-14 mt-4 text-xl">Enter Title:</h3>
          <div className="flex border-1 border-blue-700">
            <input
              className=" rounded-l-xl ml-14 w-full md:w-[31%] h-12 mt-4 px-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="bg-blue-200 rounded-r-xl w-full md:w-1/12 h-12 mt-4">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 px-8 mt-4 border-1 rounded">
            {renderTaskDivs()}
          </div>
          {showModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
