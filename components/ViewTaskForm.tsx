"use client";

import { MoreVertical, X } from "react-feather";
import { useState, useTransition } from "react";
import SubtaskInput from "./SubtaskInput";
import { updateTask } from "@/lib/fetch";
import { useRouter } from "next/navigation";

const ViewTaskForm = ({ setModalIsOpen, task }) => {
  const router = useRouter();
  //the goal with these states is to create a copy of the actual db data while user modifies, then send back that state to be actually updated in db

  const initialSubtasksState = task.subtasks.map((subtask) => ({
    name: subtask.name,
    id: subtask.id,
    status: subtask.status,
  }));

  const [taskStatus, setTaskStatus] = useState(task.status);
  const [subtasks, setSubtasks] = useState(initialSubtasksState);

  const [isPending, startTransition] = useTransition();

  const handleChecked = (subtaskId) => {
    setSubtasks(
      subtasks.map((subtask) => {
        if (subtask.id === subtaskId) {
          return {
            ...subtask,
            status: subtask.status === false ? true : false,
          };
        } else {
          return subtask;
        }
      })
    );
  };

  const handleUpdate = async () => {
    if (subtasks === initialSubtasksState || taskStatus === task.status) {
      setModalIsOpen(false);
    } else {
      await updateTask(task.id, taskStatus, subtasks);

      startTransition(() => {
        router.refresh();
        setModalIsOpen(false);
      });
    }
  };
  if (isPending) {
    return (
      <div role="status" className="flex items-center justify-center h-40 ">
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-white text-xl font-bold">{task.name}</h4>
        <div className="flex gap-4">
          <MoreVertical size={20} className="text-gray-400" />
          <button onClick={handleUpdate} className="text-gray-400">
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="text-gray-400 mb-6">{task.description}</div>
      <div className="text-white mb-3">{`Subtasks (${
        subtasks.filter((subtask) => subtask.status).length
      } of ${subtasks.length})`}</div>
      <form>
        <div className="mb-6">
          {subtasks.map((subtask) => (
            <SubtaskInput
              subtask={subtask}
              key={subtask.id}
              handleChecked={handleChecked}
            />
          ))}
        </div>

        <label htmlFor="status" className="text-white block mb-3">
          Status
        </label>
        <select
          onChange={(e) => setTaskStatus(e.target.value)}
          name="status"
          id="status"
          className="bg-gray-800 border border-gray-600 p-2 w-full rounded-md text-white outline-none"
        >
          <option
            value="TODO"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={taskStatus === "TODO" ? true : false} //not sure about this, react console proposed 'defaultValue prop'
          >
            TODO
          </option>
          <option
            value="DOING"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={taskStatus === "DOING" ? true : false} //not sure about this, react console proposed 'defaultValue prop'
          >
            DOING
          </option>
          <option
            value="DONE"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={taskStatus === "DONE" ? true : false} //not sure about this, react console proposed 'defaultValue prop'
          >
            DONE
          </option>
        </select>
      </form>
    </div>
  );
};

export default ViewTaskForm;
