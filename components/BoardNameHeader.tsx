"use client";

import { BoardContext } from "@/lib/BoardContextProvider";
import { SidebarContext } from "@/lib/SidebarContextProvider";
import { useContext } from "react";

const BoardNameHeader = () => {
  const board = useContext(BoardContext);
  const sidebarIsDisplayed = useContext(SidebarContext);

  return (
    <h1
      className={`text-white text-3xl font-bold pb-1 hidden ${
        sidebarIsDisplayed && "lg:block"
      }`}
    >
      {board.name}
    </h1>
  );
};

export default BoardNameHeader;
