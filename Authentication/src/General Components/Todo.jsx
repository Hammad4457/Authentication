import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import AddModal from "./AddModal";

const Todo = ({ onDelete, onEdit, task }) => {
  const [modalStatus, setModalStatus] = useState(false);

  function handleClick() {
    setModalStatus(!modalStatus);
  }

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
        <button>
          <img src="src/assets/Eye.png" alt="View" />
        </button>
        <text className="ml-2">View</text>
      </div>
      <div className="flex mt-2 px-4">
        <button onClick={handleClick}>
          <img className="flex" src="src/assets/Edit.png" alt="Edit" />
        </button>
        <text className="ml-2">Edit</text>
      </div>
      {modalStatus && (
        <AddModal onSubmit={handleEditSubmit} initialData={task} />
      )}
    </div>
  );
};

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

export default Todo;
