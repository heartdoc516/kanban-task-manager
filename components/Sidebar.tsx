import Boards from "./Boards";
import { Sun, Moon, EyeOff, Layout } from "react-feather";
import { delay } from "@/lib/delay";
import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/jwt";
import { cookies } from "next/headers";
import ThemeToggler from "./ThemeToggler";

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

          <Boards boards={boards} />
        </div>

        {/* theme toggler */}
        <div className="pl-5 pb-5">
          <ThemeToggler />
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
