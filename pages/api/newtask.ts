import { validateJWT } from "@/lib/jwt";
import { db } from "@/lib/db";

export default async function taskHandler(req, res) {
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
  console.log(task);
}
