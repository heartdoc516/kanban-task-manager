"use client";

import Boards from "./Boards";
import ThemeToggler from "./ThemeToggler";
import { EyeOff, Layout } from "react-feather";
import { useContext } from "react";
import {
  setSidebarContext,
  SidebarContext,
} from "@/lib/SidebarContextProvider";

const SidebarClientComponent = ({ boards }) => {
  const dispatch = useContext(setSidebarContext);
  const sidebarIsDisplayed = useContext(SidebarContext);

  return (
    <div
      className={`${
        !sidebarIsDisplayed && "hidden"
      } fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0 bg-gray-800 pr-5 py-10 border-r border-slate-500`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center text-white gap-4">
            <Layout size={40} className="text-indigo-600" />
            <div className="text-center">
              <div className="text-4xl font-bold tracking-wider ">kanban</div>
            </div>
          </div>

          <Boards boards={boards} />
        </div>

        {/* theme toggler */}
        <div className="pl-5 pb-5">
          <ThemeToggler />
          <button
            onClick={() => {
              dispatch({ isDisplayed: false });
            }}
            className="flex justify-start gap-4 pt-4 pl-4"
          >
            {" "}
            <EyeOff size={25} className={"text-gray-300"} />
            <div className="text-gray-300">Hide Sidebar</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarClientComponent;
