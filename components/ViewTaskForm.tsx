"use client";

import { MoreVertical, X } from "react-feather";
import { useState } from "react";
import SubtaskInput from "./SubtaskInput";

const ViewTaskForm = ({ setModalIsOpen, task }) => {
  return (
    <div className="px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-white text-xl font-bold">{task.name}</h4>
        <div className="flex gap-4">
          <MoreVertical size={20} className="text-gray-400" />
          <button
            onClick={() => setModalIsOpen(false)}
            className="text-gray-400"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="text-gray-400 mb-6">{task.description}</div>
      <div className="text-white mb-3">{`Subtasks (${
        task.subtasks.filter((subtask) => subtask.status).length
      } of ${task.subtasks.length})`}</div>
      <form>
        <div className="mb-6">
          {task.subtasks.map((subtask) => (
            <SubtaskInput subtask={subtask} />
          ))}
        </div>

        <label htmlFor="status" className="text-white block mb-3">
          Status
        </label>
        <select
          name="status"
          id="status"
          className="bg-gray-800 border border-gray-600 p-2 w-full rounded-md text-white outline-none"
        >
          <option
            value="TODO"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={task.status === "TODO" ? true : false}
          >
            TODO
          </option>
          <option
            value="DOING"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={task.status === "DOING" ? true : false}
          >
            DOING
          </option>
          <option
            value="DONE"
            className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
            selected={task.status === "DONE" ? true : false}
          >
            DONE
          </option>
        </select>
      </form>
    </div>
  );
};

export default ViewTaskForm;
