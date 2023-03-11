"use client";

import Board from "./Board";

import { useState } from "react";
import NewBoard from "./NewBoard";

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
      <NewBoard />
    </div>
  );
};

export default Boards;
