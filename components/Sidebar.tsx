import Boards from "./Boards";
import { Sun, Moon, EyeOff, Layout } from "react-feather";
import { delay } from "@/lib/delay";
import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/jwt";
import { cookies } from "next/headers";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const boards = await db.board.findMany({
    where: {
      authorId: user.id,
    },
  });

  return boards;
};

const Sidebar = async () => {
  const boards = await getData();

  return (
    <div className="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0 bg-gray-800 w-1/6 pr-5 py-10 border-r border-slate-500">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center text-white gap-4">
            <Layout size={40} className="text-indigo-600" />
            <div className="text-center">
              <div className="text-4xl font-bold tracking-wider ">kanban</div>
            </div>
          </div>
          <div className="text-white text-center mt-8 tracking-widest">
            {`All Boards (${boards.length})`}
          </div>

          <Boards boards={boards} />
        </div>

        {/* theme toggler */}
        <div className="pl-5 pb-5">
          <div className="flex justify-around bg-gray-900 w-full py-4 px-5 rounded-lg">
            <Sun size={25} className={"text-gray-300"} />
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <Moon size={25} className={"text-gray-300"} />
          </div>
          <div className="flex justify-start gap-4 pt-4 pl-4">
            {" "}
            <EyeOff size={25} className={"text-gray-300"} />
            <div className="text-gray-300">Hide Sidebar</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
