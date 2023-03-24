"use client";

import { useState, useTransition } from "react";
import { MoreVertical, Trash2, LogOut } from "react-feather";
import { signout } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import { deleteBoard } from "@/lib/fetch";
import Spinner from "./Spinner";

const Dropdown = ({ boardId }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDeleteBoard = async () => {
    await deleteBoard(boardId);
    startTransition(() => {
      router.push("/dashboard");
      router.refresh();
    });
  };

  const handleSignout = async () => {
    await signout();

    router.push("/signin");
  };

  if (isOpen) {
    return (
      <>
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <MoreVertical size={30} className={"text-white"} />
        </button>

        <div className="absolute top-28 right-0 w-72 p-8 block bg-gray-800 border-b-2 border-l-2 border-r-2 border-gray-600 rounded-b-md z-40">
          <button
            onClick={() => {
              handleDeleteBoard(boardId);
            }}
            className="w-full px-8 flex items-center justify-between p-4 text-white rounded-full bg-gray-500 mb-2 hover:bg-red-800 transition-all ease-out"
          >
            <div>Delete board</div>
            <div>
              {!isPending ? (
                <Trash2 size={20} />
              ) : (
                <Spinner color={"fill-red-600"} size="lg" />
              )}
            </div>
          </button>
          <button
            onClick={handleSignout}
            className="w-full px-8 flex items-center justify-between p-4 text-red-300 rounded-full bg-gray-500 hover:bg-white hover:text-red-700 transition-all ease-out"
          >
            <div>Log Out</div>
            <div>
              <LogOut size={20} />
            </div>
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <MoreVertical size={30} className={"text-white"} />
        </button>
      </>
    );
  }
};

export default Dropdown;
