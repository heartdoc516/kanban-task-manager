import AddNewTask from "./AddNewTaskModal";
import Dropdown from "./Dropdown";
import { db } from "@/lib/db";
import MobileMenu from "./MobileMenu";
import BoardNameHeader from "./BoardNameHeader";
import HeaderClientComponent from "./HeaderClientComponent";
import { SidebarContext } from "@/lib/SidebarContextProvider";

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
    <HeaderClientComponent>
      <BoardNameHeader />
      <MobileMenu board={board} />
      <div className="flex gap-3 items-center">
        <AddNewTask params={params} />
        <Dropdown boardId={params.id} />
      </div>
    </HeaderClientComponent>
  );
};

export default Header;
