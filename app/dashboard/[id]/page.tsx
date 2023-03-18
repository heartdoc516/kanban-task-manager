import TaskColumn from "@/components/TaskColumn";
import TaskColumnSkeleton from "@/components/TaskColumnSkeleton";
import { Suspense } from "react";
import Header from "@/components/Header";

export default function Page({ params }) {
  return (
    <>
      <Header params={params} />
      <div className="p-4 lg:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-3 m-6 gap-10">
          <Suspense fallback={<TaskColumnSkeleton status={"TODO"} />}>
            <TaskColumn status={"TODO"} boardId={params.id} />
          </Suspense>

          <Suspense fallback={<TaskColumnSkeleton status={"DOING"} />}>
            <TaskColumn status={"DOING"} boardId={params.id} />
          </Suspense>

          <Suspense fallback={<TaskColumnSkeleton status={"DONE"} />}>
            <TaskColumn status={"DONE"} boardId={params.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
