"use client";

import { updateSubtask } from "@/lib/fetch";

const SubtaskInput = ({ subtask }) => {
  console.log(subtask.id, subtask.name);

  return (
    <div className="flex bg-gray-900 rounded-md mb-2 p-3 gap-6 items-center">
      <input
        checked={subtask.status}
        type={"checkbox"}
        className="bg-gray-800 text-indigo-600 cursor-pointer border-1 w-5 h-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-1"
        name="subtask"
      />
      <label className="text-white" htmlFor="subtask">
        {subtask.name}
      </label>
    </div>
  );
};

export default SubtaskInput;
