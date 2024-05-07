import React from "react";
import Chart from "../General Components/Chart";
import Calendar from "../General Components/Calendar";

function Analytics_User() {
  return (
    <div className="bg-gray-100 w-auto h-screen border">
      
      <div className="bg-white rounded-md border-blue-300 border-1  h-5/6 mt-12  mx-4 sm:mx-16 ">
        <h1 className="text-lg font-bold mx-4 ">Analytics</h1> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
          
          <div className="h-32 rounded-md border-1 bg-purple-50">
            <p className="mx-6 mt-2">Total Task</p>
            <p className="text-xl mt-2 px-6 text-gray-600">90/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line1.png"
              alt="Total Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-blue-100">
            <p className="mx-6 mt-2">Completed Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">80/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line2.png"
              alt="Completed Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-yellow-100">
            <p className="mx-6 mt-2">Pending Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">50/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line3.png"
              alt="Pending Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-green-100">
            <p className="mx-6 mt-2">Decline Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">10/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line4.png"
              alt="Decline Task"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-32 px-4 mt-20 bg-white">
          <div className="h-52 rounded-md border-1 bg-white">
            <p className="mx-4 sm:mx-40 font-bold">Total Task Ratio</p>
            <div className="px-4 sm:px-8">
              <Chart />
            </div>
          </div>
          <div className="h-52 rounded-md border-1 bg-white">
            <div className="px-4 sm:px-24">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics_User;
