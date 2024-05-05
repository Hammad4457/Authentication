import React from "react";
import { Link } from "react-router-dom";

function MenuComponent({ color1, color2, color3, userOff }) {
  return (
    <div className="relative">
      <h2 className="font-bold  mt-10 mx-4">Menu</h2>

      <br />
      <Link to={"/Dashboard"}>
        <button
          className={`relative mt-2 w-[80%] sm:w-88 h-8 shadow rounded mx-4`}
        >
          <svg
            class={`h-6 w-8 text-${color1} absolute  top-1/2 transform -translate-y-1/2 ml-2`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className={`mr-8 text-${color1}`}>Dashboard</span>
        </button>
      </Link>
      {!userOff && (
        <Link to={"/Users"}>
          <button
            className={`relative h-8 mx-4 w-[80%] sm:w-88 shadow mt-5 rounded border`}
          >
            <svg
              className={`h-6  w-8 text-${color2} absolute  top-1/2 transform -translate-y-1/2 ml-2`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className={`mr-20 text-${color2}`}>User</span>
          </button>
        </Link>
      )}

      <Link to={"/Task"}>
        <button
          className={`relative h-8 mx-4 w-[80%] sm:w-88 mt-5 shadow rounded border`}
        >
          <svg
            className={`h-6 w-8 text-${color3} absolute  top-1/2 transform -translate-y-1/2 ml-2`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
            <line x1="11" y1="6" x2="20" y2="6" />
            <line x1="11" y1="12" x2="20" y2="12" />
            <line x1="11" y1="18" x2="20" y2="18" />
          </svg>
          <span className={`mr-20 text-${color3}`}>Task</span>
        </button>
      </Link>

      <button className="relative w-[80%] sm:w-88 h-8 mx-4 mt-5 shadow rounded border">
        <svg
          class="h-6 w-8 text-black absolute ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="3" />{" "}
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span className="mr-14">Setting</span>
      </button>
    </div>
  );
}

export default MenuComponent;
