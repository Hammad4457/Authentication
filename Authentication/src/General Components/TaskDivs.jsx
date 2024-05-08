import React, { useState } from "react";
import Todo from "./Todo";

const TaskDivs = ({
  task,
  handleDeleteTask,
  setSelectedTaskId,
  selectedTaskId,
}) => {
  const [showTodo, setShowTodo] = useState(false);
  const handleClick = () => {
    setShowTodo(!showTodo);
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  const handleTodoDelete = () => {
    // Assuming selectedTaskId is passed as props
    if (task._id) {
      handleDeleteTask(task._id);
    }
  };

  const handleTodoClose = () => {
    // Assuming setSelectedTaskId is passed as props
    setSelectedTaskId(null);
  };

  return (
    <div
      key={task.id}
      className=" mx-auto lg:w-[400px] rounded-xl lg:max-w-[calc(100%-64px)] sm:w-full sm:max-w-[calc(100%-32px)] md:w-full md:max-w-[calc(50%-32px)] mt-4 mb-8 border-1 bg-white"
    >
      <div className={`p-4 rounded-t-xl rounded ${getRandomColor()}`}></div>
      <div className="flex">
        <h4 className="font-bold px-2">Title:</h4>
        <p className="ml-auto">
          <button onClick={() => handleClick(task._id)}>
            <img src="src\assets\Frame.png" alt="Expand" />
            {selectedTaskId === task._id && (
              <Todo
                onClick={handleClick}
                onDelete={handleTodoDelete}
                onClose={handleTodoClose}
              />
            )}
            {showTodo && <Todo onClose={() => setShowTodo(false)} />}
          </button>
        </p>
      </div>
      <p className="px-2">{task.title}</p>
      <h5 className="font-bold mt-2 px-2">Description:</h5>
      <p className="px-2 mt-2"> {task.description}</p>
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
  );
};

export default TaskDivs;
