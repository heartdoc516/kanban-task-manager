"use client";

import { LogOut } from "react-feather";
import DashboardNewBoard from "./DashboardNewboard";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/fetch";

const DashBoardHeader = () => {
  const router = useRouter();
  const handleSignout = async () => {
    await signout();

    router.push("/signin");
  };
  return (
    <>
      <div className="sticky top-0 lg:ml-64 flex px-6 justify-between items-center bg-gray-800 h-28">
        <div className="text-gray-400 text-xl">No Board Selected</div>
        <div className="flex justify-between items-center gap-4">
          <DashboardNewBoard
            btnStyle={"flex gap-3 items-center text-gray-300"}
          />
          <button
            onClick={handleSignout}
            className=" px-8 py-2 flex items-center justify-between  text-red-300 rounded-full bg-gray-500 hover:bg-white hover:text-red-700 transition-all ease-out"
          >
            <div className="hidden md:block">Log Out</div>
            <div>
              <LogOut size={20} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default DashBoardHeader;
