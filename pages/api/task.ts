import { db } from "@/lib/db";

export default async function updateTaskHandler(req, res) {
  if (req.method === "PUT") {
    const task = await db.task.update({
      where: {
        id: req.body.taskId,
      },
      data: {
        status: req.body.taskStatus,
      },
      include: { subtasks: true },
    });

    const subtasks = await db.subtask.findMany({
      where: {
        taskId: task.id,
      },
    });

    const subtasksToUpdate = req.body.subtasks.filter((reqSubtask) => {
      const comparedSubtask = subtasks.filter(
        (subtask) => subtask.id === reqSubtask.id
      );
      return reqSubtask.status !== comparedSubtask[0].status;
    });

    const updatedSubtasks = await Promise.all(
      subtasksToUpdate.map((item) =>
        db.subtask.update({
          where: {
            id: item.id,
          },
          data: {
            status: item.status,
          },
        })
      )
    );
    console.log(task);
    res.status(200);
    res.json({});
  }
}
