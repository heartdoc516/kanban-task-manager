import { MoreVertical, Layout } from "react-feather";

const Header = () => {
  return (
    <div className="sticky top-0 lg:ml-64 flex px-6 justify-between items-center bg-gray-800 h-28">
      <h1 className="text-white text-3xl font-bold pb-1">Platform Launch</h1>
      <div className="flex gap-3 items-center">
        <button className="flex gap-3 text-gray-300 p-4 bg-indigo-600 rounded-full">
          <Layout size={20} />
          <div className="text-white">+ Add New Task</div>
        </button>
        <button>
          <MoreVertical size={30} className={"text-white"} />
        </button>
      </div>
    </div>
  );
};

export default Header;
