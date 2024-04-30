import React, { useState, useRef } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
// import Todo from "../General Components/Todo";
import TaskDivs from "../General Components/TaskDivs";

function Task() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", 
      startDate: "2024-04-19",
      endDate: "2024-04-30"
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", 
      startDate: "2024-04-20",
      endDate: "2024-05-01"
    }
    , {
      id: 3,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", 
      startDate: "2024-04-19",
      endDate: "2024-04-30"
    },
    {
      id: 4,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", 
      startDate: "2024-04-20",
      endDate: "2024-05-01"
    }
  ]);
  
  const [showModal, setShowModal] = useState(false);

  
  function handleModalSubmit(data) {
    const newTask = {
      id: tasks.length + 1,
      ...data
    };
    setTasks([...tasks, newTask]);
    setShowModal(false);
  }


  return (
    <div>
      <Header pageName="Task"></Header>
      <div className="flex h-auto">
        <div className="flex h-screen w-1/6">
          <MenuComponent color3={"blue-700"}></MenuComponent>
        </div>
        <div className="w-5/6 border-1 bg-gray-200">
          <div className="flex mt-12 ml-8">
            <h1 className="font-bold text-xl">Start date:</h1>
            <h2 className="font-bold ml-52 text-xl">End date:</h2>

            <button className="mx-auto" onClick={() => setShowModal(true)}>
              <img className="ml-96 " src="src\assets\Add Task.png"></img>
            </button>
          </div>
          <div className="flex">
            <input
              className="ml-8 w-1/5 h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            ></input>
            <input
              className="ml-16 w-1/5 h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            ></input>
          </div>
          <h3 className="font-bold ml-8 mt-4 text-xl">Enter Title:</h3>
          <div className="flex border-1 border-blue-700">
            <input
              className=" rounded rounded-l-md rounded-r-none ml-8 w-1/3 h-12 mt-4 px-2 "
              type="search"
              placeholder="Search"
              required
            ></input>
            <button className=" bg-blue-200 w-1/12 rounded-l-none rounded-r-md h-12 mt-4">
              Search
            </button>
          </div>
          <div className="grid grid-cols-3 gap-y-4 gap-x-8 px-8 mt-4 border-1 rounded">
            {tasks.map((task) => (
              <TaskDivs task = {task} />
            ))}
          </div>
          {showModal && <AddModal onSubmit={handleModalSubmit} />}
          
        </div>
      </div>
    </div>
  );
}

export default Task;
