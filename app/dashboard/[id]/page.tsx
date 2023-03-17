import TaskColumn from "@/components/TaskColumn";

export default function Page({ params }) {
  console.log(params);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 m-6 gap-10">
      <TaskColumn status={"TODO"} boardId={params.id} />
      <TaskColumn status={"DOING"} boardId={params.id} />
      <TaskColumn status={"DONE"} boardId={params.id} />
    </div>
  );
}
