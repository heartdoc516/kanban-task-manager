"use client";

import Modal from "react-modal";
import { useState } from "react";
import ViewTaskForm from "./ViewTaskForm";

Modal.setAppElement("#view-task-modal");

const Task = ({ task }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalIsOpen(true)}
        className="text-white p-6 bg-gray-800 rounded-lg mb-4 cursor-pointer border border-gray-800 hover:border-gray-600"
      >
        <div className="text-xl font-semibold mb-1">{task.name}</div>
        <div className="text-gray-400">
          {task.subtasks.filter((subtask) => subtask.status).length} of{" "}
          {task.subtasks.length} subtasks completed
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        className={"w-full md:w-1/2 m-auto xl:w-1/3 bg-gray-800 rounded-lg"}
        overlayClassName={
          "bg-slate-900/75 fixed top-0 left-0 right-0 bottom-0 flex items-center w-screen h-screen z-20"
        }
      >
        <ViewTaskForm setModalIsOpen={setModalIsOpen} task={task} />
      </Modal>
    </>
  );
};

export default Task;
