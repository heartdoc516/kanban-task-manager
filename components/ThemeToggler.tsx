import { Sun, Moon } from "react-feather";

const ThemeToggler = () => {
  return (
    <div className="flex justify-around bg-gray-900 w-full py-4 px-5 rounded-lg">
      <Sun size={25} className={"text-gray-300"} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <Moon size={25} className={"text-gray-300"} />
    </div>
  );
};

export default ThemeToggler;
