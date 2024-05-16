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
        <div className="flex   mt-2 px-4 " onClick={()=>{
          onDelete()
          windows.location.href="/Task"
          
          }}>
          <button className="flex">
            <img className="mt-1" src="src/assets/Delete.png" alt="Delete" />
            <text className="ml-2 ">Delete</text>
          </button>
          
        </div>

        <div className="flex mt-2 px-4">
          <button className="flex" onClick={()=>{
            setEditModal(true);
          }}>
            <img className="mt-1" src="src/assets/Edit.png" alt="Edit" />
            <span className="ml-2">Edit</span>
          </button>
          
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
