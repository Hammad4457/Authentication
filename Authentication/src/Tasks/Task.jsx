import React from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";

function Task() {
  return (
    <div>
      <Header pageName="Tasks"></Header>
      <div className="flex h-auto">
        <div className="flex h-screen w-[16.6%] ">
          <MenuComponent color3={"blue-700"}></MenuComponent>
        </div>
        <div className="w-[84.4%]  border-1   bg-[gray]">
          <div className=" h-screen w-[82%] mx-auto mt-12 mb-12 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
export default Task;
