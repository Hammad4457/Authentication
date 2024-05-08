import { React } from "react";
import PropTypes from "prop-types";
function Todo({ onDelete }) {
  const handleDelete = () => {
    // Assuming taskId is provided by the parent component
    onDelete();
  };

  return (
    <div className="absolute bg-white border-2 mr-2">
      <div className="flex mt-2 px-4">
        <button onClick={onDelete}>
          <img className="" src="src\assets\Delete.png"></img>
        </button>
        <text className="ml-2">Delete</text>
      </div>
      <div className="flex mt-2 px-4">
        <button>
          <img src="src\assets\Eye.png"></img>
        </button>
        <text className="ml-2">View</text>
      </div>
      <div className="flex mt-2 px-4">
        <button>
          <img src="src\assets\Edit.png"></img>
        </button>
        <text className="ml-2">Edit</text>
      </div>
    </div>
  );
}
Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
