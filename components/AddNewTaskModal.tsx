"use client";

import { Layout } from "react-feather";
import Modal from "react-modal";
import { useState } from "react";
import NewTaskForm from "./NewTaskForm";

Modal.setAppElement("#new-task-modal");

const AddNewTask = ({ params }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        className="flex items-center gap-3 text-gray-300 px-6 py-2 bg-indigo-600 rounded-full"
      >
        <Layout size={20} className="hidden md:block" />
        <div className="flex items-center text-white">
          <div className="text-2xl md:text-md">+</div>
          <div className="hidden md:inline-block">Add New Task</div>
        </div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        className={"w-full md:w-1/2 m-auto xl:w-1/3 bg-gray-800 rounded-lg"}
        overlayClassName={
          "bg-slate-900/75 absolute top-0 left-0 right-0 flex items-center w-screen h-screen z-20"
        }
      >
        <div className="px-8 py-8">
          <NewTaskForm setModalIsOpen={setModalIsOpen} params={params} />
        </div>
      </Modal>
    </>
  );
};

export default AddNewTask;
