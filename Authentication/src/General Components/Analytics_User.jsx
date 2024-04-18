import React from "react";


function Analytics_User() {
    return (
        
        
        <div className=" bg-gray-300 w-full h-full border-4 border-black ">
        <div className=" bg-white border-4 mt-4 mx-8 border-black ">
        <div className="grid grid-cols-4 space-x-2 px-12 py-12 ">
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
        <div className="grid grid-cols-2 space-x-4 mb-12 px-10 mt-32">
        <div className="h-48 rounded-md   border-1 bg-gray-400">
            <p className="mx-40">Total Task Ratio</p>
        </div>
        <div className="h-48  rounded-md   border-1 bg-gray-400">
            <p className="mx-40"></p>
        </div>
        </div>
        </div>
        
        </div>    
        
     
    );
  }
  
export default Analytics_User;
