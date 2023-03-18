import { MoreVertical, X } from "react-feather";

const ViewTaskForm = ({ setModalIsOpen }) => {
  return (
    <div className="px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-white text-xl font-bold">Task Name</h4>
        <div className="flex gap-4">
          <MoreVertical size={20} className="text-gray-400" />
          <button
            onClick={() => setModalIsOpen(false)}
            className="text-gray-400"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="text-gray-400 mb-6">task description</div>
      <div className="text-white mb-3">Subtasks (2 0f 3)</div>
      <form>
        <div className="mb-6">
          <div className="flex bg-gray-900 rounded-md mb-2 p-3 gap-6 items-center">
            <input
              type={"checkbox"}
              className="bg-gray-800 text-indigo-600 cursor-pointer border-1 w-5 h-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-1"
              name="subtask"
            />
            <label className="text-white" htmlFor="subtask">
              subtask name
            </label>
          </div>
          <div className="flex bg-gray-900 rounded-md mb-2 p-3 gap-6 items-center">
            <input
              type={"checkbox"}
              className="bg-gray-800 text-indigo-600 cursor-pointer border-1 w-5 h-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-1"
              name="subtask"
            />
            <label className="text-white" htmlFor="subtask">
              subtask name
            </label>
          </div>
          <div className="flex bg-gray-900 rounded-md mb-2 p-3 gap-6 items-center">
            <input
              type={"checkbox"}
              className="bg-gray-800 text-indigo-600 cursor-pointer border-1 w-5 h-5 rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-1"
              name="subtask"
            />
            <label className="text-white" htmlFor="subtask">
              subtask name
            </label>
          </div>
        </div>

        <label htmlFor="status" className="text-white block mb-3">
          Status
        </label>
        <select
          name="status"
          id="status"
          className="bg-gray-800 border border-gray-600 p-2 w-full rounded-md text-white outline-none"
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
      </form>
    </div>
  );
};

export default ViewTaskForm;
