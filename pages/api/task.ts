import { db } from "@/lib/db";
import { validateJWT } from "@/lib/jwt";

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

  if (req.method === "POST") {
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

    const createdTask = await db.task.create({
      data: {
        name: req.body.title,
        description: req.body.description,
        boardId: req.body.boardId,
        authorId: user.payload.id,
        status: req.body.status,
      },
    });

    if (req.body.subtasks) {
      const subtaskQuerryArr = req.body.subtasks.map((subtask) => ({
        name: subtask.title,
        boardId: req.body.boardId,
        authorId: user.payload.id,
        taskId: createdTask.id,
      }));

      await db.subtask.createMany({
        data: subtaskQuerryArr,
      });
    }

    const task = await db.task.findUnique({
      where: {
        id: createdTask.id,
      },
      include: {
        subtasks: true,
      },
    });

    res.status(200);
    res.json({ data: task });
  }

  if (req.method === "DELETE") {
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

    await db.subtask.deleteMany({
      where: {
        taskId: req.body.taskId,
      },
    });

    await db.task.delete({
      where: {
        id: req.body.taskId,
      },
    });

    res.status(200);
    res.json({ message: "task deleted" });
  }
}
