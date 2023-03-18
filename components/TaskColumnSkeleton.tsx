const color = {
  TODO: "bg-cyan-400",
  DOING: "bg-indigo-400",
  DONE: "bg-green-400",
};

const TaskColumnSkeleton = ({ status }) => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-3">
        <div className={`rounded-full w-5 h-5 ${color[status]}`}></div>
        <div className="text-gray-400 text-lg font-semibold">{status}</div>
      </div>

      <div className="bg-gray-800 rounded-lg mb-4 p-4 animate-pulse">
        <div className="w-3/4 h-4 bg-gray-400 rounded-md my-3"></div>
        <div className="w-1/2 h-4 bg-gray-400 rounded-md my-3"></div>
      </div>
      <div className="bg-gray-800 rounded-lg mb-4 p-4 animate-pulse">
        <div className="w-3/4 h-4 bg-gray-400 rounded-md my-3"></div>
        <div className="w-1/2 h-4 bg-gray-400 rounded-md my-3"></div>
      </div>
      <div className="bg-gray-800 rounded-lg mb-4 p-4 animate-pulse">
        <div className="w-3/4 h-4 bg-gray-400 rounded-md my-3"></div>
        <div className="w-1/2 h-4 bg-gray-400 rounded-md my-3"></div>
      </div>
    </div>
  );
};

export default TaskColumnSkeleton;
