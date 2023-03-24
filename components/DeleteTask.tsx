import { Trash2 } from "react-feather";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import Modal from "react-modal";
import { deleteTask } from "@/lib/fetch";

Modal.setAppElement("#delete-task-modal");

const DeleteTask = ({ task }) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handleDeleteTask(taskId) {
    await deleteTask(taskId);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <>
      <button
        onClick={() =>
          modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
        }
      >
        <Trash2 size={20} className={"text-gray-400 hover:text-white"} />
      </button>

      <Modal
        isOpen={modalIsOpen}
        className={"w-full md:w-1/2 m-auto xl:w-1/3 bg-gray-800 rounded-lg"}
        overlayClassName={
          "bg-slate-900/75 absolute top-0 left-0 right-0 flex items-center w-screen h-screen z-20"
        }
      >
        <div className=" flex flex-col items-center justify-between gap-6 px-8 py-8 text-white">
          <p>Are you sure you want to delete this task ?</p>
          <div className="flex justify-arround gap-8">
            <button
              onClick={() => {
                handleDeleteTask(task.id);
              }}
              className="px-8 flex items-center justify-between  border-red-800 p-4 text-white rounded-full bg-red-800 mb-2 hover:bg-gray-300 hover:text-red-800 border-2 transition-all ease-out"
            >
              {isPending ? (
                <Spinner color={"fill-red-600"} size="md" />
              ) : (
                <div>Delete</div>
              )}
            </button>
            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="px-8 flex items-center justify-between p-4 text-white rounded-full bg-gray-500 mb-2 hover:bg-gray-600 transition-all ease-out"
            >
              <div>Cancel</div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteTask;
