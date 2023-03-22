"use client";

import { createContext } from "react";
import { useReducer } from "react";

export const setBoardContext = createContext(null);
export const BoardContext = createContext(null);

function activeBoardReducer(state, action) {
  return action.board;
}

export function BoardContextProvider({ children }) {
  const [activeBoard, dispatch] = useReducer(
    activeBoardReducer,
    "initialState"
  );

  return (
    <BoardContext.Provider value={activeBoard}>
      <setBoardContext.Provider value={dispatch}>
        {children}
      </setBoardContext.Provider>
    </BoardContext.Provider>
  );
}
