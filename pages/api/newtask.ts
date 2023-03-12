import { validateJWT } from "@/lib/jwt";
import { db } from "@/lib/db";

export default async function taskHandler(req, res) {
  console.log(req.body.title);
  res.status(200);
  //   const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  //   console.log(user);

  //   const task = await db.task.create({
  //     data: {
  //       name: req.body.name,
  //       description: req.body.description,
  //       boardId: req.body.boardId,
  //       authorId: user.payload.id,
  //       status: req.body.status,
  //     },
  //     include: {
  //       subtasks: true,
  //     },
  //   });

  //   if (req.body.subtasks) {
  //     const subtasks = req.body.subtasks.map((subtask) => {
  //       return {
  //         name: subtask,
  //         boardId: req.body.boardId,
  //         authorId: user.id,
  //         taskId: task.id,
  //       };
  //     });

  //     await db.subtask.createMany({
  //       data: subtasks,
  //     });
  //   }

  //   res.status(200);
  //   res.json({ data: task });
  //   console.log(task);
}
