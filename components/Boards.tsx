"use client";

import Board from "./Board";
import Link from "next/link";
import { useState } from "react";
import NewBoard from "./NewBoard";
import { useSelectedLayoutSegment } from "next/navigation";

const Boards = ({ boards }) => {
  const boardId = useSelectedLayoutSegment();

  const [activeBoard, setActiveBoard] = useState(boardId || null);

  return (
    <div className="mt-8">
      {boards.map((board) => (
        <Link href={`/dashboard/${board.id}`} key={board.id}>
          <Board
            board={board}
            onSelect={() => setActiveBoard(board.id)}
            isActive={activeBoard === board.id}
            key={board.id}
          />
        </Link>
      ))}
      <NewBoard />
    </div>
  );
};

export default Boards;
