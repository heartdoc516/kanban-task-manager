import AddNewTask from "./AddNewTaskModal";
import Dropdown from "./Dropdown";
import { db } from "@/lib/db";
import MobileMenu from "./MobileMenu";
import BoardNameHeader from "./BoardNameHeader";

const getData = async (boardId) => {
  const board = await db.board.findUnique({
    where: {
      id: boardId,
    },
  });
  return board;
};

const Header = async ({ params }) => {
  const board = await getData(params.id);

  return (
    <div className="sticky top-0 lg:ml-64 flex px-6 justify-between items-center bg-gray-800 h-28">
      <BoardNameHeader />
      <MobileMenu board={board} />
      <div className="flex gap-3 items-center">
        <AddNewTask params={params} />
        <Dropdown boardId={params.id} />
      </div>
    </div>
  );
};

export default Header;
