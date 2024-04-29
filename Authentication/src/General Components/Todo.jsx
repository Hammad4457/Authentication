import {React} from "react";

function Todo(){
        console.log("I am from To do");
    return (
        <div className="bg-white border-2 mr-2">
            <div className="flex mt-2 px-4">
            <button>
            <img className="" src="src\assets\Delete.png"></img>
            </button>
            <text className="ml-2">Delete</text>
            
            </div>
            <div className="flex mt-2 px-4">
            <button>
            <img src="src\assets\Eye.png"></img>
            </button>
            <text className="ml-2">View</text>
            
            </div>
            <div className="flex mt-2 px-4">
            <button>
            <img src="src\assets\Edit.png"></img>
            </button>
            <text className="ml-2">Edit</text>
            
            </div>
        </div>
    )

}

export default Todo