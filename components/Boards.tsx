"use client";

import Board from "./Board";
import Link from "next/link";
import { useContext } from "react";
import NewBoard from "./NewBoard";

import { BoardContext, setBoardContext } from "@/lib/BoardContextProvider";

const Boards = ({ boards }) => {
  const activeBoard = useContext(BoardContext);
  const dispatch = useContext(setBoardContext);

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
