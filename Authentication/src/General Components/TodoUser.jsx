import React from "react";

const TodoUser = ({ onDelete }) => {
  const handleDelete = () => {
    // Assuming taskId is provided by the parent component
    console.log("onDelete from the TodoUser");
    onDelete();
  };

  return (
    <div className="absolute right-12  bg-white">
      <div className="flex mt-2 px-4 ">
        <button onClick={handleDelete}>
          <img className="" src="src/assets/Delete.png" alt="Delete" />
        </button>
        <text className="ml-2">Delete</text>
      </div>
    </div>
  );
};

export default TodoUser;
