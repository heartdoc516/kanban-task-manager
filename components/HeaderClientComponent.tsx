"use client";

import { SidebarContext } from "@/lib/SidebarContextProvider";
import { useContext } from "react";

const HeaderClientComponent = ({ children }) => {
  return (
    <>
      <div
        className={`sticky top-0 lg:ml-64 flex px-6 justify-between items-center bg-gray-800 h-28`}
      >
        {children}
      </div>
    </>
  );
};

export default HeaderClientComponent;
