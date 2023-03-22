import MobileMenuClient from "./MobileMenuClient";
import { getUserFromCookie } from "@/lib/jwt";
import { db } from "@/lib/db";
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

const MobileMenu = async ({ board }) => {
  const boards = await getData();
  return <MobileMenuClient board={board} boards={boards} />;
};

export default MobileMenu;
