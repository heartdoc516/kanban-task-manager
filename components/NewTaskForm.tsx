import { useState } from "react";
import { X } from "react-feather";

const initialState = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
};

let nextId = 1;

const NewTaskForm = () => {
  const [taskForm, setTaskForm] = useState(initialState);

  function handleDeleteSubtask(subtaskId) {
    const subtasks = taskForm.subtasks;

    setTaskForm({
      ...taskForm,
      subtasks: subtasks.filter((subtask) => subtaskId !== subtask.id),
    });
  }

  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="title" className="text-white">
        Title
      </label>
      <input
        onChange={(e) => {
          setTaskForm((state) => ({ ...state, title: e.target.value }));
          console.log(taskForm);
        }}
        type="text"
        required
        name="title"
        placeholder="e.g. refactor code, coffe break"
        className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8"
      />

      <label htmlFor="description" className="text-white">
        Description
      </label>
      <textarea
        onChange={(e) => {
          setTaskForm((state) => ({
            ...state,
            description: e.target.value,
          }));
          console.log(taskForm);
        }}
        name="description"
        placeholder="add a description"
        className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8 h-28"
      ></textarea>

      <label htmlFor="subtasks" className="text-white">
        Subtasks
      </label>
      {taskForm.subtasks.map((subtask) => (
        <div className="flex gap-4">
          <input
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
      ))}

      <button
        onClick={() => {
          setTaskForm((state) => ({
            ...state,
            subtasks: [...state.subtasks, { name: "", id: nextId++ }],
          }));
        }}
        className="text-gray-400"
        className="bg-indigo-50 text-indigo-600 rounded-full py-2 my-8"
      >
        + Add New Subtask
      </button>

      <label htmlFor="status" className="text-white">
        Status
      </label>
      <select
        name="status"
        id="status"
        className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8"
      >
        <option
          value="TODO"
          className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        >
          TODO
        </option>
        <option
          value="TODO"
          className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        >
          DOING
        </option>
        <option
          value="TODO"
          className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        >
          DONE
        </option>
      </select>

      <button className="bg-indigo-500 text-white rounded-full py-2">
        + Create Task
      </button>
    </form>
  );
};
export default NewTaskForm;
