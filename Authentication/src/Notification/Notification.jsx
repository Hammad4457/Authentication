import React from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
function Notification() {
  return (
    <div>
      <Header pageName="Notifications"></Header>
      <div className="flex h-auto">
        <div className="flex h-screen w-[16.8%] ">
          <MenuComponent color1="blue-900" userOff={true}></MenuComponent>
        </div>
        <div className="w-[84.4%] border-1 bg-gray-100">
          <div></div>
          <h1 className="text-2xl px-12 mt-4">Notification</h1>
          <p className="text-xs mt-1 px-12">You have 2 unread notifications.</p>
          <h1 className="text-xl px-12 mt-8">Today</h1>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Pending Task</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Due Task Date</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <h1 className="text-xl px-12 mt-8">Yesterday</h1>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Lorem Ispum</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Lorem Ispum</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <h1 className="text-xl px-12 mt-8">Mon 25 Mar 23</h1>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Lorem Ispum</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" mt-2 flex">
            <img
              className="w-[4%] h-[28%]  mx-12 mt-2"
              src="src\assets\Notification.png"
            ></img>
            <div>
              <p className=" text-lg text-black-900 mt-1 flex">Lorem Ispum</p>
              <p className="text-xs mt-3">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notification;
