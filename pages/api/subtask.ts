import { db } from "@/lib/db";
import { validateJWT } from "@/lib/jwt";

export default async function handler(req, res) {
  const newStatus = req.body.status ? true : false;
  const subtask = await db.subtask.update({
    where: {
      id: req.body.subtaskId,
    },
    data: {
      status: newStatus,
    },
  });

  res.status(200);
  res.json({ data: subtask });
}
