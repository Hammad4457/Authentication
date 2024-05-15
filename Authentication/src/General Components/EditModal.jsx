import React, { useState, useEffect } from "react";
import axios from "axios";

function EditModal({ onSubmit, task, selectedTaskId , setEditModal }) {
  const [cross, setCross] = useState(true);
  const [data, setData] = useState({
    title: "",
    description: "",
    attachment: "",
    startDate: "",
    endDate: "",
  });
  console.log(task);

  useEffect(() => {
    const formattedData = {
      ...task,
      startDate: task.startDate
        ? new Date(task.startDate).toISOString().split("T")[0]
        : "",
      endDate: task.endDate
        ? new Date(task.endDate).toISOString().split("T")[0]
        : "",
    };
    setData(formattedData); // Set initial data when task prop changes
  }, [task]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("jsonwebtoken");
      if (!token) {
        console.error("No token found in local storage");
        return;
      }
      const response = await axios.put(
        `http://localhost:3000/api/tasks/${selectedTaskId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onSubmit(response.data);
       // Pass updated task data to parent component
      setEditModal(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  function crossDisplay() {
    setCross(!cross);
  }

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex">
              <h2 className="text-xl font-bold mx-auto mb-4 mt-1 text-center">
                Edit Task
              </h2>

              <button onClick={crossDisplay} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p>
              Fill the information below to edit the task as per your
              requirement.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1 font-bold">
                  Enter Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-1 font-bold">
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <label htmlFor="attachment" className="block mb-1 font-bold">
                Attachment:
              </label>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                className="w-full h-40 border border-gray-300 rounded-md py-1 px-3"
              />
              <div className="flex">
                <p className="text-xs">Supports PNG, JPEG formats</p>
              </div>
              <label className="block mb-1 font-bold">Start Date:</label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="startDate"
                value={data.startDate}
                onChange={handleChange}
                required
              ></input>
              <label className="block mb-1 font-bold">End Date:</label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="endDate"
                value={data.endDate}
                onChange={handleChange}
                required
              ></input>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 ml-48 mt-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
