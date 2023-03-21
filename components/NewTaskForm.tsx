"use client";

import { useState, useTransition } from "react";
import Subtask from "./Subtask";
import { newTask } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";

const initialState = {
  title: "",
  description: "",
  status: "TODO",
};

type subtasks = { title: string; id: number }[];
const initialSubtasksState: subtasks = [];

let nextId = 1;

const NewTaskForm = ({ setModalIsOpen, params }) => {
  const [taskForm, setTaskForm] = useState(initialState);
  const [subtasks, setSubtasks] = useState(initialSubtasksState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const boardId = params.id;

  function handleDeleteSubtask(subtaskId: number) {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== subtaskId));
  }

  function addSubtask(e) {
    setSubtasks([...subtasks, { title: "", id: nextId++ }]);
  }

  function handleSubtask(e, subtaskId) {
    setSubtasks(
      subtasks.map((subtask) => {
        if (subtaskId === subtask.id) {
          return { ...subtask, title: e.target.value };
        } else {
          return subtask;
        }
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await newTask(
      taskForm.title,
      taskForm.description,
      subtasks,
      taskForm.status,
      boardId
    );
    startTransition(() => {
      router.refresh();
      setModalIsOpen(false);
    });
  }
  if (isPending) {
    return <LoaderSpinner />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="title" className="text-white">
        Title
      </label>
      <input
        onChange={(e) => {
          setTaskForm((state) => ({ ...state, title: e.target.value }));
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
        }}
        name="description"
        placeholder="add a description"
        className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8 h-28"
      ></textarea>

      <label htmlFor="subtasks" className="text-white">
        Subtasks
      </label>
      {subtasks.map((subtask) => (
        <Subtask
          subtask={subtask}
          handleDeleteSubtask={handleDeleteSubtask}
          handleSubtask={handleSubtask}
          key={subtask.id}
        />
      ))}

      <button
        onClick={addSubtask}
        className="text-gray-400 bg-indigo-50 text-indigo-600 rounded-full py-2 mb-8"
      >
        + Add New Subtask
      </button>

      <label htmlFor="status" className="text-white">
        Status
      </label>
      <select
        onChange={(e) => {
          setTaskForm({ ...taskForm, status: e.target.value });
        }}
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
          value="DOING"
          className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        >
          DOING
        </option>
        <option
          value="DONE"
          className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
        >
          DONE
        </option>
      </select>

      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-full py-2"
      >
        + Create Task
      </button>
    </form>
  );
};
export default NewTaskForm;
