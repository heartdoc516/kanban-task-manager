import { db } from "@/lib/db";
import { validateJWT } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

    const board = await db.board.create({
      data: {
        name: req.body.title,
        authorId: user.payload.id,
      },
    });

    res.status(200);
    res.json({ data: user.payload });
  }

  if (req.method === "DELETE") {
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

    await db.subtask.deleteMany({
      where: {
        authorId: user.payload.id,
      },
    });

    await db.task.deleteMany({
      where: {
        authorId: user.payload.id,
      },
    });

    const board = await db.board.delete({
      where: {
        id: req.body.boardId,
      },
    });

    res.status(200);
    res.json({ message: `${board.name} has been deleted` });
    console.log(`${board.name} has been deleted`);
  }
}
