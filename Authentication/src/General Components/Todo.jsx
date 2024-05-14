import React from "react";
import { useState, useEffect } from "react";
import EditModal from "./EditModal";

function Todo({
  onDelete,
  selectedTaskId,
  //onEdit,
  handleEditTask,
  task,
  setEditModal,
  editModal,
}) {
  
  const handleEditSubmit = (updatedData) => {
    // Pass the updated data to the parent component
    handleEditTask(updatedData);
  };

  return (
    <>
      <div className="absolute bg-white">
        <div className="flex mt-2 px-4 " onClick={onDelete}>
          <button>
            <img className="" src="src/assets/Delete.png" alt="Delete" />
          </button>
          <text className="ml-2">Delete</text>
        </div>

        <div className="flex mt-2 px-4">
          <button onClick={()=>{
            setEditModal(true);
          }}>
            <img src="src/assets/Edit.png" alt="Edit" />
          </button>
          <span className="ml-2">Edit</span>
        </div>
      </div>
      {editModal && (
        <EditModal
          onSubmit={handleEditSubmit}
          task={task}
          selectedTaskId={selectedTaskId}
          setEditModal={setEditModal}
        />
      )}
    </>
  );
}

export default Todo;
