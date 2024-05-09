import React from "react";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import AddModal from "./AddModal";

const TodoUser = () => {
  return (
    <div className="relative bg-white">
      <div className="flex mt-2 px-4 ">
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
          <img className="flex" src="src/assets/Edit.png" alt="Edit" />
        </button>
        <text className="ml-2">Edit</text>
      </div>
    </div>
  );
};

export default TodoUser;
