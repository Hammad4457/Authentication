import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onDelete }) => {
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
        <button>
          <img src="src/assets/Edit.png" alt="Edit" />
        </button>
        <text className="ml-2">Edit</text>
      </div>
    </div>
  );
};

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
