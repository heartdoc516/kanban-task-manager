"use client";

import Board from "./Board";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import NewBoard from "./NewBoard";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { BoardContext, setBoardContext } from "@/lib/BoardContextProvider";

const Boards = ({ boards }) => {
  const boardId = useSelectedLayoutSegment();
  const router = useRouter();

  const activeBoard = useContext(BoardContext);
  const dispatch = useContext(setBoardContext);

  useEffect(() => {
    if (boardId === null && boards.length) {
      dispatch({ board: boards[0] });
      router.push(`/dashboard/${boards[0].id}`);
    }
  });

  const handleSelectBoard = (board) => {
    dispatch({ board });
  };

  return (
    <div className="mt-8">
      <div className="text-white text-center mt-8 mb-4 tracking-widest">
        {`All Boards (${boards.length})`}
      </div>
      {boards.map((board) => (
        <Link href={`/dashboard/${board.id}`} key={board.id}>
          <Board
            board={board}
            onSelect={() => handleSelectBoard(board)}
            activeBoard={activeBoard}
            key={board.id}
          />
        </Link>
      ))}
      <NewBoard btnStyle={"flex gap-3 text-gray-300 py-4 pl-5"} />
    </div>
  );
};

export default Boards;
