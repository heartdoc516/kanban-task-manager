"use client";

const SubtaskInput = ({ subtask, handleChecked }) => {
  return (
    <div className="flex bg-gray-900 rounded-md mb-2 p-3 gap-6 items-center">
      <input
        onChange={() => handleChecked(subtask.id)}
        defaultChecked={subtask.status}
        type={"checkbox"}
        className="bg-gray-800 text-indigo-600 cursor-pointer border-1 w-5 h-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-1"
        name={subtask.id}
        id={subtask.id}
      />
      <label
        className={
          subtask.status === true ? "text-gray-500 line-through" : "text-white"
        }
        htmlFor={subtask.id}
      >
        {subtask.name}
      </label>
    </div>
  );
};

export default SubtaskInput;
