"use client";

import Board from "./Board";
import { Layout } from "react-feather";
import { useState } from "react";

const Boards = ({ boards }) => {
  const [activeBoard, setActiveBoard] = useState(boards[0].id);

  return (
    <div className="mt-8">
      {boards.map((board) => (
        <Board
          board={board}
          onSelect={() => setActiveBoard(board.id)}
          isActive={activeBoard === board.id}
        />
      ))}
      <button className="flex gap-3 text-gray-300 py-4 pl-5">
        <Layout size={20} />
        <div>+ Create New Board</div>
      </button>
    </div>
  );
};

export default Boards;
