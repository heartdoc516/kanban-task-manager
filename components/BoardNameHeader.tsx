"use client";

import { BoardContext } from "@/lib/BoardContextProvider";
import { useContext } from "react";

const BoardNameHeader = () => {
  const board = useContext(BoardContext);

  return (
    <h1 className="text-white text-3xl font-bold pb-1 hidden lg:block">
      {board.name}
    </h1>
  );
};

export default BoardNameHeader;
