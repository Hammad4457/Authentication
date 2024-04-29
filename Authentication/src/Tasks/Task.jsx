import React, { useState, useRef } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";
import Todo from "../General Components/Todo";

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
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const frameRef = useRef();

  function handleModalSubmit(data) {
    const newTask = {
      id: tasks.length + 1,
      ...data
    };
    setTasks([...tasks, newTask]);
    setShowModal(false);
  }

  function getRandomColor() {
    const colors = ["red", "yellow", "orange", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function handleFrameClick(task) {
    setSelectedTask(task);
    setShowTodo(!showTodo);
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
              <div key={task.id} className="h-[99%] w-[96%] mb-4 border-1 rounded bg-white z">
                <div className={`p-4 rounded bg-${getRandomColor()}-500`}></div>
                <div className="flex">
                  <h4 className="font-bold px-2">Title:</h4>
                  <p className="ml-auto">
                    <button ref={frameRef} onClick={() => handleFrameClick(task)}>
                      <img src="src\assets\Frame.png"></img>
                      {showTodo && (
            <Todo
              task={selectedTask}
              onClose={() => setShowTodo(false)}
             
            />
          )}
                    </button>
                  </p>
                </div>
                <p className="px-2">{task.title}</p>
                <h5 className="font-bold px-2">Description:</h5>
                <p className="px-2"> {task.description}</p>
                <h6 className="font-bold px-2">Attachment</h6>
                <div>
                  <img className="w-60 h-24 mx-auto mt-2 mb-2" src="src\assets\Flower.png"></img>
                </div>
                <div className="flex">
                  <h7 className="font-bold px-2">Start Date:</h7>
                  <p className="px-2">{task.startDate}</p>
                  <h8 className="font-bold ml-auto mr-6">End Date:</h8>
                  <p className="ml-auto mr-2">{task.endDate}</p>
                </div>
              </div>
            ))}
          </div>
          {showModal && <AddModal onSubmit={handleModalSubmit} />}
          
        </div>
      </div>
    </div>
  );
}

export default Task;
