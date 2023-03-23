import Boards from "./Boards";
import { Sun, Moon, EyeOff, Layout } from "react-feather";

import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/jwt";
import { cookies } from "next/headers";
import ThemeToggler from "./ThemeToggler";
import SidebarClientComponent from "./SidebarClientComponent";

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

  return <SidebarClientComponent boards={boards} />;
};
export default Sidebar;
