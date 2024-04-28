import React from "react";
import Chart from "../General Components/Chart";
import Calendar from "../General Components/Calendar";

function Analytics_User() {
  return (
    <div className=" bg-gray-300 w-auto h-[100%] border ">
      <div className=" bg-white border-1 h-[92%] mt-8 py-12 mx-16 mb-4 ">
        <div className="grid grid-cols-4 px-4 space-x-4 ">
          <div className="h-32  rounded-md  border-1 bg-pink-100">
            <p className="mx-8">Total Task</p>
            <p className="text-xl mt-2 px-4 text-gray-600">90/100</p>
          </div>
          <div className="h-32 rounded-md  border-1 bg-sky-200">
            <p className="mx-8">Completed Task</p>
            <p className="text-xl px-4 mt-2 text-gray-600">80/100</p>
          </div>
          <div className="h-32  rounded-md   border-1 bg-orange-100">
            <p className="mx-8">Pending Task</p>
            <p className="text-xl px-4 mt-2 text-gray-600">50/100</p>
          </div>
          <div className="h-32 rounded-md  border-1 bg-emerald-100">
            <p className="mx-8">Decline Task</p>
            <p className="text-xl px-4 mt-2 text-gray-600">10/100</p>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-4 mb-32 px-4 mt-10 bg-white">
          <div className="h-52 rounded-md   border-1 bg-white">
            <p className="mx-40 font-bold  ">Total Task Ratio</p>
            <div className="px-8">
              {" "}
              <Chart></Chart>
            </div>
          </div>
          <div className="h-52 rounded-md   border-1 bg-white">
            <div className="px-24">
              <Calendar></Calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics_User;
