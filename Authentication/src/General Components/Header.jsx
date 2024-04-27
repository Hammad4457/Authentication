import React from "react";
import { Link } from "react-router-dom";
function Header({ pageName }) {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[16.6%] border-2 border-gray-100 rounded items-center flex ">
          {/* <img src={logo} alt="" /> */}
          <img className="ml-2 " src="src\assets\Vector.png"></img>
          <h1 className="text-left ml-2 h-12 content-center text-blue-900">
            Task List Manager
          </h1>
        </div>
        <div className="ml-auto flex items-center  w-[84.4%] bg-gray-50 h-12  content-center">
          <h2 className="font-bold text-left ml-4 text-xl">{pageName}</h2>
          <div className="flex ml-auto mr-2 px-2 ">
            <Link to="/Notifications">
              <img className="mt-2  " src="src\assets\bell.png"></img>
            </Link>
          </div>
          <div className="flex mr-12 items-center">
            <img className="h-8" src="src\assets\UserIcon.png"></img>
            <div>
              <h1 className="font-bold ml-3">Hammad Khalil</h1>
              <p className="ml-3">Status 200</p>
            </div>
            <img
              className="pt-3 items-center h-8 w-12"
              src="src\assets\GreaterThan.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
