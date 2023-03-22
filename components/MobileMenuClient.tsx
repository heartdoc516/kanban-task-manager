"use client";
import { Layout, ChevronDown } from "react-feather";
import ThemeToggler from "./ThemeToggler";
import { useState } from "react";
import Boards from "./Boards";

const MobileMenuClient = ({ board, boards }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <>
        <button
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          className="flex justify-between items-center gap-4 lg:hidden"
        >
          <Layout size={30} className="text-indigo-600" />
          <h1 className="text-white text-3xl font-bold pb-1 ">{board.name}</h1>
          <ChevronDown size={30} className="text-white" />
        </button>

        <div className="absolute top-28 left-0 w-72 block bg-gray-800 border-b-2 border-l-2 border-r-2 border-gray-600 rounded-b-md lg:hidden">
          <Boards boards={boards} />

          <ThemeToggler />
        </div>
      </>
    );
  } else {
    return (
      <button
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="flex justify-between items-center gap-4 lg:hidden"
      >
        <Layout size={30} className="text-indigo-600" />
        <h1 className="text-white text-3xl font-bold pb-1 ">{board.name}</h1>
        <ChevronDown size={30} className="text-white" />
      </button>
    );
  }
};

export default MobileMenuClient;
