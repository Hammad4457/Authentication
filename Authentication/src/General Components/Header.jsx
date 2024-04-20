import React from "react";
function Header({ pageName }) {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[16.6%] border-2 rounded-md">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-left ml-2 h-12 content-center">
            Task List Manager
          </h1>
        </div>
        <div className="ml-auto flex items-center justify-center w-[84.4%] bg-white-100 h-12 border-2 rounded-md content-center">
          <h2 className="font-bold text-left px-3">{pageName}</h2>
          <img className="mt-2 mr-2 ml-auto" src="src\assets\bell.png"></img>
        </div>
      </div>
    </>
  );
}
export default Header;
