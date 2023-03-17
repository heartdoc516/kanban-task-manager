import { getUserFromCookie } from "@/lib/jwt";
import Task from "./Task";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

const color = {
  TODO: "bg-cyan-400",
  DOING: "bg-indigo-400",
  DONE: "bg-green-400",
};

const getData = async (status, boardId) => {
  const user = getUserFromCookie(cookies());

  const tasks = await db.task.findMany({
    where: {
      authorId: user.id,
      boardId: boardId,
      status: status,
    },
  });

  return tasks;
};

const TaskColumn = async ({ status, boardId }) => {
  const tasks = await getData(status, boardId);
  return (
    <div>
      <div className="flex gap-2 items-center mb-3">
        <div className={`rounded-full w-5 h-5 ${color[status]}`}></div>
        <div className="text-gray-400 text-lg font-semibold">{status}</div>
      </div>

      {tasks.map((task) => (
        <Task name={task.name} />
      ))}
    </div>
  );
};

export default TaskColumn;
