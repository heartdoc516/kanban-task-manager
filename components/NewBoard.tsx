"use-client";

import { Layout, X } from "react-feather";
import Modal from "react-modal";
import { useState, useTransition } from "react";
import { newBoard } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";

Modal.setAppElement("#modal");

const NewBoard = ({ btnStyle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newBoard(title);
    startTransition(() => {
      router.refresh();
      closeModal();
    });
  };

  return (
    <div>
      <button onClick={openModal} className={btnStyle}>
        <Layout size={20} />
        <div className="text-indigo-400">+ Create New Board</div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        className={"w-96 m-auto bg-gray-800 rounded-lg"}
        overlayClassName={
          "bg-slate-900/75 absolute w-screen top-0 left-0 right-0 bottom-0 flex items-center h-screen w-screen z-20"
        }
      >
        {" "}
        {isPending ? (
          <LoaderSpinner />
        ) : (
          <div className="px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              {" "}
              <h4 className="text-white text-xl">Create New Board</h4>
              <button onClick={closeModal} className="text-gray-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="title" className="text-white">
                Board Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="name your new project"
                className="bg-gray-800 border border-gray-600 p-2 rounded-md text-white outline-none mb-8"
              />
              <button className="bg-indigo-50 text-indigo-600 rounded-full py-2">
                + Create Board
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NewBoard;
