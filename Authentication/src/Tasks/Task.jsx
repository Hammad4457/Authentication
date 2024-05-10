import React, { useState, useEffect } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
import axios from "axios";
import Todo from "../General Components/Todo";
import { jwtDecode } from "jwt-decode";
import { getRole } from "../utils/GettingRole";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [dotStatus, setDotStatus] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [userRole, setUserRole] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Function to fetch tasks from the server
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

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
    getUserRoleFromToken(); // Call function to retrieve user role
  }, []);

  const getUserRoleFromToken = () => {
    try {
      const token = localStorage.getItem("jsonwebtoken");
      if (token) {
        const tokenPayload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(tokenPayload));
        setUserRole(decodedPayload.role);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };
  // const getUserIdFromToken = () => {
  //   try {
  //     // console.log("UserIdFromToken");
  //     const token = localStorage.getItem("jsonwebtoken");
  //     console.log("Token:", token);
  //     if (token) {
  //       const decodedToken = jwtDecode(token);
  //       console.log("Decoded Token:", decodedToken);
  //       const userId = decodedToken.userId;
  //       console.log("User ID:", userId); // Add this line to check the extracted user ID
  //       return userId;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //     return null;
  //   }
  // };

  function fetchTasks() {
    setLoading(true);
    const token = localStorage.getItem("jsonwebtoken");
    if (!token) {
      console.error("No token found in local storage");
      setLoading(false);
      return;
    }
    let url = "http://localhost:3000/api/tasks";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const tasks = response.data;
        setTasks(tasks);
        setFilteredTasks(tasks);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // Function to handle submission of modal data
  function handleModalSubmit(data) {
    const token = localStorage.getItem("jsonwebtoken");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    axios
      .post("http://localhost:3000/api/tasks/addTasks", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks([...tasks, data]);
        setFilteredTasks([...filteredTasks, data]);
        setShowModal(false);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }
  //Editing the Task
  const handleEditTask = (updatedTask) => {
    // Update the task in the tasks array
    const updatedTasks = tasks.map((task) => {
      if (task._id === updatedTask._id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);

    // Close the edit modal
    setSelectedTaskId(null);

    // Update the task on the server
    const token = localStorage.getItem("jsonwebtoken");
    axios
      .put(`http://localhost:3000/api/tasks/${updatedTask._id}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Task updated successfully:", response);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  const handleDeleteTask = (taskId) => {
    console.log("Attempting to Delete");
    const token = localStorage.getItem("jsonwebtoken");
    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedTasks = filteredTasks.filter(
          (task) => task._id !== taskId
        );
        setFilteredTasks(updatedTasks);
        if (selectedTaskId === taskId) {
          setSelectedTaskId(null);
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const handleTodoEdit = () => {
    if (selectedTaskId) {
      handleEditTask(selectedTaskId);
    }
  };

  const handleTodoDelete = () => {
    if (selectedTaskId) {
      handleDeleteTask(selectedTaskId);
    }
  };

  const handleTodoClose = () => {
    setSelectedTaskId(null);
  };

  const handleTodoClick = (taskId) => {
    if (selectedTaskId === taskId) {
      setSelectedTaskId(null);
    } else {
      setSelectedTaskId(taskId);
    }
  };
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
            <button
              onClick={() => {
                setDotStatus(!dotStatus);
                handleTodoClick(task._id);
              }}
            >
              <img src="src/assets/Frame.png" alt="Expand" />
              {console.log("tASK ID:", task._id)}
              {dotStatus && selectedTaskId === task._id && (
                <Todo
                  //task={task}
                  onDelete={handleTodoDelete}
                  onClose={handleTodoClose}
                  onClick={handleDeleteTask}
                  onEdit={handleTodoEdit}
                />
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
            src="src/assets/Flower.png"
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
      <Header pageName="Task" />
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

            <button
              className="h-10 ml-auto"
              onClick={() => setShowModal(!showModal)}
            >
              {showModal && <AddModal />}
            </button>

            {userRole !== "admin" && (
              <div className="md:ml-auto mr-16 md:mt-0 mt-4">
                <button onClick={() => setShowModal(true)}>
                  <img src="src\assets\Add Task.png" alt="Add Task" />
                </button>
              </div>
            )}
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
