const Task = ({ name }) => {
  return (
    <div className="text-white p-6 bg-gray-800 rounded-lg mb-4">
      <div className="text-xl font-semibold mb-1">{name}</div>
      <div className="text-gray-400">0 0f 3 subtaks</div>
    </div>
  );
};

export default Task;
