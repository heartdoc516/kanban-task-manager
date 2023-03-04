import { Layout, MoreVertical, Sun, Moon, EyeOff } from "react-feather";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* sidebar */}

      <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-700 w-1/6 pr-5 py-10 border-r border-slate-500">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-center text-white gap-4">
              <Layout size={40} className="text-purple-500" />
              <div className="text-center">
                <div className="text-4xl font-bold tracking-wider ">kanban</div>
              </div>
            </div>
            <div className="text-white text-center mt-8">
              {"All Boards (4)"}
            </div>

            {/* boards */}
            <div className="mt-8">
              <div className="flex gap-3 text-gray-300 py-4 pl-5 bg-purple-400 rounded-r-full">
                <Layout size={20} />
                <div>Project Lauch</div>
              </div>
              <div className="flex gap-3 text-gray-300 py-4 pl-5 ">
                <Layout size={20} />
                <div>Project Lauch</div>
              </div>
              <div className="flex gap-3 text-gray-300 py-4 pl-5 ">
                <Layout size={20} />
                <div>Project Lauch</div>
              </div>
              <div className="flex gap-3 text-gray-300 py-4 pl-5 ">
                <Layout size={20} />
                <div>Project Lauch</div>
              </div>
              <button className="flex gap-3 text-gray-300 py-4 pl-5">
                <Layout size={20} />
                <div>+ Create New Board</div>
              </button>
            </div>
          </div>

          {/* theme toggler */}
          <div className="pl-5 pb-5">
            <div className="flex justify-around bg-slate-900 w-full py-4 px-5 rounded-lg">
              <Sun size={25} className={"text-gray-300"} />
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <Moon size={25} className={"text-gray-300"} />
            </div>
            <div className="flex justify-start gap-4 pt-4 pl-4">
              {" "}
              <EyeOff size={25} className={"text-gray-300"} />
              <div className="text-gray-300">Hide Sidebar</div>
            </div>
          </div>
        </div>
      </div>

      {/* header */}
      <div className="sticky top-0 sm:ml-64 flex px-6 justify-between items-center bg-slate-700 h-28">
        <h1 className="text-white text-3xl font-bold pb-1">Platform Launch</h1>
        <div className="flex gap-3 items-center">
          <button className="flex gap-3 text-gray-300 p-4 bg-purple-400 rounded-full">
            <Layout size={20} />
            <div>+ Add New Task</div>
          </button>
          <button>
            <MoreVertical size={30} className={"text-white"} />
          </button>
        </div>
      </div>
      {/* {dashboard} */}
      <div className="p-4 sm:ml-64">
        {/* grid */}
        <div className=" grid grid-cols-3 m-6 gap-4">
          {/* todo board */}
          <div>
            <div className="flex gap-2 items-center mb-3">
              <div className="rounded-full w-5 h-5 bg-sky-400"></div>
              <div className="text-gray-400 text-lg font-semibold">
                {"TODO (5)"}
              </div>
            </div>

            {/* task */}
            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold mb-1">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>
          </div>

          {/* doing board */}
          <div>
            <div className="flex gap-2 items-center mb-3">
              <div className="rounded-full w-5 h-5 bg-purple-500"></div>
              <div className="text-gray-400 text-lg font-semibold">
                {"Doing (5)"}
              </div>
            </div>

            {/* task */}
            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold mb-1">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>
          </div>

          {/* done board */}
          <div>
            <div className="flex gap-2 items-center mb-3">
              <div className="rounded-full w-5 h-5 bg-green-400"></div>
              <div className="text-gray-400 text-lg font-semibold">
                {"Done (5)"}
              </div>
            </div>

            {/* task */}
            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold mb-1">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>

            <div className="text-white p-6 bg-slate-700 rounded-lg mb-4">
              <div className="text-xl font-semibold">
                building ui for unboarding
              </div>
              <div className="text-gray-400">0 0f 3 subtaks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
