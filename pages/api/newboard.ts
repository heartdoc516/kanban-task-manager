import { db } from "@/lib/db";
import { validateJWT } from "@/lib/jwt";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  const board = await db.board.create({
    data: {
      name: req.body.title,
      authorId: user.payload.id,
    },
  });

  res.status(200);
  res.json({ data: board });
}
