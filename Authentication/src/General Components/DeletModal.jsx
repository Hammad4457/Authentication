import { useState, React } from "react";

function AddModal() {
  
  const [cross, setCross] = useState(true);
  function crossDisplay() {
    setCross(!cross);
  }
  
 
 
  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <div>
              <p className="text-xl  mx-auto mb-4 mt-1 text-center">
                Are you sure you want to delete Lorem Ispum
              </p>

              <button onClick={crossDisplay} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <button>Delete</button>
              <button>Cancel</button>
            </div> 
          </div>
        </div>
      )}
    </>
  );
}
export default AddModal;
