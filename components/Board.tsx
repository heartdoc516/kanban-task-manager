import { Layout } from "react-feather";

const Board = ({ selected }) => {
  return (
    <div
      className={`flex gap-3 text-gray-300 py-4 pl-5 ${
        selected && "bg-indigo-600 rounded-r-full"
      } `}
    >
      <Layout size={20} />
      <div>Project Lauch</div>
    </div>
  );
};

export default Board;
