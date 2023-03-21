"use client";

import { useState } from "react";
import { MoreVertical, Trash2, LogOut } from "react-feather";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <>
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <MoreVertical size={30} className={"text-white"} />
        </button>

        <div className="absolute top-28 right-0 w-72 p-8 block bg-gray-800 border-b-2 border-l-2 border-r-2 border-gray-600 rounded-b-md z-40">
          <button className="w-full px-8 flex items-center justify-between p-4 text-white rounded-full bg-gray-500 mb-2 hover:bg-red-800 transition-all ease-out">
            <div>Delete board</div>
            <div>
              <Trash2 size={20} />
            </div>
          </button>
          <button className="w-full px-8 flex items-center justify-between p-4 text-red-300 rounded-full bg-gray-500 hover:bg-white hover:text-red-700 transition-all ease-out">
            <div>Log Out</div>
            <div>
              <LogOut size={20} />
            </div>
          </button>
        </div>
      </>
    );
  } else {
    return (
      <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
        <MoreVertical size={30} className={"text-white"} />
      </button>
    );
  }
};

export default Dropdown;
