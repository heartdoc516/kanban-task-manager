"use client";
import { useState } from "react";
import { X } from "react-feather";

const Subtask = ({ subtask, handleDeleteSubtask, handleSubtask }) => {
  return (
    <>
      <div className="flex gap-4">
        <input
          onChange={(e) => handleSubtask(e, subtask.id)}
          type="text"
          required
          name="subtasks"
          placeholder={`e.g. refactor code, coffe break ${subtask.id}`}
          className="flex-1 bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        />
        <button
          onClick={() => handleDeleteSubtask(subtask.id)}
          className="text-gray-400"
        >
          <X size={20} />
        </button>
      </div>
    </>
  );
};

export default Subtask;
