import React, { useState, useEffect } from "react";

import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
import axios from "axios";
import Todo from "../General Components/Todo";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [dotStatus, setDotStatus] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [userRole, setUserRole] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [editModal, setEditModal] = useState(false);
  
  

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
    getUserRoleFromToken();
     // Call function to retrieve user role
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
    setLoading(true);
    const token = localStorage.getItem("jsonwebtoken");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    console.log("data: ", data)

    const formData = new FormData(); 
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("attachment", data.attachment);

    axios
      .post("http://localhost:3000/api/tasks/addTasks", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        
        
        const newData=response.data
        setTasks([...tasks, newData]);
        setFilteredTasks([...filteredTasks, newData]);
        setLoading(false);
        console.log(response);
        setShowModal(false);
        
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }

  //console.log(updateTask);
  const handleEditTask = (updatedTask) => {
    // Update the task in the tasks array
    const updatedTasks = tasks.map((task) => {
      if (task._id === updatedTask._id) {
        console.log(updatedTask)
       
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks)
    // Close the edit modal
    setEditModal(false);
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
      window.location.reload();
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
        className="mx-auto w-[90%] lg:w-[400px] rounded-xl  sm:w-full sm:max-w-[calc(100%-32px)] md:w-full  mt-4 mb-8  bg-white"
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
            </button>

            {dotStatus && selectedTaskId === task._id && (
              <Todo
                selectedTaskId={selectedTaskId}
                task={task}
                handleEditTask={handleEditTask}
                onDelete={handleTodoDelete}
                onClose={handleTodoClose}
                onClick={handleDeleteTask}
                onEdit={handleTodoEdit}
                setEditModal={setEditModal}
                editModal={editModal}
              />
            )}
          </p>
        </div>
        <p className="px-2">{task.title}</p>
        <h5 className="font-bold mt-2 px-2">Description:</h5>
        <p className="px-2 mt-2">{task.description}</p>
        <h6 className="font-bold mt-2 px-2">Attachment:</h6>
        
        <div className=" mx-auto mt-1 w-[80%] h-40">
        <img className="w-full h-40 object-cover " src={"http://localhost:3000/" + task.attachment}  />
        </div>
        <div className="flex mt-2">
          <h7 className="font-bold px-2">Start Date:</h7>
          <h8 className="font-bold ml-auto mr-6">End Date:</h8>
        </div>
        <div className="flex ">
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
        <div className="md:w-5/6  border-1 bg-gray-200">
          <div className="flex flex-col md:flex-row mt-8 md:items-center">
            <div className="ml-4 md:ml-[3.5%] md:mb-0">
              <h1 className="font-bold md-ml-4  text-xl mb-4 md:mb-0">
                Start date:
              </h1>
              <div className="flex items-center">
                <input
                  className="w-[220px] px-2 h-12 mt-4 md:mt-4 rounded-xl border border-blue-200"
                  type="date"
                  onChange={handleSearchDateChange}
                  placeholder
                  required
                />
              </div>
            </div>

            <div className="ml-4 md:ml-[4%] md:mb-0 mt-4 md:mt-0">
              <h1 className="font-bold text-xl  mb-4 md:mb-0">End Date:</h1>
              <input
                className=" w-[220px] px-2 h-12 mt-4 rounded-xl border border-blue-200"
                type="date"
                onChange={handleSearchDateChange}
                placeholder
                required
              />
            </div>

            {userRole !== "admin" && (
              <div className="ml-14 md:ml-auto md:w-[20%] sm:mt-4 mr-16 md:mt-0 mt-4">
                <button onClick={() => setShowModal(true)}>
                  <img src="src\assets\Add Task.png" alt="Add Task" />
                </button>
              </div>
            )}
          </div>

          <h3 className="font-bold ml-[3.5%] mt-4 text-xl">Enter Title:</h3>
          <div className="flex border-1 border-blue-700">
            <input
              className=" rounded-l-xl ml-[3.5%] w-[43%] md:w-[31%] h-12 mt-4 px-2 border border-blue-200"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="bg-blue-200 rounded-r-xl w-[14%] md:w-1/12 h-12 mt-4 border-1 ">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 gap-y-4 gap-x-8 px-8 mt-4 border-1 rounded">
            {renderTaskDivs()}
          </div>

          {showModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
