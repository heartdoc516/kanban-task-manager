import { MoreVertical, Layout } from "react-feather";
import AddNewTask from "./AddNewTaskModal";
import { db } from "@/lib/db";

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
      <h1 className="text-white text-3xl font-bold pb-1">{board.name}</h1>
      <div className="flex gap-3 items-center">
        <AddNewTask params={params} />
        <button>
          <MoreVertical size={30} className={"text-white"} />
        </button>
      </div>
    </div>
  );
};

export default Header;
