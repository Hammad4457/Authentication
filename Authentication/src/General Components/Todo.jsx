import React from "react";
import { useState } from "react";

import AddModal from "./AddModal";

const Todo = ({ onDelete, onEdit, task }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    console.log("Status before update:", modalStatus);
    setModalStatus(!modalStatus);
    console.log("Status after update:", modalStatus);
  };
  //   const handleClick2 = () => {
  //     console.log("Before changing:", status);
  //     setStatus(!setStatus);
  //     console.log("After Changing:", status);
  //   };

  const handleEditSubmit = (updatedData) => {
    // Pass the updated data to the parent component
    onEdit(updatedData);
  };

  return (
    <div className="absolute bg-white">
      <div className="flex mt-2 px-4 " onClick={onDelete}>
        <button>
          <img className="" src="src/assets/Delete.png" alt="Delete" />
        </button>
        <text className="ml-2">Delete</text>
      </div>

      <div className="flex mt-2 px-4">
        <button onClick={handleClick}>
          <img className="flex" src="src/assets/Edit.png" alt="Edit" />
        </button>
        <text className="ml-2">Edit</text>
      </div>
      {modalStatus && <AddModal />}
    </div>
  );
};

export default Todo;
