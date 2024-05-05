import React from "react";
import MenuComponent from "../General Components/MenuComponent";
import Header from "../General Components/Header";
function Users() {
  const data = [
    {
      CustomerName: "John Wick",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "01-03-2024",
      OverdueDay: "3",
    },
    {
      CustomerName: "Adam Smith",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "01-03-2024",
      OverdueDay: "2",
    },
    {
      CustomerName: "Hamza Khalid",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "04-03-2024",
      OverdueDay: "2",
    },
    {
      CustomerName: "Azaan Noor",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "07-03-2024",
      OverdueDay: "5",
    },
    {
      CustomerName: "Ibrahim Pasha",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "08-03-2024",
      OverdueDay: "3",
    },
    {
      CustomerName: "Haider Ali",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "11-03-2024",
      OverdueDay: "7",
    },
    {
      CustomerName: "Nasar Haroon",
      ProjectName: "Lorem ipsum",
      TaskStartDate: "Ross Gellar",
      TaskEndDate: "09-03-2024",
      OverdueDay: "3",
    },
  ];

  function dotButton() {
    return (
      <div>
        <img
          className="w-[28%] h-[28%] bg-blue-900"
          src="src\assets\Actions.png"
        ></img>
      </div>
    );
  }

  const renderedData = data.map((item, index) => {
    return (
      <div key={index} className="flex">
        <img
          className="h-6 rounded ml-10 mt-8"
          src="src\assets\Avatar.png"
        ></img>
        <p className="w-1/5 px-2 mt-8 text-blue-700 underline">
          {item.CustomerName}
        </p>
        <p className="w-1/5 ml-8 mt-8">{item.ProjectName}</p>
        <p className="w-1/5 ml-12 mt-8">{item.TaskStartDate}</p>
        <p className="w-1/5 mx-auto ml-8 mt-8">{item.TaskEndDate}</p>
        <p className="w-1/5 px-20 mt-8">{item.OverdueDay}</p>

        <button className="mt-8 " onClick={dotButton}>
          <img className=" ml-auto w-6 mr-16" src="src\assets\Frame.png"></img>
        </button>
      </div>
    );
  });

  return (
    <div>
      <Header pageName="User's"></Header>
      <div className="flex h-auto">
        <div className="flex h-screen w-[16.6%] ">
          <MenuComponent color2={"blue-700"}></MenuComponent>
        </div>
        <div className="w-[84.4%]  border-1 h-[100%]  bg-gray-200">
          <div className="  w-[82%] mx-auto mt-12 mb-12 bg-white">
            <h1 className="font-bold  mx-2">Online User</h1>
            <div className="flex mt-4 ml-12 ">
              <p className="font-bold mr-20">Customer Name</p>
              <p className="font-bold mr-20">Project Name</p>
              <p className="font-bold mr-20">Task Start Date</p>
              <p className="font-bold mr-20">Task End Date</p>
              <p className="font-bold  mr-20">Overdue Day</p>
            </div>
            <div> {renderedData}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
