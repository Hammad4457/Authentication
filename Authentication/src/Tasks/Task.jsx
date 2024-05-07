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
  const [loading, setLoading] = useState(true); // State for loading indicator

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

  useEffect(() => {
    fetchTasks();
  }, []);

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

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
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
                placeholder
                required
              />
            </div>

            <div className="md:ml-auto mr-16 md:mt-0 mt-4">
              <button
                onClick={() => setShowModal(true)}
              >
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
