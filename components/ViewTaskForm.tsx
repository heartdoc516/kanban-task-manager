"use client";

import { MoreVertical, X } from "react-feather";
import { useState, useTransition } from "react";
import SubtaskInput from "./SubtaskInput";
import { updateTask } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";

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
    return <LoaderSpinner />;
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
