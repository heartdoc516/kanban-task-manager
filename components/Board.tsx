"use client";
import { Layout } from "react-feather";

const Board = ({ board, onSelect, activeBoard }) => {
  return (
    <button
      className={`flex gap-3 text-gray-300 py-4 pl-5 w-full ${
        activeBoard.id === board.id && "bg-indigo-500 rounded-r-full"
      }`}
      onClick={onSelect}
    >
      <Layout size={20} />
      <div>{board.name}</div>
    </button>
  );
};

export default Board;
