"use client";

import { createContext } from "react";
import { useReducer } from "react";

export const setSidebarContext = createContext(null);
export const SidebarContext = createContext(null);

function SidebarReducer(state, action) {
  return action.isDisplayed;
}

export function BoardContextProvider({ children }) {
  const [isDisplayed, dispatch] = useReducer(SidebarReducer, true);

  return (
    <SidebarContext.Provider value={isDisplayed}>
      <setSidebarContext.Provider value={dispatch}>
        {children}
      </setSidebarContext.Provider>
    </SidebarContext.Provider>
  );
}
