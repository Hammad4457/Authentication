import React from "react";
import Chart from "../General Components/Chart";
import Calendar from "../General Components/Calendar";

function Analytics_User() {
  return (
    <div className="bg-gray-300 w-auto h-screen border">
      <div className="bg-white border-1 h-5/6 mt-8 py-12 mx-4 sm:mx-16 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="h-32 rounded-md border-1 bg-pink-100">
            <p className="mx-6 mt-2">Total Task</p>
            <p className="text-xl mt-2 px-6 text-gray-600">90/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line1.png"
              alt="Total Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-sky-200">
            <p className="mx-6 mt-2">Completed Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">80/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line2.png"
              alt="Completed Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-orange-100">
            <p className="mx-6 mt-2">Pending Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">50/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line3.png"
              alt="Pending Task"
            />
          </div>
          <div className="h-32 rounded-md border-1 bg-emerald-100">
            <p className="mx-6 mt-2">Decline Task</p>
            <p className="text-xl px-6 mt-2 text-gray-600">10/100</p>
            <img
              className="mt-4 mx-auto"
              src="src\assets\Line4.png"
              alt="Decline Task"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-32 px-4 mt-10 bg-white">
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
