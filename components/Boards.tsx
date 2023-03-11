"use client";

import Board from "./Board";
import Link from "next/link";
import { useState } from "react";
import NewBoard from "./NewBoard";

const Boards = ({ boards }) => {
  const [activeBoard, setActiveBoard] = useState(null);

  return (
    <div className="mt-8">
      {boards.map((board) => (
        <Link href={`/dashboard/${board.id}`}>
          <Board
            board={board}
            onSelect={() => setActiveBoard(board.id)}
            isActive={activeBoard === board.id}
          />
        </Link>
      ))}
      <NewBoard />
    </div>
  );
};

export default Boards;
