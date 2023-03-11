"use client";

import { Layout, X } from "react-feather";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#new-task-modal");

const AddNewTask = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subtasks, setSubtasks] = useState([""]);

  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        className="flex gap-3 text-gray-300 p-4 bg-indigo-600 rounded-full"
      >
        <Layout size={20} />
        <div className="text-white">+ Add New Task</div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        className={"w-1/3 m-auto bg-gray-800 rounded-lg"}
        overlayClassName={
          "bg-slate-900/75 absolute top-0 left-0 right-0 bottom-0 flex items-center w-screen h-screen z-20"
        }
      >
        <div className="px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            {" "}
            <h4 className="text-white text-xl">Add New Task</h4>
            <button
              onClick={() => setModalIsOpen(false)}
              className="text-gray-400"
            >
              <X size={20} />
            </button>
          </div>

          <form className="flex flex-col gap-2">
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
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
              type="textarea"
              name="description"
              placeholder="add a description"
              className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8 h-28"
            ></textarea>

            <label htmlFor="subtasks" className="text-white">
              Subtasks
            </label>

            {subtasks.map((subtask) => (
              <div className="flex gap-4">
                <input
                  type="text"
                  required
                  name="subtasks"
                  placeholder="e.g. refactor code, coffe break"
                  className="flex-1 bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none"
                />
                <button onClick={() => {}} className="text-gray-400">
                  <X size={20} />
                </button>
              </div>
            ))}

            <button
              onClick={() => {
                setSubtasks([...subtasks, ""]);
              }}
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
        </div>
      </Modal>
    </>
  );
};

export default AddNewTask;
