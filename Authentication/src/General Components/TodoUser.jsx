import React from "react";

import axios from "axios";

const TodoUser = ({ userId }) => {
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      // If successful, update the user data by refetching it
      // fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
      // setError(
      //   "An error occurred while deleting the user. Please try again later."
      // );
    }
  };

  return (
    <div className="absolute right-80  bg-white">
      <div className="flex mt-2 px-4 ">
        <button
          onClick={() => {
            console.log("deleting the userId:", userId);
            // onClick();
            deleteUser(userId);
          }}
        >
          <img className="" src="src/assets/Delete.png" alt="Delete" />
        </button>
        <text className="ml-2">Delete</text>
      </div>
    </div>
  );
};

export default TodoUser;
