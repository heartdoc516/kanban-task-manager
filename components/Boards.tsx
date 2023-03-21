"use client";

import Board from "./Board";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewBoard from "./NewBoard";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

const Boards = ({ boards }) => {
  const boardId = useSelectedLayoutSegment();
  const router = useRouter();

  const [activeBoard, setActiveBoard] = useState(
    boardId ? boards.filter((board) => board.id === boardId)[0] : boards[0]
  );

  useEffect(() => {
    if (activeBoard) {
      router.push(`/dashboard/${activeBoard.id}`);
    }
  }, []);

  const handleSelectBoard = (board) => {
    setActiveBoard(board);
  };

  return (
    <div className="mt-8">
      {boards.map((board) => (
        <Link href={`/dashboard/${board.id}`} key={board.id}>
          <Board
            board={board}
            onSelect={() => handleSelectBoard(board)}
            isActive={activeBoard === board}
            key={board.id}
          />
        </Link>
      ))}
      <NewBoard />
    </div>
  );
};

export default Boards;
