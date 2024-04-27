import { useState, React } from "react";
import Header from "../General Components/Header";
import MenuComponent from "../General Components/MenuComponent";
import AddModal from "../General Components/AddModal";

function Task() {
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);

  function display() {
    setShowModal(!showModal);
  }

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setShowModal(false);
  }

  function getRandomColor() {
    const colors = ["red", "yellow", "orange", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div>
      <Header pageName="Task"></Header>
      <div className="flex h-auto">
        <div className="flex h-screen w-[16.6%] ">
          <MenuComponent color3={"blue-700"}></MenuComponent>
        </div>
        <div className="w-[84.4%]  border-1   bg-[gray]">
          <div className="flex mt-12 ml-8">
            <h1 className="font-bold text-xl ">Start date:</h1>
            <h2 className="font-bold ml-52 text-xl">End date:</h2>

            <button className="mx-auto" onClick={display}>
              <img className="ml-96 " src="src\assets\Add Task.png"></img>
            </button>
          </div>
          <div className="flex  ">
            <input
              className="ml-8 w-[19%] h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            ></input>
            <input
              className="ml-16 w-[20%] h-12 mt-4 rounded"
              type="date"
              placeholder="15-Apr-2024"
              required
            ></input>
          </div>
          <h3 className="font-bold ml-8 mt-8 text-xl">Enter Title:</h3>
          <div className="flex border-1 border-blue-700">
            <input
              className=" rounded rounded-l-md rounded-r-none ml-8 w-[36%] h-12 mt-4 "
              type="search"
              placeholder="Search"
              required
            ></input>
            {/* <img className="absoulte left-2 " src="src\assets\Search.png"></img> */}
            <button className=" bg-blue-200 w-[8%] rounded-l-none rounded-r-md h-12 mt-4">
              Search
            </button>
          </div>
          <div className="grid grid-cols-3 space-x-12 px-8 mt-4 border-1 ">
            {submittedData.map((data, index) => (
              <div key={index} className="h-64 border-2 border-black rounded">
                <div
                  className={`p-4 bg-${getRandomColor()}-500 overlay border-2 border-black`}
                ></div>
                <h4 className="font-bold px-2">Title:</h4>
                <p className="px-2">{data.title}</p>
                <h5 className="font-bold px-2">Description:</h5>
                <p className="px-2"> {data.description}</p>
                <h6 className="font-bold px-2">Attachment</h6>
                <div className="flex">
                  <h7 className="font-bold px-2">Start Date:</h7>
                  <h8 className="font-bold mx-auto">End Date:</h8>
                </div>
                <div className="flex">
                  <p>{data.startDate}</p>
                  <p>{data.endDate}</p>
                </div>
              </div>
            ))}
          </div>
          <div>{showModal && <AddModal onSubmit={handleModalSubmit} />}</div>
        </div>
      </div>
    </div>
  );
}
export default Task;
