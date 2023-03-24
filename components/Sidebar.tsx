import Boards from "./Boards";
import { Layout } from "react-feather";
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
    <div className="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0 bg-gray-800 pr-5 py-10 border-r border-slate-500">
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

        <div className="pl-5 pb-5">
          <div className="flex flex-col justify-start gap-4 pt-4 pl-4">
            <p className="text-gray-400">
              Coded by <span className="text-gray-300">Francis Plante</span>
            </p>
            <p className="text-gray-400">
              Design inspired by{" "}
              <a
                className="text-indigo-300"
                href="https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB"
              >
                www.frontendmentor.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
