import React, { useState, useEffect } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
import TaskDivs from "../General Components/TaskDivs";
import axios from "axios";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

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
      });
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  function handleModalSubmit(data) {
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
      });
  }

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); 
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
  };

  return (
    <div>
      <Header pageName="Task" />
      <div className="flex flex-col md:flex-row h-auto">
        <div className="md:w-1/6">
          <MenuComponent color3={"blue-700"} />
        </div>
        <div className="md:w-5/6 border-1 bg-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 ml-8">
            <h1 className="font-bold text-xl mb-4 md:mb-0">Start date:</h1>
            <h2 className="font-bold text-xl mb-4 ml-[23%] md:mb-0">End date:</h2>
            <button
              className="ml-auto md:mr-8"
              onClick={() => setShowModal(true)}
            >
              <img src="src\assets\Add Task.png" alt="Add Task" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <input
              className="ml-8 w-full md:w-1/4 h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            />
            <input
              className="ml-4 md:ml-16 w-full md:w-1/4 h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            />
          </div>
          <h3 className="font-bold ml-8 mt-4 text-xl">Enter Title:</h3>
          <div className="flex border-1 border-blue-700">
            <input
              className="rounded rounded-l-md ml-8 w-full md:w-[47%] h-12 mt-4 px-2"
              
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="bg-blue-200 rounded-r-md w-full md:w-1/12 h-12 mt-4">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 px-8 mt-4 border-1 rounded">
            {filteredTasks.map((task) => (
              <TaskDivs key={task.id} task={task} />
            ))}
          </div>
          {showModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
