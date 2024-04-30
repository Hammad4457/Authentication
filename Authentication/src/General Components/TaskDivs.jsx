import React, { useState } from 'react'
import Todo from './Todo';

const TaskDivs = ({task}) => {
    const [showTodo, setShowTodo] = useState(false);
    const handleClick   = () => {
        setShowTodo(!showTodo);
      }
      
  const  getRandomColor = () =>  {
    const colors = ["red", "yellow", "orange", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  return (
    <div key={task.id} className="h-[99%] w-[96%] mb-4 border-1 rounded bg-white z">
                <div className={`p-4 rounded bg-${getRandomColor()}-500`}></div>
                <div className="flex">
                  <h4 className="font-bold px-2">Title:</h4>
                  <p className="ml-auto">
                     <button  onClick={() => handleClick()}>
                      <img src="src\assets\Frame.png"></img>
                      {showTodo && (
                      <Todo
                        onClose={() => setShowTodo(false)}
                      />
                      )}
                    </button>
                  </p>
                </div>
                <p className="px-2">{task.title}</p>
                <h5 className="font-bold px-2">Description:</h5>
                <p className="px-2"> {task.description}</p>
                <h6 className="font-bold px-2">Attachment</h6>
                <div>
                  <img className="w-60 h-24 mx-auto mt-2 mb-2" src="src\assets\Flower.png"></img>
                </div>
                <div className="flex">
                  <h7 className="font-bold px-2">Start Date:</h7>
                  <p className="px-2">{task.startDate}</p>
                  <h8 className="font-bold ml-auto mr-6">End Date:</h8>
                  <p className="ml-auto mr-2">{task.endDate}</p>
                </div>
              </div>
  )
}

export default TaskDivs;
