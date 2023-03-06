import Task from "./Task";

const color = {
  TODO: "bg-cyan-400",
  DOING: "bg-indigo-400",
  DONE: "bg-green-400",
};

const TaskColumn = ({ status }) => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-3">
        <div className={`rounded-full w-5 h-5 ${color[status]}`}></div>
        <div className="text-gray-400 text-lg font-semibold">{status}</div>
      </div>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskColumn;
