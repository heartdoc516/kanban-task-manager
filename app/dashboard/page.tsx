import TaskColumn from "@/components/TaskColumn";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 m-6 gap-10">
      <TaskColumn status={"TODO"} />
      <TaskColumn status={"DOING"} />
      <TaskColumn status={"DONE"} />
    </div>
  );
}
